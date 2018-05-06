# Populäre Blockchain Plattformen

## Bitcoin

Autor: Nils Dralle

### Protokoll

Mining, UTXO etc.

## Hyperledger
Autor: Cem Basoglu

Das in 2016 gegründete Hyperledger Projekt fasst mehrere Frameworks und Tools
zusammen, die den Einsatz von Distributed Ledger Technologien in Business
Applikationen ermöglichen sollen <a>[[CHAC16]](#ref_cach16)</a>.
Neben den von IBM und Intel initial beigesteuerten Distributed Ledger Codebasen
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
durch eigene Implementierung ersetzt werden können. Die Kommunikation zwischen
den Komponenten erfolgt mittels gRPC.

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
Blockhain-Netzwerke noch weiter zu unterteilen. Jedes dieser Sub-Netzwerke
besitzt sowohl einen eigenen Kommunikationskanal, als auch einen eigenen
Distribted Ledger. Wie in Abbildung 8.4.2.2 dargestellt, können somit mehrere
private Netzwerke zwischen den Teilnehmern betrieben werden.

##### Peer

##### Ordering Service

##### Chaincode
Ein zentrales Element im Fabric Framework bildet der Smart Contract, der auch
Chaincode genannt wird. Über diesen werden sämtliche Funktionalitäten der
Blockchain abgebildet. Somit existieren nur zwei Arten von Transaktionen - das
Deployen eines Smart Contracts und das Aufrufen einer Funktion im Smart Contract.

![Chaincode Aufruf](./images/peers.diagram.6.png "Chaincode Aufruf")

Abbildung 8.4.2.3 - Chaincode Aufruf (Quelle: <a>[[FABR18]](#ref_fabr18)</a>)

##### Client

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

<a name="ref_owen17">[OWEN17]</a>: Owens, Luke: Cryptoasset Framework on Intel's Hyperledger Sawtooth. URL: <a>[https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/](https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/)</a>
