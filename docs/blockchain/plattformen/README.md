# Populäre Blockchain Plattformen

## Bitcoin 
Autor: Nils Dralle

Bitcoin ist eine sogenannte Kryptowährung, die ohne eine zentrale Kontrollinstanz (wie z.b. eine Bank) auskommt. Stattdessen bilden alle, die am Zahlungsverkehr mit Bitcoin teilnehmen wollen, ein Netzwerk von Knoten, eine sogenannte Blockchain. Die Bitcoin-Blockchain fungiert als Kontrollinstanz. In ihr werden alle Transaktionen mit Bitcoins vermerkt, und alle Teilnehmer des Netzwerks sind gemeinsam dafür verantwortlich, dass die zugrunde liegende Blockchain aktuell und konsistent ist. Um eine Überweisung mit Bitcoins vornehmen zu können, müssen Sender und Empfänger eine aktuelle Kopie der Blockchain haben. Jede Transaktion im Bitcoin-Netzwerk wird kryptografisch abgesichert.

### Geschichte

Das Bitcoin-Netzwerk wurde im Jahr 2008 erstmals theoretisch beschrieben und 2009 praktisch umgesetzt. Das Konzept kryptografischer Währungen wurde bereits 1998 veröffentlicht.

### Bootstrapping

Um sich initial mit anderen Knoten zu verbinden, nutzt der Bitcoin einen sogenannten "Bootstrapping"-Prozess. Mehrere Knoten des Netzwerks fungieren als Startknoten, die die Addressen weiterer Knoten an neue Knoten verteilen. Die Addressen der Startknoten sind im Domain-Name-System eingetragen, welches der Bitcoin-Client nutzt, um die Addressen der Startknoten zu erhalten. Nachdem die initiale Verbindung erfolgt ist und die Addressen weiterer Knoten von den startknoten weitergegeben wurden, kommmt das Bitcoin-Netzwerk auch ohne die Startknoten aus.

### Transaktionen 

Jede Transaktion im Bitcoin-Netzwerk besteht aus der kryptografischen Signatur des Senders und dem mit dem Public-Key des Empfängers signierten Hash der vorherigen Transaktion. Auf diese Weise kann der Empfänger die Transaktion verifizieren. Transaktionen werden an alle Knoten im Netzwerk verteilt. [NAKA08] Jede Transaktion hat beim Bitcoin mehrere In- und Outputs, um die Transaktion in mehrere Teilbeträge zerlegen zu können.

### Zeitstempel

Damit jeder Knoten die Transaktionen zeitlich einordnen kann, implementiert Bitcoin einen verteilten Zeitstempel-Server. [NAKA08] Der Zeitstempel besteht aus dem Hashwert der Daten, die einen Zeitstempel erhalten sollen, sowie dem Hashwert des vorherigen Zeitstempels.

### Proof-of-Work

Der Bitcoin nutzt einen Proof-of-Work Algorithmus zu Entscheidungsfindung über neue Blöcke. Dabei wird innerhalb des neuen Blocks ein spezieller Wert, eine sogennante *Nonce*, angelegt. Dieser Wert wird solange erhöht, bis ein Hash für den Block gefunden wird, der mit einer bestimmten Anzahl Nullen beginnt. Über die benötigte Anzahl Nullen kann die Schwierigkeit des Proof-of-Work angepasst werden. Beim Bitcoin wird die Schwierigkeit automatisch so angepasst, dass ein neuer Block etwa alle 10 Minuten gefunden wird.

### Protokoll

Mining, UTXO etc.

## Hyperledger
Autor: Cem Basoglu

Das in 2016 gegründete Hyperledger Projekt fasst mehrere Frameworks und Tools
zusammen, die den Einsatz von Distributed Ledger Technologien in Business
Applikationen ermöglichen sollen <a>[[CHAC16]](#ref_cach16)</a>.
Neben den von IBM und Intel initial beigesteuerten Distributed Ledger Codebasen,
Fabric und Sawtooth, gehören mittlerweile drei weitere Frameworks und eine Vielzahl
von Tools zum Hyperledger Projekt.

Im Gegensatz zu anderen populären Blockchain Plattformen, bei dem eine
Kryptowährung im Vordergrund steht, setzen die Frameworks in Hyperledger auf
einen möglichst modularen Distributed Ledger und überlassen die Implementierung
einer Währung und Zahlungsabwicklung, der auf dem Framework aufbauend
Applikation <a>[[OWEN17]](#ref_owen17)</a>.

### Frameworks
Jedes Framework im Hyperledger Projekt stellt eine eigene Blockchain Plattform
dar, die sich sowohl konzeptionell als auch von der Codebasis unterscheiden.
Bevor die einzelnen Frameworks in den folgenden Abschnitten im Detail beschrieben
werden, bietet nachstehende Übersicht einen Vergleich der jeweiligen Distributed
Ledger Technologien.

Merkmal | Fabric | Sawtooth | Iroha | Indy | Burrow
--- | --- | --- | --- | --- | ---
Projekt Status | Aktiv | Aktiv | Aktiv | Inkubation | Inkubation
Berechtigung | permissioned | permissioned / permissionless | permissioned | permissioned | permissioned
Konsensus | SOLO, Kafka, SBFT* | PoET, RAFT | YAC (BFT) | RBFT <a>[[AUBL13]](#ref_aubl13)</a> | Tendermint
Smart Contract / Business Model | ja | ja* | nein | nein | ja
SDK | Go, Node.JS, Java | Python, Go, Javascript | gRPC API | - | Solidity

\*siehe entsprechenden Abschnitt

#### Fabric
Hyperledger Fabrik ist ein Distributed Ledger Framework für *permissioned*
Blockchains, zum Ausführen von verteilten Applikationen unter der Verwendung
von Standard Sprachen wie Go, Java oder Javascript <a>[[ANDR18]](#ref_andr18)</a>.

Wie in Abbildung 8.4.2.1 dargestellt, wird das Framework in die Komponenten
Membership Service Provider, Peer, Ordering Service und Chaincode unterteilt,
wobei durch den modularen Aufbau die Komponenten beliebig ausgetauscht oder
durch eigene eine Implementierung ersetzt werden können. Die Kommunikation
zwischen den Komponenten erfolgt mittels gRPC.

![Fabric Architektur](./images/fabric_arch.png "Fabric Architektur")

Abbildung 8.4.2.1 - Fabric Architektur (Quelle: <a>[[ANDR18]](#ref_andr18)</a>)

##### Membership Service Provider
Damit eine Entität, wie z.b. ein Peer oder Client, mit dem Distributed Ledger
interagieren kann, muss dieser im System bekannt sein. Dazu wird jeder Entität
ein Zertifikat nach dem X.509 Standard ausgestellt und der *Public Key* beim
Membership Service Provider registriert. Die Zertifikate dienen als Identität
und werden sowohl für die Signierung von Transaktionen, als auch für die TLS
gesicherte Kommunikation zwischen der Peers verwendet.

Der MSP kann zentral oder, wenn es das Geschäftsmodell voraussetzt, durch
mehrere Teilnehmer der Blockchain in einem Verbund betrieben werden. Ebenfalls
lassen sich ein oder mehrere Organisationen und die dazugehörigen Root- bzw.
Intermediate-Zertifkate beim MSP registrieren. Mittels der organisatorischen
Einheiten können komplexere Anwendungsfälle konstruiert werden, bei dem z.B.
mehrere Unternehmen miteinander agieren können, Transaktionen jedoch nur von
den Unternehmen gelesen werden können, die von der Transaktion tangiert werden.

![Organisationen und Channels](./images/peers.diagram.9.png "Organisationen und Channels")

Abbildung 8.4.2.2 - Organisationen und Channels (Quelle: <a>[[FABR18]](#ref_fabr18)</a>)

Darüber hinaus können sogenannte Channels verwendet werden, um das
Blockhain-Netzwerk noch weiter zu unterteilen. Jedes dieser Sub-Netzwerke
besitzt sowohl einen eigenen Kommunikationskanal, als auch einen eigenen
Distributed Ledger. Wie in Abbildung 8.4.2.2 dargestellt, können somit mehrere
private Ledgers zwischen den Teilnehmern betrieben werden.

Um eine für Bitcoin oder Ethereum typische Blockchain Topologie zu
implementieren, würde somit nur ein Channel benötigt werden. Alle Peers würden
diesen Channel nutzen, um über einen gemeinsamen Distributed Ledger im Konsens
zu sein.

##### Peer
Ein Fabric Blockhain-Netzwerk besteht in der Regel aus mehreren Peers. Jeder
Peer kann an einem oder mehreren Channels teilnehmen. Für jeden Channel wird ein
eigener, logisch getrennter Ledger verwaltet. Der Zugriff auf den Ledger wird
über Smart Contracts ermöglicht. Dazu verbindet sich der Client mit einem Peer
und nutzt die Funktionen der auf diesem Peer verfügbaren Smart Contracts, um
Daten von dem Ledger abzufragen bzw. zu ändern. Trotz eines gemeinsamen Ledgers
je Channel, müssen nicht alle Peers die selben Smart Contracts bereitstellen.

Für die Persistierung des Ledgers wird standardmäßig LevelDB verwendet, um den
Zustand der Smart Contracts als Schlüsselwertepaar abzulegen. Alterantiv kann
auch CouchDB genutzt werden, um komplexere Datenstrukturen in Form im
JSON-Format zu persistieren und damit Eigenschaftenabhängige Abfragen zu
ermöglichen.

Abfragen vom Distributed Ledger werden umgehend vom Peer beantwortet. Für
Aktualisierungen muss der Client eine bestimmte Anzahl von Bestätigungen
(*Endorsement*) von mehreren Peers einholen. Dazu ruft die Applikation zunächst
die gewünschte Funktion im Smart Contract auf, wodurch ein Antrag (*Proposal*)
zur Änderung des Distributed Ledgers initiiert wird. Die Peers führen dabei
die Funktion im Smart Contract aus und erzeugen eine signierte Bestätigung des
Antrags. Hierbei wird der Ledger jedoch noch nicht geändert und lediglich die
Bestätigungen der Peers erzeugt.

##### Ordering Service


##### Client
##### Chaincode
Ein zentrales Element im Fabric Framework bildet der Smart Contract, der auch
Chaincode genannt wird. Über diesen werden sämtliche Funktionalitäten der
Blockchain abgebildet. Somit existieren nur zwei Arten von Transaktionen - das
Deployen eines Smart Contracts und das Aufrufen einer Funktion im Smart Contract.

![Chaincode Aufruf](./images/peers.diagram.6.png "Chaincode Aufruf")

Abbildung 8.4.2.3 - Chaincode Aufruf (Quelle: <a>[[FABR18]](#ref_fabr18)</a>)

#### Sawtooth

##### Transaction Family

#### Iroha

https://github.com/hyperledger/iroha/issues/249

#### Indy

#### Burrow

### Tools

#### Composer

#### ...
weitere relevante Tools

## Ethereum

Autor: Philipp Möller

Testing, Verifikation, etc.

Tools (Truffle, etc.)


## Literaturverzeichnis
<a name="ref_example04">[EXAMPLE04]</a>: John, Doe: Dummy Titel. Main-Verlag, 2004, ISBN: XXXXX

<a name="ref_andr18">[ANDR18]</a>: Androulaki, Elli, et al. Hyperledger fabric: a distributed operating system for permissioned blockchains. arXiv preprint arXiv:1801.10228, 2018

<a name="ref_aubl13">[AUBL13]</a>: P. L. Aublin, et al.: RBFT: Redundant Byzantine Fault Tolerance. 2013 IEEE 33rd International Conference on Distributed Computing Systems, Philadelphia, 2013, URL: <a>[http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6681599&isnumber=6681559](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6681599&isnumber=6681559)</a>

<a name="ref_cach16">[CHAC16]</a>: Cachin, Christian: Architecture of the Hyperledger Blockchain Fabric. Workshop on Distributed Cryptocurrencies and Consensus Ledgers, 2016

<a name="ref_fabr18">[FABR18]</a>: Fabric Documentation. URL: <a>[http://hyperledger-fabric.readthedocs.io/en/release-1.1/peers/peers.html](http://hyperledger-fabric.readthedocs.io/en/release-1.1/peers/peers.html)</a>

[NAKA08] Nakamoto, S., Bitcoin: A peer-to-peer electronic cash system., 2008

<a name="ref_owen17">[OWEN17]</a>: Owens, Luke: Cryptoasset Framework on Intel's Hyperledger Sawtooth. URL: <a>[https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/](https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/)</a>