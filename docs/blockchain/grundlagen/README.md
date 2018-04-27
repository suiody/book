# Grundlagen



## Kryptographie 

Autor: Patrick Vogt

Hash Funktionen, Digitale Signaturen, Integrität, Kerckhoffs Prinzip, Authentizität, PKI, MAC, Verbindlichkeit, Verschlüsselung, Vertraulichkeit, Algorithmen

### Zero knowledge Proofs 

Autor: Lukas Stuckstette


## Distributed Ledger vs. Datenbanken

Autor: Tim Jastrzembski

Abgrenzung zu Datenbanken

## Verteilte Systeme

In diesem Kapitel soll definiert werden, was ein verteiltes System im bezug auf die Blockchain ist und welche Probleme
gelöst werden müssen, damit vertrauen zwischen den einzelnen Nodes aufgebaut werden kann. Zudem sollen die gebräuchlichsten 
Konsens-Algorithmen erläutert werden, welche zur Zeit von den größten Blockchain-Netzwerken benutzt werden.

### Was ist ein verteiltes System
Ein verteiltes System ist prinzipiell eine Ansammlung von Computern, welche untereinander Nachrichten austauschen
können. Das Medium, über den dieser austausch stattfindet, ist dabei unbedeutend. Heutzutage wird für den Nachrichtenaustausch 
in den allermeisten Fällen das Internet genutzt, da hier Rechner von überall auf der Welt miteinander kommunizieren können und
die geschaffene Infrastruktur einfach zugänglich ist. Zudem wird ein verteiltes System darüber definiert, dass ein Benutzer das
Systems als ein einziges Systems sieht, egal mit welchem Node beziehungsweise Computer im Systems er sich verbindet. 

Verteilte Systeme können verschiedene Typologien haben. Eine Topologie beschreibt in welcher weise die Nodes im System miteinander verbunden
sind. 
![Verschiedene Typologien](./images/NetzwerkTopologien.png)

Beispielsweise kennt eine Node in einem vollvermaschten System jede andere Node und kann so auf direktem Wege miteinander kommunizieren. 
Die direkte Kommunikation ist einer der Vorteile dieser Topologie. Wenn jedoch eine neue Node dem Netzwerk betreten will, muss nicht nur
die neue Node all bereits im Netzwerk bestehenden Nodes kennenlernen, auch müssen die bereits bestehenden Nodes über den betritt informiert 
werden. Je nach größe des Netzwerkes und wie oft eine neue Node dem Netzwerk betritt kann dies zu einem Problem werden, wo das System nur noch
damit beschäftigt ist die Liste der Nodes aktuell zu halten. 

Bei den meisten Blockchain-Protokollen wird auf eine Abwandlung der vollvermaschten Topologie zurückgegriffen. Es kommt ein vermaschtes Netzwerk
oder auch Peer-to-Peer (P2P) Netzwerk zum Einsatz. Dabei können neue Nodes wie bei einem vollvermaschten Netz von jeder anderen Node 
hinzugefügt werden, allerdings können nicht alle Nodes eines Netzwerkes miteinander kommunizieren. Stattdesstehen steht jede Node mit
einer handvoll anderer Nodes in Kontakt. Soll eine Nachricht zu einer Node gesendet werden welche nicht im direkten Kontakt mit der Absendernode
steht, so wird diese Nachricht vom Netzwerk selbst weitergeleitet, bis die Nachricht eine Node erreicht, welche in Kontakt mit der Empfängernode 
steht.

### Die Blockchain
Die Blockchain ist ein verteiltes Kontobuch (Ledger), in welchem jede Transaktion von jedem Nutzer verzeichnet ist. Eine bestimmte Anzahl an
Transaktionen werden zu Blöcken zusammengefasst. Diese Blöcke werden miteinander verkettet. Dies bedeutet, dass der Hash eines Nachfolgerblock
im Header des Vorgängerblock gespeichert wird. Daher der Name Blockkette oder im englischen Blockchain. Über die Blockchain kann so die Reihenfolge 
der Transaktionen gespeichert werden. In einem verteilten Blockchain System hält jede Node eine Kopie der Blockchain. Zudem kann jede Node 
Transaktionen eines Nutzers entgegen nehmen und diese im Netzwerk bekannt machen. Das Problem, welches sich nun jeder Blockchain-Algorithmus lösen
muss ist, welche Node die gesammelten Transaktionen zu einem Block zusammenfassen und der Blockchain hinzufügen darf. Damit das Protokoll 
funktioniert müssen alle Nodes im Netzwerk sich auf eine einzige Blockchain einigen. Hinzu kommt, dass Nodes dem Netzwerk frei betreten können,
ohne das eine zentrale Stelle die Node überprüft hat. So kann keiner Node im Netzwerk vertraut werden. Es muss also ein Weg gefunden werden der
es dem Netzwerk erlaubt Blöcke von einer Node zur Kette hinzufügen zu lassen, obwohl die Absichten der hinzufügenden Node nicht bekannt sind. 
Zudem muss geregelt werden was passiert wenn es zu Unstimmigkeiten in der Blockchain kommt, wenn beispielsweise zwei Blöcke zur selben Zeit gefunden
wurden und es zu einer gabelung (fork) in der Blockchain kommt. Bei einem fork würden zwei verschiedenen Blöcke am Ende der Kette stehen. Dadurch
könnten Währungen doppelt ausgegeben werden, falls in den beiden letztens Blöcken Transaktionen von einem Konto zu zwei verschiedenen Empfängern 
verzeichnet sind. Die Aufgabe eines Konsens-Algorithmus ist es deshalb zu einer eindeutigen, gabelungsfreien Blockchain zu gelangen, auf welche
sich alle Nodes im Netzwerk einigen können. 

### Konsens-Algorithmen
Es gibt verschiedene Wege zu einem Konsens in einem verteilten System zu kommen. Viele Cryptowährungen unterscheiden sich alleine in ihrem
Konsens-Algorithmus und versuchen so ein alleinstellungsmerkmal zu erlangen. Die gebräuchlichsten Konsens-Algorithmen sind:

* Proof-of-Work
* Proof-of-Stake
* Practical Byzantine Fault Tolerance
* Proof of Elapsed Time
* Federated Byzantine Agreement 

Diese Algorithmen werden unteranderem von jeweils Bitcoin, Etherium, Ripple, InterLedger (Hyperledger) und Hyperledger Fabric verwendet. 

#### Proof-of-Work
Wie bei allen Blockchain-Protokollen wird auch beim Proof-of-Work Transaktionen zu Blöcken zusammengefasst. Jede Node die eine Transaktion empfängt
speichert diese zunächst in einem Cache und leitet sie an alle anderen Nodes im Netzwerk weiter. Liegen genug Transaktionen in einem Cache können
diese zu einem Block zusammengefasst werden. Alle Nodes fassen Transaktionen in einem eigenen Block zusammen. Dies hat zur Folge das nicht alle Nodes
die gleichen Transaktionen in ihrem Block aufgenommen haben, da Transaktionen beim verschiecken zwischen Nodes verloren gegangen sein können oder es
durch eine Verzögerung nicht in den aktuellen Block geschafft haben. 

Nachdem eine Node einen Block zusammengefasst hat, versucht sie einen Nonce zu finden, welcher, gehasht mit dem Blockhash, einen neuen Hashwert
bildet. Dieser neu gebildete Hashwert muss allerdings eine bestimmte Anzahl an führenden Nullen besitzen um vom Netzwerk als der rechtmäßige 
Nachfolgerblock anerkannt zu werden. Die Anzahl der führenden Nullen des Hashes wird Schwierigkeit (Difficulty) genannt. Diese Schwierigkeit passt
sich dynamisch an das Netzwerkes an, sodass mit sich ändernder Rechenleistung der zeitliche Abstand der Blockerstellung gleichbleibend ist.
Der eigentliche zeitliche Abstand ist je nach Implementierung des Proof-of-Work unterschiedlich. Im Falle von Bitcoin beträgt er 10 Minuten. 

Der neu gefundene Block wird von der findenden Node direkt in die Kopie ihrer Blockchain eingefügt und anschließend an alle weiteren Nodes gesendet.
Nodes die den neuen Block empfangen prüfen ihn auf seine Richtigkeit und fügen ihn dan zu ihrer eigenen Kopie der Blockchain hinzu. Sollte es in der
eigenen Blockchain bereits einen Nachfolgerblock geben, weil zwei Nodes zur selben Zeit einen Block gefunden haben, werden zunächst beide Blöcke als Nachfolger 
behandelt. Nodes können frei entscheiden welchen der beiden Nachfolgerblöcke sie als legitim ansehen. Wird allerdings ein neuer Block gefunden welcher die 
Blockchain um einen Block verlängert, so wird nur der längste Teil der Blockchain als legitim angesehen und der andere Teil der Blockchain wird verlassen.
Es kann vorkommen das eine Gabelung in der Kette zwei bis drei Blöcke erreicht, bevor ein Ast sich als legitim herrausstellt. Transaktionen die nur
auf dem abgeschnittenen Ast verzeichnet waren werden somit ungültig. Aufgrund dessen sollte bei einer Transaktion gewartet werden bis mindestens Sechs 
Blöcke nach der eigentlichen Transaktion angehängt worden sind.  

Aufgrund der Tatsache das die Findung eines Blockes Rechenleistung benötigt kann davon ausgegangen werden das keine einzelne Person Blocks zur 
Kette hinzufügen kann. Da nur die längste Kette von allen Nodes als legitim angesehen wird, müsste eine Person alleine jeden einzelnen neuen Block
finden, damit seine eigene Blockchain schneller wächst als die Blockchain an der das Rest der Netzwerkes arbeitet. Durch diesem Umstand wird die
dezentralisierung gewährleistet. Sollte alllerdings eine Person oder Organization mehr als 51% der Rechenleistung kontrollieren, könnte diese 
Organisation den Verlauf der Blockchain manipulieren.  

## Dezentrale Anwendungen

* DApps, Web 3.0


Autor: Patrick Starzynski 


