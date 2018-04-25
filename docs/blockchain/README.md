# Blockchain
## Grundlagen
### Kryptographie
Dieses Unterkapitel soll einen Überblick über eine Reihe von wichtigen Kryptographie-Themen in Bezug auf Blockchains bieten.
...

#### Verschlüsselung
##### Verschlüsselungsarten

*Symmetrische Verschlüsselung*

Eine Art der Verschlüsselung ist die symmetrische Verschlüsselung. Bereits Gaius Julius Caesar (*100 v. Chr., †44 v. Chr.)  verwendete diese Art der Verschlüsselung zur Kommunikation mit seinen Generälen 
(die sogenannte *Caesarchiffre*). Hierbei sind Chiffrier- und Dechiffrierschlüssel gleich, siehe <a>[nachfolgende Abbildung](#ref_sym_encryption)</a>. Man spricht auch von einem *symmetrischer Schlüssel*.
Problematisch ist hierbei, dass Sender und Empfänger den gemeinsamen Schlüssel einmalig vor der ersten Übertragung austauschen müssen. 
Es wird somit ein sicherer Kommunikationskanal benötigt, in dem die Teilnehmer ihren Schlüssel auf sichere Art und Weise austauschen können.
Ebenso ist zu erwähnen, dass die Anzahl der benötigten Schlüssel mit der Anzahl der Kommunikationspartner drastisch steigt. Damit N Teilnehmer sicher miteinander kommunizieren können, werden 
**N(N-1)/2** Schlüssel benötigt <a>[[1]](#ref_kuesters)</a>.
Als Vorteil ist unter anderem die Hohe Geschwindigkeit für das Ver- und Entschlüsseln der Daten zu nennen, da diese Verfahren meist auf effizienten Operationen (z.B. XOR) beruhen.
http://www.kryptowissen.de/symmetrische-verschluesselung.html 

<a name="ref_sym_encryption">[1]</a>![sym_encryption](./images/sym_verschl.png "Symmetrische Verschlüsselung")
[Bildquelle](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)

*Asymmetrische Verschlüsselung*

Im Gegensatz zur symmetrischen Verschlüsselung verwendet die asymmetrische Verschlüsselung verschiedene Schlüssel zur Ver- und Entschlüsselung.
Es existiert *Schlüsselpaar*, das aus einem öffentlichen (public key) sowie einem privaten Schlüssel(private key/secret key) besteht. Das grundsätzliche Verfahren ist in der folgenden Abbildung 
dargestellt. 
  
![sym_encryption](./images/asym_verschl.png "Asymmetrische Verschlüsselung")
[Bildquelle](https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences)

Der Absender verwendet den öffentlichen Schlüssel des Empfängers zum Verschlüsseln der Daten. Der  Empfänger erhält den verschlüsselten Text und kann diesen mit seinem privaten Schlüssel
dechiffrieren. Der große Vorteil dieses Verfahrens liegt darin, dass der öffentliche Schlüssel nicht geheim gehalten werden muss, da er nicht zum entschlüsseln der Daten genutzt werden kann.
Der private Schlüssel sollte dementsprechend nur dem jeweiligen Empfänger bekannt sein und von ihm geheim gehalten werden. Da die Schlüssel unabhängig vom Sender sind, steigt die Anzahl der Schlüssel 
bei steigender Anzahl an Teilnehmern nicht quadratisch (wie bei der symmetrischen Verschlüsselung), sondern linear.

<a name="ref_kuesters">[1]</a>: Küsters, Ralf ; Wilke, Thomas: Moderne Kryptographie : Eine Einführung. 1. Aufl. Wiesbaden : Vieweg + Teubner, 2011 (Studium)
#### Hash Funktionen

#### Digitale Signaturen
#### Integrität
#### Kerckhoffs Prinzip
#### Authentizität
#### PKI
#### MAC
#### Verbindlichkeit
#### Vertraulichkeit

#### Algorithmen