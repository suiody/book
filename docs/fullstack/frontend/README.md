# Frontend
## FRP
## React.js
Stand: Version 16.3.2
### Einführung
#### SPA / Progressive Web App

#### JSX
JSX erweitert die Programmiersprache JavaScript, indem es eine XML/HTML-artige Struktur zur Programmierung der GUI-Elemente innerhalb des JavaScript Codes erlaubt. Damit aus einem JSX-Code standardmäßiges JavaScript wird, muss der Code übersetzt werden. Dieser Vorgang wird i.d.R. mithilfe des JavaScript-Compilers "Babel" durchgeführt. Streng genommen ist JSX kein zwingendes Muss bei der Verwendung von React als Framework, jedoch ist zu vermuten, dass die meisten Programmierer die JSX-Version dem compilierte JavaScript Äquivalent aufgrund der Übersichtlichkeit bevorzugen würden. Außerdem können so hilfreichere Tool-Unterstützungen (Warnungen, Fehler etc.) angezeigt werden [[FACE18a]](#ref_face18a).

Als Beispiel soll folgender JSX-Code dienen:

```jsx
function render() {
    return (
      	<div>
          <h1>Master Informatik</h1>
          <h2>Campus Minden</h2>
          <h3>Modulname:</h3>
          <input type="text" autofocus name="moduleName"/>
    	</div>
    );
};
```
Dieser Code wird von Babel folgendermaßen übersetzt:

```javascript
function render() {
    return React.createElement("div", null,
             React.createElement("h1", null, "Master Informatik"),
             React.createElement("h2", null, "Campus Minden"),
             React.createElement("h3", null, "Modulname:"),
             React.createElement("input", {
                 type: "text", 
                 autofocus: true, 
                 name: "moduleName"
             })
    );
};
```

*Das Beispiel lässt sich [hier](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=GYVwdgxgLglg9mABAJwKZgCauQCgJSIDeAUAJBpQjJI7GL0OkA8GMAbgHx0M_1MAWARg4BZAIYBnKNkQBJMMDjIAtmNgBrJgHohXXrwEAmDgGExygA4gJiETEzpt_Y9319-AZlFwMIADZg5qgAXE5erm5M9lZQiFAAnhaoALwARNIAHlCpiGIgUHCKENaIgcopqco-_qgAckE5WnqM2qycEXgA3MQAvt3EQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=) online ansehen und bearbeiten.*

Da es sich bei den JSX-Elementen um JavaScript-Objekte handelt, können die Elemente auch beispielsweise Variablen zugewiesen werden:

```jsx
const header = <h1>Das ist eine Überschrift</h1>;  
```

Des Weiteren lässt sich auch weiterer JavaScript Code direkt als sogenannte "Expressions" einfügen, indem dieser in geschweifte Klammern gesetzt wird:

```jsx
const items = ["book", "pen"];
const itemCounter = <div>Anzahl an Items: {items.length}</div>;

===============================================================
Render-Ausgabe:
    Anzahl an Items: 2
===============================================================
```

**render()**

Die Methode *render* ist - wie ihr Name bereits vermuten lässt - die Rendermethode eines React-Elements. Sie wird aufgerufen, wenn die Komponente im Browser dargestellt werden soll (siehe Lifecycle Kapitel). Als Rückgabewert erhält sie genau **ein** React Element. 
Ist es erforderlich, dass mehrere Elemente zurückgegeben werden, müssen diese in einem Container (z.B. *div*) gebündelt werden. 

```jsx
render() {
  return (
    <div>
      <ChildA />
      <ChildB />
      <ChildC />
    </div>
  );
}
```

Hieraus resultiert ein weiteres Element im DOM (ein div Element). 
Diesen Umstand kann man durch Verwendung von React *Fragments* umgehen. Sie gruppieren die Elemente, ohne selber im DOM eingefügt zu werden [[FACE18d]](#ref_face18d).

```jsx
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}

// oder die neue Schreibweise mit <> und </>
// (wird noch nicht von allen Tools unterstützt)
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

#### Komponenten
##### Props, State, Children

Properties = Props... erwähnen

##### Events

*Innerhalb dieses Abschnittes wird eine beispielhafte Komponente betrachtet, die aus einem Button besteht, der bei Aktivierung (Betätigung der Schaltfläche) eine Funktion mit dem Namen "start" aufruft.*

Die Verwendung von UI-Komponenten erfordert oftmals eine ereignisbasierte Interaktion mit den einzelnen Elementen. Bei React Elementen werden die Events ähnlich wie bei herkömmlichen DOM Elementen gehandhabt.


HTML:
```html
<button onclick="start()">
  Start
</button>
```
JSX:
```jsx
<button onClick={start}>
  Start
</button>
```

In diesem Beispiel sind prinzipiell zwei Unterschiede zu erkennen:

1. die Eventnamen entsprechen den herkömmlichen Bezeichnungen in *camelCase* Schreibweise
2. die verbundenen Event-Handler werden als Expression (siehe JSX Kapitel) eingebunden

Meistens werden die Event-Handler innerhalb einer Klassenkomponente in Form von Klassenmethoden realisiert. In diesem Fall muss sichergestellt werden, dass die Klassenmethode an die Klasse gebunden ("bound") wird und somit in deren Kontext enthalten ist. Da dies in JavaScript standardmäßig nicht der Fall ist, bedarf es einer manuellen Bindung.

React bietet hierfür verschiedene Möglichkeiten [[FACE18c]](#ref_face18c).

**Bindung im Konstruktor**
```jsx
class StartButton extends React.Component {
  constructor(props) {
    super(props);

    // Hier wird die Methode gebunden
    this.start = this.start.bind(this);
  }
  
  start() = {
    this.doStuff(); // "this" kann hier verwendet werden
  }

  // ...

  render() {
    return (
      <button onClick={this.start}>
        Start
      </button>
    );
  }
}
```

**Public class field Syntax (*experimentelles Feature*)**
```jsx
class StartButton extends React.Component {
  // !!! Experimentelles Feature !!!
  // Babel konvertiert diese Funktion zu einer öffentlichen Klassenmethode
  // je nach Projekteinstellung ist diese Funktion ggf. standardmäßig nicht aktiviert 
  start = () => {
    this.doStuff(); // "this" kann hier verwendet werden
  }

  // ...

  render() {
    return (
      <button onClick={this.start}>
        Start
      </button>
    );
  }
}
```

**Arrow Function (*nicht empfohlen*)**

Arrow Functions verfügen in JavaScript nicht über ein eigenes *this* und umgehen somit die angesprochene Problematik [[MOZI18]](#ref_mozi18). Diese Art der Programmierung wird jedoch nicht empfohlen, da jeder Rendervorgang der Komponente eine neue Funktion erzeugt. Wird dieser Callback als Property an andere Komponenten weitergegeben, werden diese eventuell ebenfalls neu gerendert , wodurch die Performance leidet.

```jsx
class StartButton extends React.Component {

  start() = {
    this.doStuff(); // "this" kann hier verwendet werden
  }

  // ...

  render() {
    return (
      <button onClick={() => this.start()}>
        Start
      </button>
    );
  }
}
```

Callback-Methoden können ebenfalls Parameter mitgegeben werden [[FACE18c]](#ref_face18c):

```jsx
const someValue = 1;
// ...
<button onClick={(e) => this.start(someValue, e)}>Start</button>
<button onClick={this.start.bind(this, someValue)}>Start</button>
```

In beiden Fällen wird das React Event *e* als zweiter Parameter an die Methode *start* übergeben. Werden bei der *bind*-Methode mehrere Parameter übergeben, wird der Eventparameter entsprechend nach hinten verschoben. Hier geschieht die Parameterübergabe implizit und muss somit nicht angegeben werden. 

##### Styles & className
##### Lifecycle

Der Lebenszyklus einer React Klassenkomponente besteht aus verschiedenen Schritten und Phasen, siehe nachfolgende Abbildung. Es existieren noch weitere Lifecycle-Methoden. Da diese jedoch als veraltet gelten und mit der Version 17 entfernt werden, werden diese im Folgenden außer Acht gelassen. Als Informationsquelle für diesen Abschnitt wird, sofern nicht anders angegeben, [[FACE18b]](#ref_face18b) verwendet.

<a name="ref_lifecycles"></a>![ref_lifecycles](./images/LifeCycleMethods.png "React Lifecycle Methoden")

Abbildung bearbeitet; entnommen aus <a>[[MAJ18]](#ref_maj18)</a> (dort als interaktive Abbildung vorhanden)

**Mounting**

Noch bevor die Komponente zum DOM hinzugefügt wird (man spricht hierbei vom "mounting"), wird ihr Konstruktor (**constructor(props)**) aufgerufen (in der Abbildung etwas missverständlich dargestellt). Hierbei sollte darauf geachtet werden, dass als erstes der Konstruktor der Basisklasse aufgerufen wird (*super(props)*), da andernfalls das Klassenattribut *this.props* noch nicht definiert ist und es somit zu Bugs kommen kann. Der Konstruktor sollte z.B. dafür genutzt werden den Status des Objekts zu initialisieren (mit this.state).

Nachdem das Objekt initialisiert wurde, wird die Methode **getDerivedStateFromProps(nextProps, prevState)** aufgerufen. Als Rückgabewert wird ein Objekt erwartet, das den Status auf Basis der angepassten Properties enthält oder *null*, um zu signalisieren, dass sich der Status auf Basis der Props nicht geändert hat. Um zu prüfen welche Props sich geändert haben (bzw. ändern werden), kann der Parameter *nextProps* mit den aktuellen Properties des Objekts verglichen werden.

Es folgt der Aufruf der **render**-Methode und anschließend das Updaten des "nativen DOMs" und der "refs" (Verweise auf die Elemente des nativen DOMs).

Mit dem Aufruf von **componentDidMount** endet der Mounting-Vorgang. Innerhalb dieser Methode können beispielsweise Initialisierungen eingebaut werden, die Zugriff auf den nativen DOM benötigen sowie Netzwerkzugriffe durchgeführt werden (AJAX-Requests). Obwohl **render** bereits ausgeführt wurde, kann hier jedoch noch der Status mit *setState()* aktualisiert werden, bevor die Änderungen tatsächlich im Browser sichtbar werden (**render** würde in dem Fall erneut aufgerufen werden; Achtung, die Performanz kann hierunter leiden).

**Updating**

React Komponenten können in ihrem Lebenszyklus auf 3 verschiedene Arten aktualisiert werden. Zum einen können sie von ihrem hierarchischen Vater (bezogen auf die ReactDOM-Hierarchie) neue Props erhalten. In diesem Fall wird die Methode **getDerivedStateFromProps** (s.o.) erneut aufgerufen. Der Unterschied zum Aufruf während des Mounting-Vorgangs ist, dass nun vor **render** eine weitere Methode aufgerufen wird, mithilfe der entschieden werden kann, ob ein erneutes Rendern wirklich erforderlich ist. Es handelt sich um die Methode **shouldComponentUpdate(nextProps, nextState)**. Defaultmäßig liefert sie *true* zurück, sodass der Rendervorgang durchgeführt wird. Implementiert man diese Methode und gibt *false* zurück (z.B., weil die neu erhaltenen Props keine Relevanz für die Anzeige haben), wird der Update-Vorgang ohne Rendern abgeschlossen. Ein durch *setState()* geänderter Zustand ruft shouldComponentUpdate ebenfalls auf.

Ein Aufruf der Methode *forceUpdate()* initiiert ebenfalls ein erneutes Rendern. Nach Möglichkeit sollte *forceUpdate* nur aufgerufen werden, wenn eine GUI-Änderung andernfalls nicht bemerkt werden würde (das sollte im Normallfall jedoch nicht notwendig sein).

Bevor die Änderungen in den nativen DOM übertragen werden, wird die Methode **getSnapshotBeforeUpdate(prevProps, prevState)** aufgerufen. Hiermit können Werte gespeichert werden, die sich potentiell nach dem Update ändern könnten (z.B. eine Scrollbar-Position). Alle Bestandteile des Rückgabewertes werden an die Methode **componentDidUpdate(prevProps, prevState[, snapshot])** weitergeleitet. Diese Methode wird demnach aufgerufen, nachdem die Änderungen im nativen DOM angepasst wurden. 

**Unmounting**

Unmittelbar bevor eine Methode unmountet und zerstört wird, wird die Methode **componentWillUnmount()** aufgerufen. Sie dient zum Aufräumen von Timern, Netzwerkverbindungen etc.



##### Bedingtes Rendern
##### Dumb Components & Smart Components

### Patterns / Architektur 

#### Flux
#### State management (Redux)
#### Komposition vs. Vererbung
#### Higher Order Components (HOCs)

### Weitere React-Themen
#### Virtuelles DOM & Reconciliation
#### Type cheking/static types in JavaScript
##### PropTypes
##### Flow
##### Typescript

#### Context
#### Error Handling (Error Boundaries)
#### Code-Splitting
#### Strict Mode
#### React Router
#### Serverseitiges Rendern

### Literaturverzeichnis

<a name="ref_maj18">[MAJ18]</a>: Maj, Wojciech: Interactive React lifecycle methods diagram. URL: https://github.com/wojtekmaj/react-lifecycle-methods-diagram
(abgerufen am 05.05.2018)

<a name="ref_face18a">[FACE18a]</a>: Facebook Inc.: Introducing JSX. URL: https://reactjs.org/docs/introducing-jsx.html
(abgerufen am 05.05.2018)

<a name="ref_face18b">[FACE18b]</a>: Facebook Inc.: React.Component. URL: https://reactjs.org/docs/react-component.html
(abgerufen am 05.05.2018)

<a name="ref_face18c">[FACE18c]</a>: Facebook Inc.: React.Component. URL: https://reactjs.org/docs/handling-events.html
(abgerufen am 06.05.2018)

<a name="ref_face18d">[FACE18d]</a>: Facebook Inc.: React.Component. URL: https://reactjs.org/docs/fragments.html
(abgerufen am 06.05.2018)

<a name="ref_mozi18">[MOZI18]</a>: Mozilla and individual contributors: Arrow functions. URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
(abgerufen am 06.05.2018)

<a name="ref_zeig16">[ZEIG16]</a>: Zeigermann, Oliver ; Hartmann, Nils: React : Die praktische Einführung in React, React Router und Redux. 1. Aufl. s.l. : dpunkt, 2016 
