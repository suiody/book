# Grundlagen

## Kryptographie
Autor: Patrick Vogt

...

### Einige wichtige Begriffe und Grundsätze der Kryptographie
Autor: Patrick Vogt

**CIA-Schutzziele**

Das Akronym *CIA* ergibt sich aus den folgenden drei Begriffen,  <a>[[BAUM14]](#ref_baum14)</a>:

* **C**onfidentiality (Vertraulichkeit): Informationen sind nur autorisierten Personen zugänglich
* **I**ntegrity (Integrität): Informationen sind korrekt, aktuell und vollständig
* **A**vailability (Verfügbarkeit): Informationen sind berechtigten Personen dort und dann zugänglich, wo und wann diese die Informationen benötigen

**Authentizität**

Das Sicherheitsziel Authentizität gewährleistet, dass ein Kommunikationspartner wirklich derjenige ist, der er vorgibt zu sein. Sind Daten oder Informationen authentisch, so ist deren Herkunft gewiss.

**Nichtabstreitbarkeit**

Ebenso wichtig ist der Begriff der *Nichtabstreitbarkeit*. Diese gewährleistet eine Nachweisbarkeit gegenüber Dritten, sodass der Versand und Empfang einer Nachricht bzw. von Daten/Informationen bewiesen werden kann. Hieraus ergeben sich zwei Unterkategorien:

* Nichtabstreitbarkeit der Herkunft: verhindert ein nachträgliche Abstreiten des **Versands** einer Nachricht

* Nichtabstreitbarkeit des Erhalts: verhindert ein nachträgliche Abstreiten des **Erhaltens** einer Nachricht

**Verbindlichkeit**

Der Begriff der Verbindlichkeit kombiniert Authentizität mit Nichtabstreitbarkeit. Im Falle der Datenübertragung heißt das, dass der Absender seine Identität bewiesen hat und der Empfang der Nachricht nicht abgetritten werden kann, <a>[[BSI18]](#ref_bsi18)</a>.

**Kerckhoffs’ Prinzip**

Ein wichtiger Grundsatz der Kryptographie wurde 1883 von Auguste Kerkchoffs von Nieuwenhof (* 1835, † 1903) festgestellt. In seiner Schrift beschrieb er das folgende Prinzip:

>Die Sicherheit eines Kryptosystems liegt allein in der Schwierigkeit, den Schlüssel zu finden – sie darf nicht auf der Geheimhaltung des Systems beruhen. <a>[[BAUM14]](#ref_baum14)</a>

Alle heutzutage gängigen Verschlüsselungsverfahren folgen diesem Grundsatz. 

### Hash Funktionen
Autor: Patrick Vogt

Hash Funktionen bilden einen wichtigen Bestandteil innerhalb der Kryptographie. Dort berechnen Sie aus einer gegebenen Nachricht einen sogenannten *Hashwert* fester Länge. Aus kryptografischer Sicht können Hashwerte als eine Prüfsumme gesehen werden. 
Es handelt sich im Prinzip um eine Art "Einwegfunktion". Der Weg vom Definitionsbereich hin zum Bildbereich ist einfach durchführbar, die Rückrichtung ist jedoch schwer. So können Hash Funktionen auch z.B. für das Speichern von Passwörtern verwendet werden, sodass innerhalb der Datenbank das Passwort nicht als Klartext sondern als Hashwert hinterlegt wird, <a>[[PAAR16]](#ref_paar16)</a>.

Aufgrund des eingeschränkten Bildbereichs (begrenzte Anzahl an Zeichen) und des unbegrenzten Definitionsbereichs kann es zu *Kollisionen* kommen (unterschiedliche nachrichten führen zu dem gleichen Hashwert). 

...

### Verschlüsselung
Autor: Patrick Vogt
#### Verschlüsselungsarten

*Symmetrische Verschlüsselung*

Eine Art der Verschlüsselung ist die symmetrische Verschlüsselung. Bereits Gaius Julius Caesar (* 100 v. Chr., † 44 v. Chr.)  verwendete diese Art der Verschlüsselung zur Kommunikation mit seinen Generälen 
(die sogenannte *Caesarchiffre*). Hierbei sind Chiffrier- und Dechiffrierschlüssel gleich, siehe nachfolgende Abbildung. Man spricht auch von einem *symmetrischer Schlüssel*.

<a name="ref_sym_encryption"></a>![sym_encryption](./images/sym_verschl.png "Symmetrische Verschlüsselung")
[Bildquelle](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)

Problematisch ist hierbei, dass Sender und Empfänger den gemeinsamen Schlüssel einmalig vor der ersten Übertragung austauschen müssen. 
Es wird somit ein Kommunikationskanal benötigt, in dem die Teilnehmer ihren Schlüssel auf sichere Art und Weise austauschen können, siehe nachfolgende Abbildung.
Ebenso ist zu erwähnen, dass die Anzahl der benötigten Schlüssel mit der Anzahl der Kommunikationspartner drastisch steigt. Damit N Teilnehmer sicher miteinander kommunizieren können, werden 
**N(N-1)/2** Schlüssel benötigt <a>[[KÜST11]](#ref_kuesters11)</a>.
Als Vorteil ist unter anderem die hohe Geschwindigkeit für das Ver- und Entschlüsseln der Daten zu nennen, da diese Verfahren meist auf effizienten Operationen (z.B. XOR) beruhen , <a>[[STOP18]](#ref_stop18)</a>.
 

![sym_encryption](./images/sym_verschl2.png "Symmetrische Verschlüsselung")
Abbildung entnommen aus <a>[[BAUM14]](#ref_baum14)</a>

*Asymmetrische Verschlüsselung*

Im Gegensatz zur symmetrischen Verschlüsselung verwendet die asymmetrische Verschlüsselung verschiedene Schlüssel zur Ver- und Entschlüsselung.
Es existiert ein *Schlüsselpaar*, das aus einem öffentlichen (public key) sowie einem privaten Schlüssel (private key/secret key) besteht. Das grundsätzliche Verfahren ist in der folgenden Abbildung 
dargestellt. 
  
![asym_encryption](./images/asym_verschl.png "Asymmetrische Verschlüsselung")
[Bildquelle](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)

Der Absender verwendet den öffentlichen Schlüssel des Empfängers zum Verschlüsseln der Daten. Der  Empfänger erhält den verschlüsselten Text und kann diesen mit seinem privaten Schlüssel
dechiffrieren. Der große Vorteil dieses Verfahrens liegt darin, dass der öffentliche Schlüssel nicht geheim gehalten werden muss, da er nicht zum entschlüsseln der Daten genutzt werden kann. Der bei der symmetrischen Verschlüsselung benötigte sichere Kommunikationskanal entfällt somit, siehe nachfolgende Abbildung. Der private Schlüssel sollte dementsprechend nur dem jeweiligen Empfänger bekannt sein und von ihm geheim gehalten werden. Da die Schlüssel jeweils von nur einem Teilnehmer abhängig sind, steigt die Anzahl der Schlüssel bei steigender Anzahl an Teilnehmern nicht quadratisch, wie bei der symmetrischen Verschlüsselung, sondern linear.

![asym_encryption](./images/asym_verschl2.png "Asymmetrische Verschlüsselung")
Abbildung entnommen aus <a>[[BAUM14]](#ref_baum14)</a>

### Digitale Signaturen
Autor: Patrick Vogt

Ähnlich wie herkömmliche (analoge) Signaturen sollen digitale Signaturen sicherstellen, dass eine Nachricht bzw. ein Dokument wirklich von dem Absender/Signierer stammt, der vorgibt das Dokument abgeschickt zu haben.
Eine Verschlüsselung der Daten erfolgt bei der Signierung nicht, wenngleich eine zusätzliche Verschlüsselung der signierten Nachricht durchaus üblich ist.
Mithilfe der digitaler Signatur kann beispielsweise beim Schlüsselaustausch zweier Teilnehmer sichergestellt werden, dass mit dem richtigen Gegenüber kommuniziert wird <a>[[PAAR16]](#ref_paar16)</a>.
Die nachfolgende Abbildung zeigt den prinzipiellen Ablauf beim Übermitteln digial signierter Dokumente.

![dig_signature](./images/digital_sign.svg "Prinzipt der digitalen Signatur")
[Bildquelle](https://www.docusign.com/how-it-works/electronic-signature/digital-signature/digital-signature-faq)

Das zu signierende Dokument wird mithilfe einer Hash-Funktion verarbeitet und anschließend mit dem privaten Schlüssel des Signierers verschlüsselt und an das originale Dokument angefügt. Das nun signierte 
Dokument wird an den Empfänger gesendet.  Die Signatur wird mithilfe des öffentlichen Schlüssels des Signierers entschlüsselt. Der Empfänger wendet anschließend den gleichen Hash-Algorithmus wie der Absender 
auf das Dokument an und vergleicht sein Ergebnise mit der empfangenen Signatur. Stimmen die beiden Hashwerte überein wurde der Text mit sehr hoher Wahrscheinlichkeit von der angegebenen Person signiert und nicht verändert. 

Im Gegensatz zu anderen (auf symmetrischen Verfahren basierenden) Signaturverfahren kann der Empfänger der Nachricht jedem - der ebenfalls den öffentlichen Schlüssel des Signierers kennt - beweisen, dass dieser die Nachricht verfasst hat.
Solche digitalen Signaturverfahren können deshalb auch zur juristischen Beweisführung verwendet werden <a>[[PAAR16]](#ref_paar16)</a>.

Anforderungen an die Verwendung von digitalen Signaturen werden in Deutschland im Signaturgesetz (SigG) bzw. in der Signaturverordnung (SigV) angegeben.
Hier werden drei verschiedene Arten von elektronischen Signaturen unterschieden, <a>[[BAUM14]](#ref_baum14)</a>:

>* Als **elektronische Signatur** werden in elektronischer Form vorliegende Daten betrachtet, die zur Authentifizierung dienen und die anderen elektronischen Daten beigefügt
werden können. Es könnte sich hierbei also auch um eine eingescannte Unterschrift
handeln.
>* **Fortgeschrittene elektronische Signaturen** sind ausschließlich dem Inhaber des Signierschlüssels zuzuordnen. Hier handelt es sich also um Signaturen, die mit einem digitalen
Signatursystem erzeugt wurden. Allerdings werden keine besonderen Anforderungen
an die Sicherheit gestellt.
>* **Qualifizierte elektronische Signaturen** müssen ebenfalls mit einem digitalen Signatursystem erzeugt werden. Zusätzlich müssen Sicherheitsanforderungen bei der Erzeugung dieser Signaturen erfüllt sein, und der Zusammenhang zwischen Testschlüssel
und Identität des entsprechenden Teilnehmers muss durch ein zum Zeitpunkt der Erstellung gültiges qualifiziertes Zertifikat bestätigt werden.

Letztere Signaturen beinhalten zusätzlich zum Namen und Testschlüssel weitere Details (z.B. das Erzeugungsdatum und Gültigkeit des Zertifikats) <a>[[BAUM14]](#ref_baum14)</a>.

### Message Authentication Code (MAC)
Autor: Patrick Vogt

Message Authentication Codes (MACs) werden auch kryptografische Prüfsummen genannt. Wie auch digitale Signaturen dienen sie der Sicherstellung der Integrität und Authentisierung von Nachrichten, wobei MACs jedoch auf einem symmetrischen Verfahren beruhen, wodurch eine Nichtzurückwesbarkeit nicht gewährleistet werden kann. MACs basieren auf Hash Funktionen oder Blockchiffren, wodurch sie in der Regel deutlich schneller als digitale Signaturen verarbeitet werden können.

Im Wesentlichen wird mithilfe eines symmetrischen Schlüssels *k* und der Nachricht *x* eine Prüfsumme *m* gebildet:

>m = MAC<sub>k</sub>(x)

Auf diese Art und Weise soll sichergestellt werden, dass die Nachricht auf dem Weg zum Empfänger nicht verändert wurde <a>[[PAAR16]](#ref_paar16)</a>.

Der gesamte Vorgang läuft prinzipiell wie bei digitalen Signaturen ab:

![dig_signature](./images/crypto_mac.png "Prinzip von MACs")
[Bildquelle](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MAC.svg/661px-MAC.svg.png)

Der Sender bildet mithilfe des gemeinsamen Schlüssels und der Nachricht eine Prüfsumme und verschickt die Nachricht mit angehängter Prüfsumme. Der Empfänger führt den gleichen Vorgang durch und prüft seine berechnete Prüfsumme mit der erhaltenen. 

### Public Key Infrastructure (PKI)
Autor: Patrick Vogt

Bei Verfahren, die auf asymmetrischen Methodiken beruhen, muss sichergestellt werden, dass ein bestimmter öffentlicher Schlüssel wirklich einer gewissen Person gehört. Die Gültigkeit dieser *Schlüsselbindung* wird von *Zerzifizierungsstellen* (*certification authorities, CA*), mithilfe von Zertifikaten (*cetificates*), bestätigt <a>[[KÜST11]](#ref_kuesters11)</a>. 

Public Key Infrastructures verwalten und verteilen die Schlüssel und Zertifikate. 

...
### Algorithmen
Autor: Patrick Vogt

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

Autor: Patrick Starzynski 

### DApps

#### Definition
Dezentrale Anwendungen (DApps) stellen eine Möglichkeit für die Umsetzung skalierbarer Applikationen durch die Blockchain-Technologie dar.
Während konventionelle Anwendung maßgeblich durch einzelne Anbieter betrieben werden, werden DApps auf einer Vielzahl von Anwendern verteilt.
Durch die Verteilung werden die Anwenderdaten nicht zentralisiert gespeichert und verwaltet, wodurch durch das Peer-to-Peer-Modell ein bspw. serverbedingter Ausfall
verhindert werden kann. 
Dabei muss eine dezentrale Anwendung vier grundlegende Kriterien erfüllen:
1. Die Anwendung muss quelloffen und autonom funktionsfähig sein. 
2. Die Daten und Protokolle der Operationen müssen kryptografisch mittels einer dezentralen und
öffentlichen Blockchain gespeichert werden.
3. Die Applikation muss kryptografische Token nutzen, die zum Zugang zur Anwendung genutzt werden. Dabei werden die Miner, die zur Tokengenerierung beigetragen haben entsprechend entlohnt.
4. Die Anwendung muss die genutzten Token unter Berücksichtigung kryptografischer Algorithmen und Konsensverfahren, z.B. durch Proof of Work, generieren können.

Durch das Einhalten dieser Kriterien wird eine Kontrolle durch ein einzelnes Gremium, wie z.B. ein Unternehmen, verhindert.

#### Klassen
Zur Klassifizierung von dezentralen Anwendungen werden drei verschiedene Typen berücksichtigt. 
1. Type I Anwendungen nutzen eine eigene Blockchain, darunter fallen auch die sogenannten Altcoins, die durch Forks des Bitcoins entstanden sind.
2. Type II Anwendungen sind Protokolle die die Blockchain einer Type I Anwendung nutzen. Jedoch werden die Token für die Nutzung der Anwendung benötigt. So sind Type II Anwendungen aufbauend auf Type I Anwendungen.
3. Type III Anwendungen nutzen die Protokolle einer Type II Anwendung. 

#### Entwicklung einer dezentralen Anwendung

Die Entwicklung einer dezentralen Anwendung wird üblicherweise in drei Teilschritte gegliedert:
1. Es wird ein Whitepaper veröffentlicht, dass die Funktionalitäten und Mechanismen der Anwendung beschreibt.
2. Initiale Token werden verteilt. Des Weiteren wird, wie z.B. beim Bitcoin, eine Software veröffentlicht, die als Referenzprogramm zum Minen genutzt werden kann.
3. Die Besitzanteile der Anwendung werden verbreitet, durch diese Verbreitung wird die Anwendung zunehmend dezentralisiert.

### Web 3.0




## Literaturverzeichnis

<a name="ref_baum14">[BAUM14]</a>: Baumann, Ulrike ; Franz, Elke ; Pfitzmann, Andreas: Kryptographische Systeme. Berlin : Springer Vieweg, 2014, ISBN: 978-3-642-45332-8 

<a name="ref_bsi18">[BSI18]</a>:  Bundesamt für Sicherheit in der Informationstechnik (BSI) - Referat B 23, Cyber-Sicherheit für den Bürger und Öffentlichkeitsarbeit: IT-Sicherheit: 4 Glossar und Begriffsdefinitionen. Bonn, 2018 URL: https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKataloge/Inhalt/Glossar/glossar_node.html (abgerufen am 29.04.2018)

<a name="ref_kuesters11">[KÜST11]</a>: Küsters, Ralf ; Wilke, Thomas: Moderne Kryptographie : Eine Einführung. 1. Aufl. Wiesbaden : Vieweg + Teubner, 2011, ISBN: 978-3-519-00509-4

<a name="ref_paar16">[PAAR16]</a>: Paar, Christof ; Pelzl, Jan: Kryptografie verständlich : Ein Lehrbuch für Studierende und Anwender. Berlin, Heidelberg : Springer Vieweg, 2016, ISBN: 978-3-662-49296-3


<a name="ref_stop18">[STOP18]</a>: Stobitzer, Christian: Symmetrische Verschlüsselung. Karlsruhe. URL: http://www.kryptowissen.de/symmetrische-verschluesselung.html (abgerufen am 27.04.2018)