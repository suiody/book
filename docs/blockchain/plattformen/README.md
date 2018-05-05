# Populäre Blockchain Plattformen

## Bitcoin

Autor: Nils Dralle

### Protokoll

Mining, UTXO etc.

## Hyperledger
Autor: Cem Basoglu

Das in 2016 gegründete Hyperledger Projekt fasst mehrere Frameworks und Tools
zusammen, die den Einsatz von Distributed Ledger Technologien in Business
Applikationen ermöglichen sollen <a>[[CHACHIN16]](#ref_cachin16)</a>.
Neben den von IBM und Intel initial beigesteuerten Distributed Ledger Codebasen
Fabric und Sawtooth, gehören mittlerweile drei weitere Frameworks und eine Vielzahl
von Tools zum Hyperledger Projekt.

Im Gegensatz zu anderen populären Blockchain Plattformen, bei dem eine
Kryptowährung im Vordergrund steht, setzen die Frameworks in Hyperledger auf
einen möglichst modularen Distributed Ledger und überlassen die Implementierung
einer Währung und Zahlungsabwicklung, der auf dem Framework aufbauend
Applikation <a>[[OWENS17]](#ref_owens17)</a>.

### Frameworks
Jedes Framework im Hyperledger Projekt stellt ein eigene Blockchain Plattform
dar, die sich sowohl konzeptionell als auch von der Codebasis unterscheiden.
Bevor die einzelnen Frameworks in den folgenden Abschnitten im Detail beschrieben
werden, bietet nachstehende Übersicht einen Vergleich der jeweiligen Distributed
Ledger Technologien.

Merkmal | Fabric | Sawtooth | Iroha | Indy | Burrow
--- | --- | --- | --- | --- | ---
Projekt Status | Aktiv | Aktiv | Aktiv | Inkubation | Inkubation
Berechtigung | permissioned | permissioned / permissionless | permissioned | permissioned | permissioned
Konsensus | SOLO, Kafka, SBFT* | PoET, RAFT | YAC (BFT) | RBFT <a>[[AUBLIN13]](#ref_aublin13)</a> | Tendermint
Smart Contract / Business Model | ja | ja* | nein | nein | ja
SDK | Go, Node.JS | Python, Go, Javascript | gRPC API | - | Solidity

\*siehe entsprechenden Abschnitt

#### Fabric

<!--- zwei arten transaktionen (init, call) --->

##### Chaincode

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

<a name="ref_cachin16">[CHACHIN16]</a>: Cachin, Christian: Architecture of the Hyperledger Blockchain Fabric. Workshop on Distributed Cryptocurrencies and Consensus Ledgers, 2016

<a name="ref_owens17">[OWENS17]</a>: Owens, Luke: Cryptoasset Framework on Intel's Hyperledger Sawtooth. URL: <a>[https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/](https://fullmetalhealth.com/cryptoasset-framework-intels-hyperledger-sawtooth-part-one/)</a>

<a name="ref_aublin13">[AUBLIN13]</a>: P. L. Aublin u. a.: RBFT: Redundant Byzantine Fault Tolerance. 2013 IEEE 33rd International Conference on Distributed Computing Systems, Philadelphia, 2013, URL: <a>[http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6681599&isnumber=6681559](http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6681599&isnumber=6681559)</a>
