# Blockchain Technologie


## Architektur und Funktionsweise

Autor: Sebastian Janzen

## Arten einer Blockchain 

Autor: Sebastian Janzen

Public, Private, Konsortium, Permissionless, Permissioned etc.



## Eigenschaften einer Blockchain 

Autor: Björn Enders-Müller

Immutable
Merkle Tree
Transaktion
Blöcke


## Crypto-Economics

Autor: Kevin Schima

### Abgrenzung: Token / Coins

### Tokenization

### Initial Coin Offering (ICO)

Ein Initial Coin Offering ist eine, bis dato, weitgehend unregulierte Methode der Kapitalaufnahme bei der im Gegensatz zum klassischen Initial Public Offering (IPO) (deutsch: Börsengang), die Kapitalaufnahme in Form von Kryptowährungen erfolgt. Vergleichbar mit dem Börsenhandel bei dem mit Echtgeldwährungen (FIAT Währungen) Anteile an einem Unternehmen in Form von Aktien erworben werden können, werden bei einem ICO üblicherweise Token ausgegeben die mittels Kryptowährungen gekauft werden. Die Mindestinvestition ist, ähnlich wie bei Crowdfunding Finanzierungsmodellen, so niedrig, dass auch private Kleininvestoren partizipieren können.

Während der traditionelle Finanzmarkt durch nationale und internationale Finanzaufsichten rechtlich stark reguliert ist, ist dies bei den neuartigen ICOs durch die rasante technische Entwicklung und unterstützt durch die anonymen bzw. pseudonymen Transaktionen von Kryptowährungen bisher kaum der Fall.


#### Typischer Ablauf eines ICOs basierend auf Ethereum (ERC20) Token

* Ein Unternehmen bzw. loses Entwicklerkollektiv veröffentlich ein Whitepaper in dem eine Geschäftsidee / Anwendungsbereich für den Token und eventuell zukünftige Entwicklungsziele formuliert sind

* Ein Smart Contract auf ERC20 Basis wird für den ICO erstellt in dem unteranderem Bezeichnung und Maximalmenge an Token definiert wird

* Der Token Verkauf (Sale) beginnt, der ICO Ersteller legt einen initialen Verkaufspreis fest, bespielsweise 1000 Token / 1 Ether

* Der Token Sale endet

* Der Token wird an speziellen Kryptowährungs / Token Börsen gelistet, und kann öffentlich gehandelt werden, der Wert der Token wird durch die Marktmechanismen Angebot/Nachfrage bestimmt

Für die Investoren des ICOs hat sich der Wert der Token im Idealfall durch mediale Aufmerksamkeit, Entwicklungsfortschritt und Kooperationen mit anderen Unternehmen gegenüber des intialen Sales bzw. Pre-Sales vervielfacht. 

#### Risiken




## Herausforderungen und Risiken

### Technische Herausforderungen
Autor: Fynn Klöpper

Angriffsszenarios (Sybil attack, 51%-Attack)
Skalierung (-sprobleme)



#### Angriffsszenarien

##### Sybil Attacke
Quellen:
https://www.freehaven.net/anonbib/cache/sybil.pdf
https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/10314/file/tbhpi113.pdf
###### Definition
Eine Sybil-Attacke beschreibt eine Art des Angriffs auf eine Blockchain, bei der eine schadhafte Entität mehrere Identitäten vorgibt, um einen substantiellen Teil des Systems zu kontrollieren und so die Sicherheit der Redundanz zu komprimieren.

Für Peer-to-Peer-Systeme ist es essentiell, dass Daten redundant gespeichert werden. Durch die Redundanz der Speicherung derselben Daten auf verschiedenen Entitäten kann so die Integrität der Daten sichergestellt werden. Weiterhin setzen viele P2P-Systeme auf die Fragmentierung der Daten, um sich gegen Datenlecks abzusichern.
   
Falls das System scheitert Identitäten zu Entitäten zu mappen, kann nun eine Entität mehrere Identitäten vortäuschen und von dem System mehrmals Daten oder zusammenhängende Daten zugewiesen bekommen. Hierdurch wäre die Redundanz, als auch die Fragmentierung der Daten komprimiert. 
###### Lösungsansätze

Mit Identifizierungs-Authorität:
- VeriSign
- CFS
- SFS
- EMBASSY
- ICANN / Wave Systems


Ohne Identifzierungs-Authorität:

Ein Schutz ohne dedizierte Identifizierungs-Authorität stellt sich als äußerst schwierig heraus.
Oftmals fällt der erste Gedanke auf ein System, bei dem ältere, etablierte Identitäten neue Identitäten kollektiv verifizieren. Dieser Lösungsansatz geht allerdings davon aus, dass die erste Generation von Identitäten vertrauenswürdig ist, welche bereits durch eine Sybil-Attacke komprimiert sein könnte und somit den weiteren Verlauf der Kette unsicher macht.  

##### 51%-Attack
Quellen:
http://fmt.cs.utwente.nl/files/sprojects/268.pdf

###### Definition
Eine 51%-Attacke beschreibt eine Attacke auf eine Blockchain, meist die Bitcoin-Blockchain, bei der ein Miningpool, der mehr als 50% der Hashrate des gesamten Netzwerks ausmacht, die Kontrolle über den weiteren Verlauf der Blockchain übernimmt.
Der Angreifer ist daraufhin in der Lage Coins "doppelt" auszugeben, also einen Händler zu bezahlen und danach die Transaktion wieder rückgängig zu machen oder auch Transaktionen die Bestätigung zu verwehren und somit den Handel zwischen einigen oder auch allen Benutzern zu unterbrechen.    

Auch wenn der Name der Attacke suggeriert, dass 51% der Rechenleistung des Netzwerks benötigt werden, um die Attacke durchzuführen, ist dies nicht notwendig.
Bereits mit einer kleineren Anzahl an relativer Rechenleistung ist es möglich einen Angriff durchzuführen. In diesem Fall beträgt die Erfolgschance allerdings nicht 100%, sondern ist abhängig davon, wie viel relative Rechenleistung zur Verfügung steht und wie viele Blöcke zur Bestätigung ein Händler erwartet.
Bild: https://www.btc-echo.de/tutorial/bitcoin-51-attacke/

Falls der Angreifer über 51% relativer Rechenleistung verfügt und somit schneller Blöcke generieren kann als der Rest des Netzwerkes, kann er beliebig lange an seinem privaten Fork weiter Blöcke anhängen bis er länger als der öffentliche und vertrauenswürdige Branch ist. 
Da immer der längere Branch vom System als der "richtige" Branch angenommen wird, kann somit der Angreifer bestimmen, welche Transaktionen mit in den Branch aufgenommen und welche Blöcke ungültig gemacht werden sollen. 
###### Lösungsansätze
- Bisher ein rein theoretischer Angriff in Anbetracht von Bitcoin
- Bereits bestehende, gelockte Blöcke, können trotzdem nur sehr schwer verändert werden
- Erhöhte Anzahl von Bestätigungen kann eine tatsächliche 51%-Attacke zwar nicht verhindern, allerdings eine Attacke eines Angreifers mit unter 51% unwahrscheinlicher machen, sowie die Angriffsdauer verlängern, was die Attacke unprofitabel machen kann.

##### Cryptographie-Angriffe

###### Definition

###### Lösungsansätze

#### Skalierung (-sprobleme)
Quellen:
https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/10314/file/tbhpi113.pdf

##### Neue Nutzer
##### Größeres Transaktionsaufkommen


### Ökonomische und gesellschaftliche Herausforderungen

Autoren: Mario Cichonczyk und Martin Teuber

Konsequenzen
Sozial-wissenschaftlich
betriebswirtschaftlich
