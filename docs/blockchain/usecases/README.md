# Blockchain Use Cases

## Entscheidungsmodell 

Autor: Niklas Röhling

* Do you need a Blockchain? :  https://eprint.iacr.org/2017/375.pdf


## Smart Contracts

Der Begriff *"Smart Contract"* wurde erstmals 1996 von dem Computerwissenschaftler Nick Szabo verwendet, der ihn wie folgt definierte:

*"New institutions, and new ways to formalize the relationships that make up these institutions, are now made possible by the digital revolution. I call these new contracts "smart", because they are far more functional than their inanimate paper-based ancestors. No use of artificial intelligence is implied. A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises."* [[SZAB96]](#ref_szab96)

Ein Smart Contract ist laut Szabo also die digitale Abbildung handelsüblicher Verträge, erweitert mit zusätzlichen Funktionalitäten für die Vertragsteilnehmer. So sollen beispielsweise kryptographische Protokolle und ähnliche Sicherheitsmaßnahmen bei der Überprüfung und Durchsetzung der Vertragsklauseln einen großen Vorteil bieten.

Das heutige Verständis eines Smart Contract begrenzt sich nicht auf das allgemeine Konzept eines Vertrags, sondern kann jede Form von Software sein. Durch aktuelle Implementierungen basierend auf einer Blockchain, werde außerdem nachvollziehbare und endgültige Transaktionen realisiert, sodass beim Erfüllen oder Brechen des Vertragen (oder Erreichen spezieller Konditionen) vorher festgelegte Aktionen eigenständig und automatisch ausgeführt werden. Durch solche Automatismen und dazugehörige Sicherheitsmaßnahmen wird eine dritte, unabhängige Partei, zur Überwachung von Transaktionen, überflüssig. [[GOLL17]](#ref_goll17)

Bei Implementierungen mittels Blockchain werden zu Beginn alle Vertragsbedingungen und damit zusammenhängende Aktionen definiert, in Quellcode geschrieben und in die Blockchain gehangen. Der fertige Vertrag beziehungsweise das fertige Programm wird auf die Knoten des Netzwerks kopiert und beim Eintreffer der festgelegten Bedingungen verifiziert und ausgeführt. Anzumerken ist, dass alle Vertragsteilnehmer den Vertrag  und dessen Bedingungen digital signieren und sich dadurch an diesen binden.

<a name="ref_smart_contract_oracel"></a>![smart_contract_oracel](./images/smart_contract_oracel.png "Funktion eines Orakels") Quelle: Eigene Darstellung

Vom Prinzip her können Smart Contracts nur auf die Informationen zugreifen, die in der dazugehörigen Blockchain hinterlegt sind. Die Verbindung zur echten Welt wird mittels konventionellen Anwendungen hergestellt, die auf externen Server laufen. Diese Anwendungen werden im Blockchain-Umfeld als "Orakel" bezeichnet und nehmen Einfluss auf die Blockchain, sobald spezielle Events eintreten. Die [Abbildung 1](#ref_smart_contract_oracel) verbildlicht die Funktion eines Orakels am Beispiel von Sportwetten. Dabei überwacht das Orakel die Ergebnisse von Spielen und schreibt diese in die Blockchain. Durch diese Informationen kann der Smart Contract die vorher definierten Aktionen ausführen und die Wetteinsätze passend verteilen. Beim Entwerfen von Smart Contracts und dazugehörige Orakel sollte die Sicherheit im Vordergrund stehen, da spätere Änderungen unmöglich sind. Sollte ein Orakel also falsche Informationen erhalten oder Situationen im Vertrag nicht bedacht worden sein, so kann dies unter Umständen fatale Folgen haben. [[CHAI17]](#ref_chai17)


Autor: Björn Böing

## Decentralized Autonomous Organization (DAO)

Das Prinzip einer *"Decentralized Autonomous Organization"*, also einer dezentralen und autonomen Organisation, beschreibt eine Unternehmensform, in der Regeln und Abläufe mittels Smart Contracts abgebildet werden. Die Idee ist, dass ein Unternehmen einzig für das initiale Aufsetzen der Smart Contracts Hilfe von Außerhalb braucht und danach vollkommen ohne hierarchische Strukturen auskommt. Zum Start einer DAO sind gewisse Regeln festgelegt, um das virtuelle Unternehmen zu festigen. Danach werden  Entscheidungen zu Regeländerungen und Investitionen durch Abstimmungen getroffen und mithilfe einer Blockchain unveränderlich gespeichert. Dabei können in der Regel größere Investoren auch größeren Einfluss nehmen. Eine DAO kann gänzlich transparent sein und von jederman verifiziert werden, sollte sie eine öffentliche Blockchain verwendet. [[HERT18]](#ref_hert18)

Neben der Sicherstellung von demokratischen Wahlen und der Unabhängigkeit von einer dritten Partei wie beispielsweise einer Bank, birgt das Prinzip der Smart Contracts allerdings auch Risiken. Sobald die Smart Contracts einer DAO einmal der Blockchain hinzugefügt sind und laufen, so lassen sich diese und die dazugehörigen Regeln nicht mehr einfach ändern. Das hat zwar den Vorteil, dass kein einzelner diese Regeln verändern kann, aber andersherum lassen sich auch keine Fehler einfach ausbessern. [[REIF18]](#ref_reif18)

In diesem Zusammenhang erlang die DAO, die auf Basis der Ethereum-Blockchain am 30.04.2016 gegründet wurde, die meiste Aufmerksamkeit, da menschliche Fehler zu einem Verlust von ca. 50 Millionen US-Dollar in Ether-Token führten. Diese DAO sollte als dezentrale Organisation die Finanzierung von Startup-Unternehmen übernehmen, indem die Teilhaber für die Investitionen abstimmen konnten. Anteile an diese DAO konnten sich mit Ether gekauft werden, wobei größere Investoren auch größeren Einfluss auf die Abstimmungen nehmen konnten. In weniger als einem Monat wurden soviele Anteile verkauft, dass die DAO über 150 Millionen US-Dollar zur Verfügung hatte. Etwa zeitgleich wurden die ersten Berichte veröffentlicht, die Programmierfehler und generelle Schwachstellen aufdeckten und gleichzeitig die Investoren zur Vorsicht anhielten. Am 17. Juni 2016 wurde die DAO Opfer eines Angriffs, welcher mehrere Schwachstellen ausnutze und somit ca. $50Mil. auf einen einzelnen Account übertragen konnte. So konnte durch Probleme bei rekursiven Aufrufen die Krypto-Konten von DAO Teilhabern leergeräumt werden. Dieser Vorfall sorgte für rege Diskussion innerhalb der Ethereum-Community und führte schließlich zu einer Aufspaltung derselben. Die ursprünglichen Entwickler setzten die Blockchain auf einen Stand vor dem Angriff zurück, während ein weiterer Teil unter dem Namen Ethereum Classic, mit der zu dem Zeitpunkt aktuellen Blockchain weiter machten. [[NORT16]](#ref_nort16) [[POPP16]](#ref_popp16)


- Die SEC ist zu dem Schluss gekommen, dass der Verkauf von Tokens als Sicherheit einer DAO unter das amerikanische Gesetz fällt https://www.sec.gov/news/press-release/2017-131
- Diskussionen zu Fehlern und generellen Ansätzen der DAO


Autor: Björn Böing

## Legal tech 

Autor: Björn Böing

## Blockchain in Education

Autor: Matthias Kersting

## Blockchain und KI

* https://arxiv.org/abs/1802.04451

Autor: Matthias Kersting


## Literaturverzeichnis

<a name="ref_chai17">[CHAI17]</a>: Chainfrog: What are smart contracts? 2017 ; URL: <a>http://www.chainfrog.com/wp-content/uploads/2017/08/smart-contracts.pdf</a> (abgerufen am 03.05.2018)

<a name="ref_goll17">[GOLL17]</a>: Ethereum Wiki: White Paper 2017 ; URL: <a>https://github.com/ethereum/wiki/wiki/White-Paper/f18902f4e7fb21dc92b37e8a0963eec4b3f4793a</a> (abgerufen am 03.05.2018)

<a name="ref_hert18">[HERT18]</a>: Hertig, Alyssa: What is a DAO? ; URL: <a>https://www.coindesk.com/information/what-is-a-dao-ethereum/vvvv</a> (abgerufen am 04.05.2018)

<a name="ref_nort16">[NORT16]</a>: Norton, Steven ; 20.05.2016: Downfall of DAO Digital Currency Fund Shows Blockchain Reputational Risk ; URL: <a>https://blogs.wsj.com/cio/2016/06/20/downfall-of-dao-digital-currency-fund-shows-blockchain-reputational-risk/</a> (abgerufen am 04.05.2018)

<a name="ref_popp16">[POPP16]</a>: Popper, Nathaniel ; 17.06.2016: A Hacking of More Than $50 Million Dashes Hopes in the World of Virtual Currency ; URL: <a>https://www.nytimes.com/2016/06/18/business/dealbook/hacker-may-have-removed-more-than-50-million-from-experimental-cybercurrency-project.html</a> (abgerufen am 04.05.2018)

<a name="ref_reif18">[REIF18]</a>: Reiff, Nathan; 25.01.2018: What Is the DAO? ; URL: <a>https://www.investopedia.com/tech/what-dao/</a> (abgerufen am 04.05.2018)

<a name="ref_szab96">[SZAB96]</a>: Smart Contracts: Building Blocks for Digital Markets 1996 ; URL: <a>http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html</a> (abgerufen am 03.05.2018)