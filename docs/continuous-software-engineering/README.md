# Continuous Software Engineering

## Definition

"Continuous Software Engineering" beschreibt eine Möglichkeit der iterativen Softwareentwicklung und fokussiert sich auf den Prozess der Auslieferung an den Benutzer. Continuous Software Engineering unterstützt den agilen Softwareentwicklungsprozess.

## Agile Softwareentwicklung

Agile Softwareentwicklungsprozesse haben zum Ziel, den Prozess der Softwareentwicklung zu beschleunigen und die Zeit bis zum Einsatz beim Benutzer zu verkürzen.

### Frühe Phase mit Scrum

Scrum ist eine agile Softwareentwicklungmethode für kleinere Softwareentwicklungsteams. Scrum beschreibt den Softwareentwicklungsprozess, nicht aber den Prozess der Auslieferung an den Nutzer.

### DevOps

##### Definition

Anders als  z.b. Scrum beschreibt DevOps nicht den Prozess der Softwareentwicklung, sondern den Prozess der Auslieferung an den Nutzer.

##### Entwicklung/IT-Operations

Der Begriff DevOps setzt sich zusammen aus den Begriffen Development (Entwicklung) und Operations. Der Bereich Entwicklung ist für die Softwareentwicklung zuständig, der Bereich Operations für die notwendige IT-Infrastruktur (z.b. Bereitstellung notwendiger Tools). Wenn zusätzlich der Bereich Sicherheit involviert ist, spricht man auch von DevSecOps.

##### DevOps als agiler Prozess

##### Automatisierung

Ein Ziel von DevOps ist die größtmögliche Automatisierung des Auslieferungsprozesses durch den Einsatz geeigneter Tools.

##### Schneller Releases/Deployment Cycle

##### Feedback (Bugtracker)

Um Feedback möglichst schnell zum Entwickler zu bekommen, wird bei DevOps ein Bugtracker verwendet. Der Bugtracker dient dazu, Feedback von Testern zu sammeln, sodass der Entwickler die Möglichkeit hat, zeitnah auf Feedback einzugehen und eventuell gefundene Probleme zu beheben.

##### Microservices

##### Automatisiertes Testen

Soweit möglich, wird bei DevOps automatisiert, bspw. mithilfe von Unit-Tsts, getestet. Jedesmal wenn aus dem Quellccode ein neuer Build erstellt wird, werden automatisierten Tests ausgeführt und deren Ergebnisse an den Entwickler weitergeleitet.


## Workflows

	Continuous Delivery
		Continuous Integration
		schnellerer Release
		Deployment-Pipeline
		jede Version (auch intern) muss lauffähig sein
		automatisierte und manuelle Tests
	Continuous Improvment
		kontinuirliche Verbesserung
		Möglichkeiten zur Verbesserung werden identifiziert und umgesetzt
	Continuous Integration
		Continuous Delivery als Weiterentwicklung

	Definition und Abgrenzung

## Tools

### Docker

#### Definition

Docker ist ein Tool zur Containerisierung von Software. Dabei wird die Software mit allen ihren Abhängigkeiten (z.b. Bibliotheken) in ein Image gepackt. Dieses Image kann dann von einem standardisierten Container ausgeführt werden.

Die Docker-Laufzeitumgebung ist an Linux angelehnt. Es stehen dem Entwickler somit alle die Funktionen von Linux zur Verfügung. Docker selbst ist ebenfalls Linux-Software und damit standardmäßig nur unter Linux lauffähig. Soll Docker unter Windows oder Mac OS ausgeführt werden, muss ein Linux-System in einer virtuellen Maschine genutzt werden.

#### Begriffe

##### Image

Ein Image ist ein Abbild der Software mit ihren Abhängigkeiten.

##### Layer

Ein Layer ist ein Set von Änderungen innerhalb eines Image. Für jede Änderung wird im Image ein neues Layer angelegt.

##### Container

Ein Container ist die laufende Instanz eines Images. Container bieten eine standardisierte Laufzeitumgebung für Images.

	keine Virtualisierung
	Linux-basiert
	Tools
		Docker-Hub
	integrierte Versionsverwaltung
		Docker hat eine integrierte Versionsverwaltung. Änderungen an einem Image werden innerhalb des Image in Form von Layern gespeichert. Mithilfe der Layer lässt sich die komplette Versionshistorie eines Image nachvollziehen.
	Containerisierung vs Virtualisierung
	Anwendung gebündelt mit Abhängigkeiten
	Sicherheit


### JIRA

### Jenkine
