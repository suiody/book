# Blockchain Use Cases

## Entscheidungsmodell 

Autor: Niklas Röhling

* Do you need a Blockchain? :  https://eprint.iacr.org/2017/375.pdf


## Smart Contracts

Autor: Björn Böing

Der Begriff *"Smart Contract"* wurde erstmals 1996 von dem Computerwissenschaftler Nick Szabo verwendet, der ihn wie folgt definierte:

*"New institutions, and new ways to formalize the relationships that make up these institutions, are now made possible by the digital revolution. I call these new contracts "smart", because they are far more functional than their inanimate paper-based ancestors. No use of artificial intelligence is implied. A smart contract is a set of promises, specified in digital form, including protocols within which the parties perform on these promises."* [[SZAB96]](#ref_szab96)

Ein Smart Contract ist laut Szabo also die digitale Abbildung handelsüblicher Verträge, erweitert mit zusätzlichen Funktionalitäten für die Vertragsteilnehmer. So sollen beispielsweise kryptographische Protokolle und ähnliche Sicherheitsmaßnahmen bei der Überprüfung und Durchsetzung der Vertragsklauseln einen großen Vorteil bieten.

Das heutige Verständnis eines Smart Contract begrenzt sich nicht allein auf das allgemeine Konzept eines Vertrags, sondern kann jede Form von Software sein. Durch aktuelle Implementierungen basierend auf einer Blockchain, werden außerdem nachvollziehbare und endgültige Transaktionen realisiert, sodass beim Erfüllen oder Brechen des Vertragen (oder Erreichen spezieller Konditionen) vorher festgelegte Aktionen eigenständig und automatisch ausgeführt werden. Durch solche Automatismen und dazugehörige Sicherheitsmaßnahmen wird eine dritte, unabhängige Partei, zur Überwachung von Transaktionen, überflüssig. [[GOLL17]](#ref_goll17)

Bei Implementierungen mittels Blockchain werden zu Beginn alle Vertragsbedingungen und damit zusammenhängende Aktionen definiert, in Quellcode geschrieben und in die Blockchain gehangen. Der fertige Vertrag beziehungsweise das fertige Programm wird auf die Knoten des Netzwerks kopiert und beim Eintreffer der festgelegten Bedingungen verifiziert und ausgeführt. Anzumerken ist, dass alle Vertragsteilnehmer den Vertrag  und dessen Bedingungen digital signieren und sich dadurch an diesen binden.

<a name="ref_smart_contract_oracel"></a>![smart_contract_oracel](./images/smart_contract_oracel.png "Funktion eines Orakels") Quelle: Eigene Darstellung

Vom Prinzip her können Smart Contracts nur auf die Informationen zugreifen, die in der dazugehörigen Blockchain hinterlegt sind. Die Verbindung zur echten Welt wird mittels konventionellen Anwendungen hergestellt, die auf externen Server laufen. Diese Anwendungen werden im Blockchain-Umfeld als "Orakel" bezeichnet und nehmen Einfluss auf die Blockchain, sobald spezielle Events eintreten. Die [Abbildung 1](#ref_smart_contract_oracel) verbildlicht die Funktion eines Orakels am Beispiel von Sportwetten. Dabei überwacht das Orakel die Ergebnisse von Spielen und schreibt diese in die Blockchain. Durch diese Informationen kann der Smart Contract die vorher definierten Aktionen ausführen und die Wetteinsätze passend verteilen. Beim Entwerfen von Smart Contracts und dazugehörige Orakel sollte die Sicherheit im Vordergrund stehen, da spätere Änderungen weitesgehend unmöglich sind. Sollte ein Orakel also falsche Informationen erhalten oder Situationen im Vertrag nicht bedacht worden sein, so kann dies unter Umständen fatale Folgen haben. [[CHAI17]](#ref_chai17)


## Decentralized Autonomous Organization (DAO)

Autor: Björn Böing

Das Prinzip einer *"Decentralized Autonomous Organization"*, also einer dezentralen und autonomen Organisation, beschreibt eine Unternehmensform, in der Regeln und Abläufe mittels Smart Contracts abgebildet werden. Die Idee ist, dass ein Unternehmen einzig für das initiale Aufsetzen der Smart Contracts Hilfe von Außerhalb benötigt und danach vollkommen ohne hierarchische Strukturen auskommt und autark handeln kann. Zum Start einer DAO sind gewisse Regeln festgelegt, um das virtuelle Unternehmen zu festigen. Danach werden Entscheidungen zu Regeländerungen und Investitionen durch Abstimmungen getroffen und mithilfe einer Blockchain unveränderlich gespeichert. Dabei können häufig größere Investoren auch größeren Einfluss nehmen. Eine DAO kann gänzlich transparent sein und von jederman verifiziert werden, sollte sie eine öffentliche Blockchain verwendet. [[HERT18]](#ref_hert18)

Neben der Sicherstellung von demokratischen Wahlen und der Unabhängigkeit von einer dritten Partei, wie beispielsweise einer Bank, birgt das Prinzip der Smart Contracts allerdings auch Risiken. Sobald die Smart Contracts einer DAO einmal der Blockchain hinzugefügt sind und laufen, so lassen sich diese und die dazugehörigen Regeln nicht mehr einfach ändern. Das hat zwar den Vorteil, dass kein einzelner diese Regeln verändern kann, aber andersherum lassen sich auch keine Fehler einfach ausbessern. [[REIF18]](#ref_reif18)

In diesem Zusammenhang erhielt die DAO, die auf Basis der Ethereum-Blockchain am 30.04.2016 gegründet wurde, die meiste Aufmerksamkeit. Sie sollte als dezentrale Organisation die Finanzierung von Startup-Unternehmen übernehmen, indem die Teilhaber abstimmen konnten, in welche Projekte sie investieren wollen. Anteile an diese DAO konnten sich mit Ether gekauft werden, wobei größere Investoren auch größeren Einfluss auf die Abstimmungen nehmen konnten. In weniger als einem Monat wurden so viele Anteile verkauft, dass die DAO über 150 Millionen US-Dollar als Startkapital zur Verfügung hatte. Etwa zeitgleich wurden die ersten Berichte veröffentlicht, die Programmierfehler und generelle Schwachstellen der DAO aufdeckten und gleichzeitig die Investoren zur Vorsicht anhielten. Am 17. Juni 2016 wurde die DAO Opfer eines Angriffs, welcher mehrere dieser Schwachstellen ausnutze und somit ca. 50 Millionen US-Dollar auf einen einzelnen Account übertragen konnte. Genauer ermöglichten es Probleme bei rekursiven Aufrufen, dass von der DAO wiederholt Ether zurückverlangt werden konnte, bevor der dahinterliegende Smart Contract seinen internen Token-Zähler aktualisierte. Dieser Vorfall sorgte für rege Diskussion innerhalb der Ethereum-Community und führte schließlich zu einer Aufspaltung derselben. Die ursprünglichen Entwickler setzten die Blockchain auf einen Stand vor dem Angriff zurück, während andere, unter dem Namen *"Ethereum Classic"*, mit der zu dem Zeitpunkt aktuellen Blockchain weiter machten. [[NORT16]](#ref_nort16) [[POPP16]](#ref_popp16)

Am 25. Juli 2017 veröffentlichte die *"U.S. Security and Exchange Commission"* einen Beschluss, dass die Angebote und Verkäufe von virtuellen Unternehmen, wie die DAO, unter die "federal securities laws" fallen. Diese Gesetze sind das amerikanische Gegenstück zu den Bundeswertpapiergesetzen, die unter anderem sicherstellen, dass der Verkauf von Firmenanteilen staatlich überprüft und angemeldet ist. Diese Regelung der SEC sorgt dafür, dass die anfängliche Finanzierung der DAO (*"Initial Coin Offer (ICO)"*) angemeldet sein müssen, da sich sonst die Gründer und Investoren der DAO strafbar machen. [[SEC17]](#ref_sec17)

Das schnelle und unschöne Ende der Ethereum-DAO dient auch noch heute als Negativbeispiel für weitere Blockchain Entwicklungen und Ansätze. Zum einen wurde aufgezeigt, wie enorm wichtig die Sicherheit und Qualität von Softwareprogrammen ist, selbst wenn sie mit längst etablierten Verfahren, wie der Blockchain, arbeiten. Zum anderen hat die Regelung der SEC für neue Ideen gesorgt, um staatliche Regulierungen zu umgehen beziehungsweise überflüssig zu machen. Einer dieser Ideen ist als *"Simple Agreement for Future Tokens (SAFT)"* bekannt und ist verleichbar mit dem Kauf einer Geschenkkarte für ein Unternehmen, das noch nicht eröffnet hat. Dabei erhalten Investoren beim ICO das Versprechen, dass sie einen festen Anteil von Tokens erhalten, sobald das Unternehmen läuft und die Tokens von Wert sind. [[FALK17]](#ref_falk17) [[PETE17]](#ref_pete17)


## Legal technology

Autor: Björn Böing

Unter dem Begriff *"Legal technology"* (oder kurz *"Legal Tech"*), werden Technologien und Softwareprogramme zusammengefasst, die eingesetzt werden um juristische Dienstleistungen anzubieten. Meist sind es StartUp-Unternehmen, die durch ihre Produkte versuchen den traditionellen Markt für Juristik zu durchbrechen, indem sie beispielsweise den Weg zum Anwalt überflüssig machen oder einfache Möglichkeiten anbieten den passenden Anwalt zu finden. Darüber hinaus wollen viele dieser Unternehmen schlicht dem Otto Normalverbraucher helfen seine Rechtsansprüche geltend zu machen kann, ohne, dass dieser große Aufwände oder Kosten zu befürchten hat. [[RUBI14]](#ref_rubi14)

Die Bereiche in denen Legal Tech zum Einsatz kommt, sind breit gefächert und umfassen unter anderem:

- Dokumentenlagerung/-archivierung
- Abrechnungen
- Rechnungswesen
- Daten- und Vertragsanalysen
- Automatisiertes Aufsetzen von juristischen Dokumenten
- Vermittlung von Anwälten und deren Dienstleistungen
- Hilfestellungen zum eigenständigen Abwickeln von juristischen Angelegenheiten

Bereits 2014 berichteten große Nachrichtenagenturen wie Forbes darüber, dass der Legal Tech Markt boomt und eine große Anzahl an StartUps versuchen in Amerika und Europa Fuß zu fassen. Im Vergleich dazu sind viele, bereits bestehende, Kanzleien nach wie vor überfordert, welche Technologien für sie interessant sind und ihnen helfen können. Ein einfaches Beispiel ist der Einsatz von maschinellem Lernen und künstlicher Intelligenz (KI), um die enorme Menge an juristisch relevanten Dokumenten zu klassifizieren und wichtige Informationen auf einen Blick darzustellen. Damit geht der Begriff "*legal predictive analytics"* einher, mit dem das Analysieren von Dokumenten und das Vorraussagen von Ergebnissen gemeint ist. Hat eine Kanzlei beispielsweise schon mehrere Hundert Verfahren über Betrugsfälle abgewickelt, so könnten mit Hilfe von KI-Technologien Aussagen zu zukünftige Verfahren gemacht werden. [[KORM17]](#ref_korm17) [[STEM18]](#ref_stem18)

Das 2017 gegründete, deutsche Unternehmen *"Geld-Für-Flug GmbH"* beispielsweise bietet an, dass der Preis eines Flugtickets, für einen stornierten oder nicht angetretenden Flug, teilweise erstattet wird. Gerade bei Billig-Airlines, wie Ryanair, wird eine Rückerstattung schon beim Kauf ausgeschlossen, obwohl Teile des Preises per Gesetz zurückerstattet werden müssen. Der Preis eines Flugtickets setzt sich nach EU-Verordnung 1008/2008 aus drei Teilen zusammen [[EUP08]](#ref_eup08) :

- Netto-Flugpreis (Betrag für die eigentliche Beförderung)
- Steuern und Gebühren (Betrag pro Passagier, der an den Statt geht)
- personenbezogene Sonderkosten (z.B. Gepäck)

Die aktuelle Rechtssprechung [[BGH18]](#ref_bgh18) des Bundesgerichtshofs (BGH) besagt, dass eine Fluggesellschaft die letzten beiden Komponenten zurückzahlen muss und lediglich den Netto-Flugpreis einbehalten darf. Gerade bei Billig-Airlines setzt sich der Ticketpreis häufig zum Großteil aus Steuern und Kosten für Gepäck und Co. zusammen, sodass Kunden bis zu 75% des ursprünglichen Preises zurückerhalten können. Geld-Für-Flug wirbt damit, dass der Aufwand und das Kostenrisiko für einzelne Kläger meist so hoch ist, dass sich eine Klage kaum rentiert. Das Unternehmen reicht mit den abgekauften Flugtickets Sammelklagen ein, um die Kosten weiter zu minimieren und hat laut eigenen Angaben bei bisher über 10.000 Flugtickets eine 97%ige Erfolgsquote. Gewinn wird durch die Differenz des Betrages, der an die ursprünglichen Ticketbesitzer ausgezahlt wurde und des tatsächlich vor Gericht eingeklagten Betrages erzielt. [[FECK18]](#ref_feck18)

Die bereits erläuterten Smart Contracts spielen nur bedingt eine Rolle im Bereich Legal Tech. Diese können dazu genutzt werden, dass allerhand Überweisungen und sonstige digitale Transaktionen automatisiert und unabhängig von einer dritten Instanz ausgeführt werden. Die Aufgaben eines Anwalts gehen jedoch darüber weit hinaus und lassen sich durch Technologien unterstützen und vereinfachen, ziehen aber nur selten einen Vorteil aus der Verwendung von Blockchains. Beratende Tätigkeiten sollen laut [[LTB18a]](#ref_ltb18a) zwar teilweise bereits 2018 von Chatbots übernommen werden, aber werden vor allem in den anfänglichen Stadien bei komplexen Fragestellungen keinen Anwalt ersetzen können. Darüber hinaus müssen auch Fälle von fahrlässiger Täuschung, höherer Gewalt und Verletzung einer wesentlichen Vertragspflicht beachtet werden, die ohne Weiteres nicht mittels Smart Contract abgebildet werden können, betrachtet werden. [[KORM17]](#ref_korm17)

Zusammenfassend sind viele Bereiche des juristischen Marktes durch technologische Fortschritte zu unterstützen und teilweise sogar automatisierbar. Dies hat den Vorteil, dass einfacher und gezielter wertvolle Informationen zusammengetragen werden können und normale Bürger bei ihren Rechtsansprüchen Hilfe erhalten. Die große Menge an StartUp-Unternehmen, die versuchen auf dem weltweiten Markt Fuß zu fassen, unterstreicht die Relevanz von Legal Tech genauso, wie der Fakt, dass die Johann Wolfgang Goethe-Universität Frankfurt ein Schlüsselqualifikations-Modul zum Sommersemester 2018 aufgenommen hat, welches ausschließlich die Bereiche von Legal Tech beleuchtet. Technikmessen wie die "Berlin Legal Tech" fördern das Thema auch innerhalb von Deutschland. [[BLT18]](#ref_blt18) [[LTB18b]](#ref_ltb18b)


## Blockchain in Education

Ein Anwendungsfall für Blockchain Technologien abseits der weit verbreiteten Einsatzmöglichkeit zur Realisierung von dezentralisierten Währungen wie Bitcoin oder Ethereum findet sich im Bereich der Bildung. In diesem Zusammenhang können die Vorteile von Blockchains dazu genutzt werden um Probleme, die in sich im aktuellen Bildungssystem ergeben zu lösen. Zu diesen Schwierigkeiten zählen:
- Bildungseinrichtungen welteit verwenden unterschiedliche Standarts und Technologien, um die Fortschritte der Lernenden festzuhalten. Durch diese Unterschiede ist es schwierig, erbrachte Leistungen in ein anderes System zu übertragen und so anzuerkennen.
- Sollte ein Nachweis über eine erbrachte Leistung wie z.B. eine Urkunde zu einem Abschluss verloren gehen, ist es zeitaufwändig, diesen zu ersetzen, da die Bildungseinrichtung kontaktiert und ein neuer Nachweis ausgestellt werden muss.
- Durch die fehlende Transparenz des Bildungssystems kann es zu Betrug kommen, bei dem nicht erbrachte Leistungen oder nicht vorhandene Abschlüsse vorgetäuscht werden.

Durch den Einsatz von Blockchain Technologien kann diesen Problemen entgegengewirkt werden. Durch die Verwendung eines einheitlichen Standarts innerhalb einer Blockchain ist es möglich, erbrachte Leistungen weltweit übertragbar zu machen und so die administrativen und sprachlichen Hürden für den Austausch von Bildungseinrichtungen auf internationaler Ebene deutlich zu verringern. Im Bereich von Hochschulen würde es so z.B. Studierenden ermöglicht, während des Studiums einfach das Land zu wechseln, in dem Leistungen erbracht werden.
Durch die Transparenz und Unveränderbarkeit von Blockchains kann nachvollzogen werden, wann ein Teilnehmer eine Leistung erbracht hat. Hieraus ergeben sich im Hinblick auf Bildung die folgenden Vorteile:
- Es ist möglich, Betrugsfälle einfacher aufzudecken, da z.B. gefälschte Abschlüsse nicht in der Blockchain enthalten sind und durch die Dezentralisierung eine Wiederspruchsfreiheit der meisten Knoten garantiert werden kann.
- Wenn in der Blockchain zusätzlich die Interaktion zwischen Lehrenden und Lernenden festgehalten wird, hat dies für beide Parteien den Vorteil, dass die Zusammenarbeit nachvollzogen werden kann. Dies ermöglicht einerseits den Lernfortschritt zu überprüfen, aber auch zu ermitteln, ob durch den Lehrenden ausreichend Unterstützung gegeben worden ist.
- Durch die öffentliche Einsehbarkeit der Blockchain wird es Arbeitgebern ermöglicht, den Wissensstand eines potenziellen neuen Mitarbeiters besser zu bewerten und so geeignete Personen zu finden.

Durch diese öffentliche Zugänglichkeit ergeben sich jedoch auch Probleme, da ein solches Blockchain System bedeuten würde, dass sensible, personenbezogene Daten einsehbar wären. Daher sollte bei einer Anwendung von Blockchain Technologien im Bereich der Bildung darauf geachtet werden, dass die Privatsphäre der Nutzer nicht beeinträchtigt wird.
Im Folgenden werden Beispiele für die Anwendung von Blockchains im Bereich der Bildung vorgestellt.

### EduCTX

### Disciplina
Bei Disciplina handelt es sich um ein Konzept für den Einsatz von Blockchain Technologien zur Speicherung bildungsbezogener Daten von Personen.
Das Ziel des Konzeptes ist es, eine Möglichkeit zu finden, den Vorteil der öffentlichen Verifizierbarkeit von public Blockchains wie Etherium mit dem Vorteil keine privaten Daten preiszugeben von privaten Ketten wie Hyperledger zu vereinen.
Der Aufbau von Disciplina lässt sich anhand der folgenden Abbildung nachvollziehen:

<a name="disciplina_aufbau"></a>![disciplina_aufbau](./images/disciplina_aufbau.png "Disciplina Aufbau")

Um die privaten Daten der Nutzer zu schützen, kommen bei Disciplina zwei unterschiedliche Blockchains zum Einsatz:
- Die erste Kette, in der Abbildung mit "Educators" beschriftet, ist eine private Blockchain, die nur Lehrenden zugänglich ist. Hier werden von diesen Blöcke angelegt, die die genauen Daten zu erbrachten Leistungen beinhalten.
- Die zweite Blockchain ist öffentlich und enthält keinerlei personenbezogene Daten, sondern speichert lediglich Hashwerte, die anhand von Einträgen in der privaten Kette gebildet werden.

Durch diese Trennung ist es möglich, zu garantieren, dass die private Blockchain nicht manipuliert werden kann und gleichzeitig zu verhindern, dass private Daten öffentlich zugänglich sind.

Autor: Matthias Kersting


## Blockchain und KI

* https://arxiv.org/abs/1802.04451

Autor: Matthias Kersting


## Literaturverzeichnis

<a name="ref_bgh18">[BGH18]</a>: BGH ; 20.03.2018: Aktenzeichen X ZR 25/17 ; URL: <a>http://www.bundesgerichtshof.de/SharedDocs/Termine/DE/Termine/XZR25.html</a> (abgerufen am 08.05.2018)

<a name="ref_blt18">[BLT18]</a>: Berlin Legal Tech: Hackathon & Conference ; URL: <a>https://berlinlegal.tech/center/</a> (abgerufen am 08.05.2018)

<a name="ref_chai17">[CHAI17]</a>: Chainfrog: What are smart contracts? 2017 ; URL: <a>http://www.chainfrog.com/wp-content/uploads/2017/08/smart-contracts.pdf</a> (abgerufen am 03.05.2018)

<a name="ref_eup08">[EUP08]</a>: EU Parlament und Rat ; 24.09.2008: Verordnung Nr. 1008/2008 : URL: <a>http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2008:293:0003:0020:de:PDF</a> (abgerufen am 08.05.2018)

<a name="ref_falk17">[FALK17]</a>: Falkon, Samuel ; 24.12.2017: The Story of the DAO - Its History and Consequences ; URL: <a>https://medium.com/swlh/the-story-of-the-dao-its-history-and-consequences-71e6a8a551ee</a> (abgerufen am 05.05.2018)

<a name="ref_feck18">[FECK18]</a>: Fecke, Mike ; 30.04.2018: Wie "Geld-für-Flug.de" die Airline-Branche aufmischt – Interview mit Co-Founder & Head of Legal Benedikt Quarch. ; URL: <a>https://legal-tech-blog.de/wie-geld-fuer-flug-de-die-airline-branche-aufmischt-interview-mit-co-founder-head-of-legal-benedikt-quarch</a>

<a name="ref_goll17">[GOLL17]</a>: Ethereum Wiki: White Paper 2017 ; URL: <a>https://github.com/ethereum/wiki/wiki/White-Paper/f18902f4e7fb21dc92b37e8a0963eec4b3f4793a</a> (abgerufen am 03.05.2018)

<a name="ref_hert18">[HERT18]</a>: Hertig, Alyssa: What is a DAO? ; URL: <a>https://www.coindesk.com/information/what-is-a-dao-ethereum/vvvv</a> (abgerufen am 04.05.2018)

<a name="ref_korm17">[KORM17]</a>: Korman, Zachary ; 19.12.2017: Legal Tech: The Era of Bad Ideas ; URL: <a>https://www.law.ox.ac.uk/business-law-blog/blog/2017/12/legal-tech-era-bad-ideas</a> (abgerufen am 06.05.2018)

<a name="ref_ltb18a">[LTB18a]</a>: Legal Tech Blog ; 07.01.2018: 10 Legal Tech Trends for 2018 (Part 1) ; URL: <a>https://legal-tech-blog.de/10-legal-tech-trends-for-2018-part-1</a> (abgerufen am 08.05.2018)

<a name="ref_ltb18b">[LTB18b]</a>: Legal Tech Blog ; 04.05.2018: Goethe 2.0: Legaltech an der Johann Wolfgang Goethe-Universität Frankfurt ; URL: <a>https://legal-tech-blog.de/goethe-2-0-legaltech-an-der-johann-wolfgang-goethe-universitaet-frankfurt</a> (abgerufen am 08.05.2018)

<a name="ref_nort16">[NORT16]</a>: Norton, Steven ; 20.05.2016: Downfall of DAO Digital Currency Fund Shows Blockchain Reputational Risk ; URL: <a>https://blogs.wsj.com/cio/2016/06/20/downfall-of-dao-digital-currency-fund-shows-blockchain-reputational-risk/</a> (abgerufen am 04.05.2018)

<a name="ref_pete17">[PETE17]</a>: Peterson, Becky ; 19.11.2017: Venture capital has a new way of cashing in on blockchain bonanza — here’s what you need to know about SAFTs ; URL: <a>https://www.businessinsider.de/bitcoin-price-what-is-a-saft-blockchain-the-crypto-fundraising-craze-shaking-up-venture-capital-2017-11</a> (abgerufen am 05.05.2018)

<a name="ref_popp16">[POPP16]</a>: Popper, Nathaniel ; 17.06.2016: A Hacking of More Than $50 Million Dashes Hopes in the World of Virtual Currency ; URL: <a>https://www.nytimes.com/2016/06/18/business/dealbook/hacker-may-have-removed-more-than-50-million-from-experimental-cybercurrency-project.html</a> (abgerufen am 04.05.2018)

<a name="ref_reif18">[REIF18]</a>: Reiff, Nathan ; 25.01.2018: What Is the DAO? ; URL: <a>https://www.investopedia.com/tech/what-dao/</a> (abgerufen am 04.05.2018)

<a name="ref_rubi14">[RUBI14]</a>: Rubin, Basha ; 06.12.2014: Legal Tech StartUps Have A Short History And A Bright Future ; URL: <a>https://techcrunch.com/2014/12/06/legal-tech-startups-have-a-short-history-and-a-bright-future/</a> (abgerufen am 06.05.2018)

<a name="ref_sec17">[SEC17]</a>: U.S. SEC ; 25.07.2017: SEC Issues Investigative Report Concluding DAO Tokens, a Digital Asset, Were Securities ; URL: <a>https://www.sec.gov/news/press-release/2017-131</a> (abgerufen am 05.05.2018)

<a name="ref_stem18">[STEM18]</a>: Stemplewski, Jan ; 23.02.2018: Legal Tech Berlin: Kurzvorträge zu industriellen Rechtsdienstleistungen ; URL: <a>https://youtu.be/oMhCIQmsAQg</a> (abgerufen am 06.05.2018)

<a name="ref_szab96">[SZAB96]</a>: Smart Contracts: Building Blocks for Digital Markets 1996 ; URL: <a>http://www.fon.hum.uva.nl/rob/Courses/InformationInSpeech/CDROM/Literature/LOTwinterschool2006/szabo.best.vwh.net/smart_contracts_2.html</a> (abgerufen am 03.05.2018)