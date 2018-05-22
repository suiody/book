# Microservices

>Ein Microservice ist ein leichtgewichtiger autonomer Dienst, der eine einzige Aufgabe erfüllt und mit anderen ähnlichen Diensten über eine gut definierte Schnittstelle kollaboriert. <a>[[NAMI14]](#ref_Nami14)</a>

## Charakteristiken einer Microservice-Architektur

Es gibt keine formale Definition dieses Architekturstils. Allerdings gibt es gemeinsame Charakteristiken, welche von vielen Microservices geteilt werden. <a>[[LEWI14]](#ref_Lewi14)</a>

### Komponentisierung via Services

Normalerweise wird unter einem Komponenten der Teil einer Software verstanden, welches unabhängig von Anderen veränderbar ist. Microservices bezeichnen einzelne Services, aber auch Bibliotheken, als Komponenten. Eine Bibliothek ist eine eingebundene Komponente und wird durch Funktionsaufrufe aus dem Speicher aufgerufen. Ein Service hingegen wird durch Remote Calls bzw. Web Requests aufgerufen.
Der Vorteil eines Service gegenüber einer Bibliothek liegt in der Unabhängigkeit des Ersten. Ein einziger Prozess kann aus mehreren Bibliotheken bestehen und wäre eine davon verändert, müsste die gesamte Applikation neu aufgesetzt werden. Eine Aufteilung in Services wirkt dem entgegen, weil meistens nur der jeweilige Service geändert werden muss. Desweiteren bringt eine solche Aufsplittung sauber definierte Komponentenschnittstellen mit sich. Das bedeutet, dass einzelne Softwarekomponenten besser voneinander getrennt sind. <a>[[LEWI14]](#ref_Lewi14)</a>

### Aufbau um Business Capabilities

### Service als Product

### Smart endpoints and dumb pipes

### Dezentralisierung

### Dezentralisiertes Datenmanagement

### Infrastructure Automation

### Design for failure

### Evolutionäres Design


Es ist eine Variante der serviceorientierten Architektur (SOA)
Hinzufügen oder Abschalten eines Dienstes sollte keine Auswirkungen auf die Arbeit andere Dienste haben.

Abbildung _Architektur_ zeigt einen möglichen Aufbau von Microservices. Jedem Dienst entspricht eine Funktionalität. Einige Dienste haben eigene Datenbanken, andere greifen auf eine gemeinsame Datenbank zu.

![Architektur](./images/architecture.png)

_Microservice Aufbau, Abbildung aus <a>[[MIRI17]](#ref_Miri17)</a>

Vorraussetzungen für Microservices sind:
1. Request/Response calls mit willkürlich strukturierten Daten
2. Asynchrone Events in Echtzeit
3. Bidirektionale Requests und Responses
4. Requests und Responses können willkürlich geschachtelt sein
5. Nachrichtenformat: wie JSON, XML

Wenn es um Microservices geht müssen die Remote Calls näher betrachtet werden.

### Kommunikation mit Microservice

Einige häufig anzutreffende Entwürfen von Remote Calls sind Direct Call, Gateway und Message Bus.

__Direct Call__

<img src="./images/direct_call_pattern.png" alt="Direct Call" style="width: 400px;"/>

_Direct Call_, Abbildung angepasst aus <a>[[NAMI14]](#ref_Nami14)</a>

__Gateway__

<img src="./images/gateway_pattern.png" alt="Gateway" style="width: 400px;"/>

_Gateway_, Abbildung angepasst aus <a>[[NAMI14]](#ref_Nami14)</a>

__Message-bus__

<img src="./images/message_bus_pattern.png" alt="Message Bus" style="width: 400px;"/>

_Message Bus_, Abbildung angepasst aus <a>[[NAMI14]](#ref_Nami14)</a>

Eine der Hauptaufgaben von Microservices ist eine Minimierung von Einflüssen im Falle einer möglichen Schnittstellenänderung. <a>[[NAMI14]](#ref_Nami14)</a>

## Unterschiede zu monolithischen Anwendungen

Monolithischen Anwendungen werden als ein Ganzes entwickelt. Sie bestehen oft aus drei Schichten:
- Clientseitige Applikation
- Serverseitige Applikation
- Datenbank

Eine serverseitige Applikation ist ein solches Monolith, weil sie für HTTP-Anfragen zuständig ist, Zugriffe auf die Datenbank steuert und mit dem Browser interagiert. Eine Änderung im System führt zu einer neuen Version der ganzen Software. Die ganze Logik konzentriert sich in einer ausführbaren Datei. Es ist ein natürlich Weg zu entwickeln. Optimierung kan mithilfe eines Load Balancer erfolgen, damit mehrere Instanzen der Applikation nebenbei laufen können.
Allerdings kann schwierig werden eine solche Anwendung auf Dauer zu entwickeln. Es erfordert viel Aufwand ständige Änderungen und Korrekturen zu implementieren, denn bei einem Monolith muss jedes Mal das ganze System neu erstellt werden. Desweiteren ist es aufwändig die Modularität der Software aufrecht zu erhalten, ohne das intern ungewollte Abhängigkeiten zwischen den Modulen entstehen. Auch eine Skalierung des ganzen Systems erfordert viel mehr Ressourcen, als eines einzelnen Moduls. <a>[[LEWI14]](#ref_Lewi14)</a>

Eine schematischer Aufteilung einer monolithischen Anwendung in Microservices kann in der nächsten Abbildung betrachtet werden.

![Microservices vs Monolith](./images/microservices_vs_monolith.png)

_Microservices vs Monolith_, Eigene Darstellung

Jedes einzelnes Microservice kann in komplett anderer Programmiersprache geschrieben sein. Im Gegensatz dazu kann eine monolithische Architektur zwar mehrere Dienste oder Komponenten enthalten - sie bilden aber trotzdem ein Ganzes.<a>[[NAMI14]](#ref_Nami14)</a>

### Vorteile

<a>[[NAMI14]](#ref_Nami14)</a>
- übersichtlicher Code, weil je Dienst, deswegen einfacher neuer Entwickler reinzubringen
- Modifizierbarkeit, muss nicht die gesamte Architektur verändert werden
- Macht kontinuierliche Entwicklung einfacher

- Erhöhte Einsatzfähigkeit
- Unabhängigkeit in der Entwicklung pro Dienst
- Kürzere Entwicklungszeiten
- Resistenz
- Erleichterte Umsetzung innovativer Lösungen

### Nachteile

<a>[[NAMI14]](#ref_Nami14)</a>
- Viele Remote Calls
- Bis zu einer bestimmten Größe, schwieriger zu entwickeln, da Partitionierung
- Schwerer aufzusetzen als eine monolithische Struktur (größter Nachteil)
- Mehrere Kopien gleichzeitig laufen zu lassen nicht möglich, Load Balancer
- Zusätzliche Komplexität, weil ein System in unterschiedliche Dienste partitioniert werden soll
- Größerer Speicherbedarf, weil jeder Dienst eigenen Platz beansprucht
- Testen ist komplizierter, da die Dienste verteilt sind

- Remote Calls verbrauchen mehr Ressourcen als In-Prozess Calls
- Prozessgrenzen machen Verteilung der Kompetenzen schwieriger

http://microservices.io/patterns/microservices.html


## Bounded Context

Bounded Context gehört zu Domain-driven Design (DDD)

## Humane Registries


## Continuous Delivery


## Microservices Varianten


### Developer Anarchy


### REST-Schnittstellen für Microservices


### Self-contained Systems


## Serverless

__Function as a service__

Eine Architektur, welche auf Drittanbieter angewiesen ist.

https://martinfowler.com/articles/serverless.html
https://thepowerofserverless.info/


## Quellen

<a name="ref_Chen18">[CHEN18]</a>: Chen, Lianping: Microservices: Architecting for Continuous Delivery and DevOps, IEEE International Conference on Software Architecture, 2018

<a name="ref_Miri17">[MIRI17]</a>: Miri, Ima: Microservices vs. SOA, 04.01.2017, URL: https://dzone.com/articles/microservices-vs-soa-2

<a name="ref_Lewi14">[LEWI14]</a>: Lewis James; Fowler, Martin: Microservices, a definition of this new architectural term, 25.03.2014, https://martinfowler.com/articles/microservices.html (letzter Zugriff: 29.04.2018)

<a name="ref_Nami14">[NAMI14]</a>: Namiot, Dmitry; Sneps-Sneppe, Manfred: On Micro-services Architecture, International Journal of Open Information Technologies ISSN: 2307-8162 vol. 2, no. 9, 2014,
https://cyberleninka.ru/article/v/on-micro-services-architecture (letzter Zugriff: 26.04.2018)

<a name="ref_Newm15">[NEWM15]</a>: Newman, Sam: Building Microservices: Designing Fine-Grained Systems, O'Reilly Media, Inc., 02.02.2015

<a name="ref_Rich17">[RICH17]</a>: Richardson, Chris: Pattern: Microservice Architecture, 2017, http://microservices.io/patterns/microservices.html (letzter Zugriff: 26.04.2018)