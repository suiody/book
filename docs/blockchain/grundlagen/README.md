# Grundlagen

## Kryptographie --->WIP<---
Autor: Patrick Vogt

...

### Einige wichtige Begriffe und Grundsätze der Kryptographie
Autor: Patrick Vogt

*CIA-Schutzziele*
* **C**onfidentiality (Vertraulichkeit): Informationen sind nur autorisierten Personen zugänglich
* **I**ntegrity (Integrität): Informationen sind korrekt, aktuell und vollständig
* **A**vailability (Verfügbarkeit): Informationen sind berechtigten Personen dort und dann zugänglich, wo und wann diese die Informationen benötigen

 <a>[[BAUM14]](#ref_baum14)</a>
 

>Unter **Verbindlichkeit** werden die Sicherheitsziele Authentizität und Nichtabstreitbarkeit zusammengefasst. Bei der Übertragung von Informationen bedeutet dies, dass die Informationsquelle 
ihre Identität bewiesen hat und der Empfang der Nachricht nicht in Abrede gestellt werden kann.

>Mit dem Begriff **Authentizität** wird die Eigenschaft bezeichnet, die gewährleistet, dass ein Kommunikationspartner tatsächlich derjenige ist, der er vorgibt zu sein. 
Bei authentischen Informationen ist sichergestellt, dass sie von der angegebenen Quelle erstellt wurden. Der Begriff wird nicht nur verwendet, wenn die Identität von 
Personen geprüft wird, sondern auch bei IT-Komponenten oder Anwendungen.

https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKataloge/Inhalt/Glossar/glossar_node.html

**Prinzip von Kerkhoffs**

Ein wichtiger Grundsatz der Kryptographie wurde 1883 von Auguste Kerkchoffs von Nieuwenhof (* 1835, † 1903) festgestellt. In seiner Schrift beschrieb er das folgende Prinzip:

>Die Sicherheit eines Kryptosystems liegt allein in der Schwierigkeit, den Schlüssel zu finden – sie darf nicht auf der Geheimhaltung des Systems beruhen. <a>[[BAUM14]](#ref_baum14)</a>

Alle heutzutage gängigen Verschlüsselungsverfahren folgen diesem Grundsatz. 

### Hash Funktionen
Autor: Patrick Vogt

Hash Funktionen bilden einen wichtigen Bestandteil innerhalb der Kryptographie. Dort berechnen Sie aus einer gegebenen Nachricht einen sogenannten *Hashwert* fester Länge. Aus kryptografischer Sicht können Hashwerte als eine Prüfsumme gesehen werden. 
Es handelt sich im Prinzip um eine Art "Einwegfunktion". Der Weg vom Definitionsbereich hin zum Bildbereich ist einfach durchführbar, die Rückrichtung ist jedoch schwer. So können Hash Funktionen auch z.B. für das Speichern von Passwörtern verwendet werden, sodass innerhalb der Datenbank das Passwort nicht als Klartext sondern als Hashwert hinterlegt wird.   <a>[[PAAR16]](#ref_paar16)</a>

Aufgrund des eingeschränkten Bildbereichs (begrenzte Anzahl an Zeichen) und des unbegrenzten Definitionsbereichs kann es zu *Kollisionen* kommen (unterschiedliche nachrichten führen zu dem gleichen Hashwert). 

...

### Verschlüsselung
Autor: Patrick Vogt
#### Verschlüsselungsarten

*Symmetrische Verschlüsselung*

Eine Art der Verschlüsselung ist die symmetrische Verschlüsselung. Bereits Gaius Julius Caesar (*100 v. Chr., †44 v. Chr.)  verwendete diese Art der Verschlüsselung zur Kommunikation mit seinen Generälen 
(die sogenannte *Caesarchiffre*). Hierbei sind Chiffrier- und Dechiffrierschlüssel gleich, siehe <a>[nachfolgende Abbildung](#ref_sym_encryption)</a>. Man spricht auch von einem *symmetrischer Schlüssel*.
Problematisch ist hierbei, dass Sender und Empfänger den gemeinsamen Schlüssel einmalig vor der ersten Übertragung austauschen müssen. 
Es wird somit ein Kommunikationskanal benötigt, in dem die Teilnehmer ihren Schlüssel auf sichere Art und Weise austauschen können.
Ebenso ist zu erwähnen, dass die Anzahl der benötigten Schlüssel mit der Anzahl der Kommunikationspartner drastisch steigt. Damit N Teilnehmer sicher miteinander kommunizieren können, werden 
**N(N-1)/2** Schlüssel benötigt <a>[[KÜST11]](#ref_kuesters11)</a>.
Als Vorteil ist unter anderem die hohe Geschwindigkeit für das Ver- und Entschlüsseln der Daten zu nennen, da diese Verfahren meist auf effizienten Operationen (z.B. XOR) beruhen.
http://www.kryptowissen.de/symmetrische-verschluesselung.html 

<a name="ref_sym_encryption"></a>![sym_encryption](./images/sym_verschl.png "Symmetrische Verschlüsselung")
[Bildquelle](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)

![sym_encryption](./images/sym_verschl2.png "Symmetrische Verschlüsselung")
Abbildung entnommen aus <a>[[BAUM14]](#ref_baum14)</a>

*Asymmetrische Verschlüsselung*

Im Gegensatz zur symmetrischen Verschlüsselung verwendet die asymmetrische Verschlüsselung verschiedene Schlüssel zur Ver- und Entschlüsselung.
Es existiert ein *Schlüsselpaar*, das aus einem öffentlichen (public key) sowie einem privaten Schlüssel (private key/secret key) besteht. Das grundsätzliche Verfahren ist in der folgenden Abbildung 
dargestellt. 
  
![asym_encryption](./images/asym_verschl.png "Asymmetrische Verschlüsselung")
[Bildquelle](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)

![asym_encryption](./images/asym_verschl2.png "Asymmetrische Verschlüsselung")
Abbildung entnommen aus <a>[[BAUM14]](#ref_baum14)</a>

Der Absender verwendet den öffentlichen Schlüssel des Empfängers zum Verschlüsseln der Daten. Der  Empfänger erhält den verschlüsselten Text und kann diesen mit seinem privaten Schlüssel
dechiffrieren. Der große Vorteil dieses Verfahrens liegt darin, dass der öffentliche Schlüssel nicht geheim gehalten werden muss, da er nicht zum entschlüsseln der Daten genutzt werden kann.
Der private Schlüssel sollte dementsprechend nur dem jeweiligen Empfänger bekannt sein und von ihm geheim gehalten werden. Da die Schlüssel jeweils von nur einem Teilnehmer abhängig sind, steigt die Anzahl der Schlüssel bei steigender Anzahl an Teilnehmern nicht quadratisch, wie bei der symmetrischen Verschlüsselung, sondern linear.

### Digitale Signaturen
Autor: Patrick Vogt

Ähnlich wie herkömmliche (analoge) Signaturen sollen digitale Signaturen sicherstellen, dass eine Nachricht bzw. ein Dokument wirklich von dem Absender/Signierer stammt, der vorgibt das Dokument abgeschickt zu haben.
Eine Verschlüsselung der Daten erfolgt bei der Signierung nicht, wenngleich eine zusätzliche Verschlüsselung der signierten Nachricht durchaus üblich ist.
Mithilfe von digitaler Signatur kann beispielsweise beim Schlüsselaustausch zweier Teilnehmer sichergestellt werden, dass mit dem richtigen Gegenüber kommuniziert wird <a>[[PAAR16]](#ref_paar16)</a>.
Die nachfolgende Abbildung zeigt den prinzipiellen Ablauf beim Übermitteln digial signierter Dokumente.

![dig_signature](./images/digital_sign.svg "Prinzipt der digitalen Signatur")
[Bildquelle](https://www.docusign.com/how-it-works/electronic-signature/digital-signature/digital-signature-faq)

Das zu signierende Dokument wird mithilfe einer Hash-Funktion verarbeitet und anschließend mit dem privaten Schlüssel des Signierers verschlüsselt und an das originale Dokument angefügt. Das nun signierte 
Dokument wird an den Empfänger gesendet.  Die Signatur wird mithilfe des öffentlichen Schlüssels des Signierers entschlüsselt. Der Empfänger wendet anschließend den gleichen Hash-Algorithmus wie der Absender 
auf das Dokument an und vergleicht sein Ergebnise mit der empfangenen Signatur. Stimmen die beiden Hashwerte überein wurde der Text mit sehr hoher Wahrscheinlichkeit von der angegebenen Person signiert und nicht verändert. 

Im Gegensatz zu anderen (auf symmetrischen Verfahren basierenden) Signaturverfahren kann der Empfänger der Nachricht jedem - der ebenfalls den öffentlichen Schlüssel des Signierers kennt - beweisen, dass dieser die Nachricht verfasst hat.
Solche digitalen Signaturverfahren können deshalb auch zur juristischen Beweisführung verwendet werden.

<a>[[PAAR16]](#ref_paar16)</a>

Anforderungen an die Verwendung von digitalen Signaturen werden in Deutschland im Signaturgesetz (SigG) bzw. in der Signaturverordnung (SigV) angegeben.
Hier werden drei verschiedene Arten von elektronischen Signaturen unterschieden, <a>[[BAUM14]](#ref_baum14)</a>:

>* Als **elektronische Signatur** werden in elektronischer Form vorliegende Daten betrachtet, die zur Authentifizierung dienen und die anderen elektronischen Daten beigefügt
werden können. Es könnte sich hierbei also auch um eine eingescannte Unterschrift
handeln.
>* **Fortgeschrittene elektronische Signaturen** sind ausschließlich dem Inhaber des Signierschlüssels zuzuordnen. Hier handelt es sich also um Signaturen, die mit einem digitalen
Signatursystem erzeugt wurden. Allerdings werden keine besonderen Anforderungen
an die Sicherheit gestellt.
>* **Qualifizierte elektronische Signaturen** müssen ebenfalls mit einem digitalen Signatursystem erzeugt werden. Zusätzlich müssen Sicherheitsanforderungen bei der Erzeugung dieser Signaturen erfüllt sein, und der Zusammenhang zwischen Testschlüssel
und Identität des entsprechenden Teilnehmers muss durch ein zum Zeitpunkt der Erstellung gültiges qualifiziertes Zertifikat bestätigt werden.

Letztere Signaturen beinhalten zusätzlich zum Namen und Testschlüssel weitere Details (z.B. das Erzeugungsdatum und Gültigkeit des Zertifikats) <a>[[BAUM14]](#ref_baum14)</a>.



### PKI
Autor: Patrick Vogt
### MAC
Autor: Patrick Vogt



### Algorithmen
Autor: Patrick Vogt

### Zero knowledge Proofs 

Autor: Lukas Stuckstette


## Distributed Ledger vs. Datenbanken

Autor: Tim Jastrzembski

Abgrenzung zu Datenbanken

## Verteilte Systeme

Autor: Nils Kirchhof

* Konsens (PoW, PoS, etc.)
  - https://pdfs.semanticscholar.org/da8a/37b10bc1521a4d3de925d7ebc44bb606d740.pdf

## Dezentrale Anwendungen

* DApps, Web 3.0


Autor: Patrick Starzynski 

## Literaturverzeichnis

<a name="ref_baum14">[BAUM14]</a>: Baumann, Ulrike ; Franz, Elke ; Pfitzmann, Andreas: Kryptographische Systeme. Berlin : Springer Vieweg, 2014, ISBN: 978-3-642-45332-8 

<a name="ref_kuesters11">[KÜST11]</a>: Küsters, Ralf ; Wilke, Thomas: Moderne Kryptographie : Eine Einführung. 1. Aufl. Wiesbaden : Vieweg + Teubner, 2011, ISBN: 978-3-519-00509-4

<a name="ref_paar16">[PAAR16]</a>: Paar, Christof ; Pelzl, Jan: Kryptografie verständlich : Ein Lehrbuch für Studierende und Anwender. Berlin, Heidelberg : Springer Vieweg, 2016, ISBN: 978-3-662-49296-3


