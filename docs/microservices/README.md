# Microservices

>Ein Microservice ist ein leichtgewichtiger autonomer Dienst, der eine einzige Aufgabe erfüllt und mit anderen ähnlichen Diensten über eine gut definierte Schnittstelle kollaboriert. [Nami2014]

Es ist eine Variante der serviceorientierten Architektur (SOA)
Hinzufügen oder Abschalten eines Dienstes sollte keine Auswirkungen auf die Arbeit andere Dienste haben.

Bild 1 zeigt einen möglichen Aufbau von Microservices. Jedem Dienst entspricht eine Funktionalität. Einige Dienste haben eigene Datenbanken, andere greifen auf eine gemeinsame Datenbank zu.

![Bild 1: Architektur](./images/architecture.png)

_Abbildung 1. Architektur_

Vorraussetzungen für Microservices sind:
1. Request/Response calls mit willkürlich strukturierten Daten
2. Asynchrone Events in Echtzeit
3. Bidirektionale Requests und Responses
4. Requests und Responses können willkürlich geschachtelt sein
5. Serialisierbarer Nachrichtenformat: wie JSON, XML

Wenn es um Microservices geht müssen die Remote Calls näher betrachtet werden.

### Kommunikation mit Microservice

Einige häufig anzutreffende Entwürfen von Remote Calls sind Direct Call, Gateway und Message Bus.

__Direct Call__

![Bild 2: Direct call](./images/direct_call_pattern.png)

_Abbildung 2. Direct Call_

__Gateway__

![Bild 3: Gateway](./images/gateway_pattern.png)

_Abbildung 3. Gateway_

__Message-bus__

![Bild 4: Message Bus](./images/message_bus_pattern.png)

_Abbildung 3. Message-bus_

Eine der Hauptaufgaben von Microservices ist eine Minimierung von Einflüssen im Falle einer möglichen Schnittstellenänderung.[Nami2014]

## Unterschiede zu monolitischen Anwendungen

Monolytische Anwendungen sind als ein Ganzes entwickelt. Sie bestehen oft aus drei Schichten:
- Clientseitige Applikation
- Serverseitige Applikation
- Datenbank

Die serverseitige Applikation ist ein solches Monolith, weil sie für HTTP-Anfragen zuständig ist, Zugriffe auf die Datenbank steuert und mit dem Browser interagiert. Eine Änderung im System führt zu einer neuen Version.[Lewi2014]

Jedes einzelnes Microservice kann in komplett anderer Programmiersprache geschrieben sein. Im Gegensatz dazu kann eine monolitische Architektur zwar mehrere Dienste oder Komponenten enthalten - sie bilden aber trotzdem ein Ganzes.[Nami2014]

### Vorteile

[Nami2014]
- übersichtlicher Code, weil je Dienst, deswegen einfacher neuer Entwickler reinzubringen
- Modifizierbarkeit, muss nicht die gesamte Architektur verändert werden
- Macht kontinuierliche Entwicklung einfacher

- Erhöhte Einsatzfähigkeit
- Unabhängigkeit in der Entwicklung pro Dienst
- Kürzere Entwicklungszeiten
- Resistenz
- Erleichterte Umsetzung innovativer Lösungen

### Nachteile

[Nami2014]
- Viele Remote Calls
- Bis zu einer bestimmten Größe, schwieriger zu entwickeln, da Partitionierung
- Schwerer aufzusetzen als eine monolytische Struktur (größter Nachteil)
- Mehrere Kopien gleichzeitig laufen zu lassen nicht möglich, Load Balancer
- Zusätzliche Komplexität, weil ein System in unterschiedliche Dienste partitioniert werden soll
- Größerer Speicherbedarf, weil jeder Dienst eigenen Platz beansprucht
- Testen ist komplizierter, da die Dienste verteilt sind


## Bounded Context

Bounded Context gehört zu Domain-driven Design (DDD)

## Humane Registries


## Continuous Delivery


## Microservices Varianten


### Developer Anarchy


### REST-Schnittstellen für Microservices


### Self-contained Systems


## Serverless

Function as a service


## Quellen

[Chen2018] Chen, Lianping: Microservices: Architecting for Continuous Delivery and DevOps, IEEE International Conference on Software Architecture, 2018

[Lewi2014] Lewis James; Fowler, Martin: Microservices, a definition of this new architectural term, 25.03.2014, https://martinfowler.com/articles/microservices.html (letzter Zugriff: 29.04.2018)

[Nami2014] Namiot, Dmitry; Sneps-Sneppe, Manfred: On Micro-services Architecture, International Journal of Open Information Technologies ISSN: 2307-8162 vol. 2, no. 9, 2014,
https://cyberleninka.ru/article/v/on-micro-services-architecture (letzter Zugriff: 26.04.2018)

[Newm2015] Newman, Sam: Building Microservices: Designing Fine-Grained Systems, O'Reilly Media, Inc., 02.02.2015

[Rich2017] Richardson, Chris: Pattern: Microservice Architecture, 2017, http://microservices.io/patterns/microservices.html (letzter Zugriff: 26.04.2018)