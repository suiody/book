(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{50:function(e,n,i){e.exports=i.p+"assets/img/NetzwerkTopologien.e034f517.png"},51:function(e,n,i){e.exports=i.p+"assets/img/crypto_mac.0f7f56b1.png"},52:function(e,n,i){e.exports=i.p+"assets/img/digital_sign.b959afd8.svg"},53:function(e,n,i){e.exports=i.p+"assets/img/asym_verschl2.f7857205.png"},54:function(e,n,i){e.exports=i.p+"assets/img/asym_verschl.17776738.png"},55:function(e,n,i){e.exports=i.p+"assets/img/sym_verschl2.8a17b406.png"},56:function(e,n,i){e.exports=i.p+"assets/img/sym_verschl.34bb59e1.png"},67:function(e,n,i){"use strict";i.r(n);var r=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"grundlagen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grundlagen","aria-hidden":"true"}},[e._v("#")]),e._v(" Grundlagen")]),r("h2",{attrs:{id:"kryptographie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kryptographie","aria-hidden":"true"}},[e._v("#")]),e._v(" Kryptographie")]),r("p",[e._v("Autor: Patrick Vogt")]),r("p",[e._v("...")]),r("h3",{attrs:{id:"einige-wichtige-begriffe-und-grundsatze-der-kryptographie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#einige-wichtige-begriffe-und-grundsatze-der-kryptographie","aria-hidden":"true"}},[e._v("#")]),e._v(" Einige wichtige Begriffe und Grundsätze der Kryptographie")]),r("p",[e._v("Autor: Patrick Vogt")]),r("p",[r("strong",[e._v("CIA-Schutzziele")])]),r("p",[e._v("Das Akronym "),r("em",[e._v("CIA")]),e._v(" ergibt sich aus den folgenden drei Begriffen,  "),r("a",[r("a",{attrs:{href:"#ref_baum14"}},[e._v("[BAUM14]")])]),e._v(":")]),r("ul",[r("li",[r("strong",[e._v("C")]),e._v("onfidentiality (Vertraulichkeit): Informationen sind nur autorisierten Personen zugänglich")]),r("li",[r("strong",[e._v("I")]),e._v("ntegrity (Integrität): Informationen sind korrekt, aktuell und vollständig")]),r("li",[r("strong",[e._v("A")]),e._v("vailability (Verfügbarkeit): Informationen sind berechtigten Personen dort und dann zugänglich, wo und wann diese die Informationen benötigen")])]),r("p",[r("strong",[e._v("Authentizität")])]),r("p",[e._v("Das Sicherheitsziel Authentizität gewährleistet, dass ein Kommunikationspartner wirklich derjenige ist, der er vorgibt zu sein. Sind Daten oder Informationen authentisch, so ist deren Herkunft gewiss.")]),r("p",[r("strong",[e._v("Nichtabstreitbarkeit")])]),r("p",[e._v("Ebenso wichtig ist der Begriff der "),r("em",[e._v("Nichtabstreitbarkeit")]),e._v(". Diese gewährleistet eine Nachweisbarkeit gegenüber Dritten, sodass der Versand und Empfang einer Nachricht bzw. von Daten/Informationen bewiesen werden kann. Hieraus ergeben sich zwei Unterkategorien:")]),r("ul",[r("li",[r("p",[e._v("Nichtabstreitbarkeit der Herkunft: verhindert ein nachträgliche Abstreiten des "),r("strong",[e._v("Versands")]),e._v(" einer Nachricht")])]),r("li",[r("p",[e._v("Nichtabstreitbarkeit des Erhalts: verhindert ein nachträgliche Abstreiten des "),r("strong",[e._v("Erhaltens")]),e._v(" einer Nachricht")])])]),r("p",[r("strong",[e._v("Verbindlichkeit")])]),r("p",[e._v("Der Begriff der Verbindlichkeit kombiniert Authentizität mit Nichtabstreitbarkeit. Im Falle der Datenübertragung heißt das, dass der Absender seine Identität bewiesen hat und der Empfang der Nachricht nicht abgetritten werden kann, "),r("a",[r("a",{attrs:{href:"#ref_bsi18"}},[e._v("[BSI18]")])]),e._v(".")]),r("p",[r("strong",[e._v("Kerckhoffs’ Prinzip")])]),r("p",[e._v("Ein wichtiger Grundsatz der Kryptographie wurde 1883 von Auguste Kerkchoffs von Nieuwenhof (* 1835, † 1903) festgestellt. In seiner Schrift beschrieb er das folgende Prinzip:")]),r("blockquote",[r("p",[e._v("Die Sicherheit eines Kryptosystems liegt allein in der Schwierigkeit, den Schlüssel zu finden – sie darf nicht auf der Geheimhaltung des Systems beruhen. "),r("a",[r("a",{attrs:{href:"#ref_baum14"}},[e._v("[BAUM14]")])])])]),r("p",[e._v("Alle heutzutage gängigen Verschlüsselungsverfahren folgen diesem Grundsatz.")]),r("h3",{attrs:{id:"hash-funktionen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hash-funktionen","aria-hidden":"true"}},[e._v("#")]),e._v(" Hash Funktionen")]),r("p",[e._v("Autor: Patrick Vogt")]),r("p",[e._v("Hash Funktionen bilden einen wichtigen Bestandteil innerhalb der Kryptographie. Dort berechnen Sie aus einer gegebenen Nachricht einen sogenannten "),r("em",[e._v("Hashwert")]),e._v(' fester Länge. Aus kryptografischer Sicht können Hashwerte als eine Prüfsumme gesehen werden.\nEs handelt sich im Prinzip um eine Art "Einwegfunktion". Der Weg vom Definitionsbereich hin zum Bildbereich ist einfach durchführbar, die Rückrichtung ist jedoch schwer. So können Hash Funktionen auch z.B. für das Speichern von Passwörtern verwendet werden, sodass innerhalb der Datenbank das Passwort nicht als Klartext sondern als Hashwert hinterlegt wird, '),r("a",[r("a",{attrs:{href:"#ref_paar16"}},[e._v("[PAAR16]")])]),e._v(".")]),r("p",[e._v("Aufgrund des eingeschränkten Bildbereichs (begrenzte Anzahl an Zeichen) und des unbegrenzten Definitionsbereichs kann es zu "),r("em",[e._v("Kollisionen")]),e._v(" kommen (unterschiedliche nachrichten führen zu dem gleichen Hashwert).")]),r("p",[e._v("...")]),r("h3",{attrs:{id:"verschlusselung"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verschlusselung","aria-hidden":"true"}},[e._v("#")]),e._v(" Verschlüsselung")]),r("p",[e._v("Autor: Patrick Vogt")]),r("h4",{attrs:{id:"verschlusselungsarten"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verschlusselungsarten","aria-hidden":"true"}},[e._v("#")]),e._v(" Verschlüsselungsarten")]),r("p",[r("em",[e._v("Symmetrische Verschlüsselung")])]),r("p",[e._v("Eine Art der Verschlüsselung ist die symmetrische Verschlüsselung. Bereits Gaius Julius Caesar (* 100 v. Chr., † 44 v. Chr.)  verwendete diese Art der Verschlüsselung zur Kommunikation mit seinen Generälen\n(die sogenannte "),r("em",[e._v("Caesarchiffre")]),e._v("). Hierbei sind Chiffrier- und Dechiffrierschlüssel gleich, siehe nachfolgende Abbildung. Man spricht auch von einem "),r("em",[e._v("symmetrischer Schlüssel")]),e._v(".")]),r("p",[r("a",{attrs:{name:"ref_sym_encryption"}}),r("img",{attrs:{src:i(56),alt:"sym_encryption",title:"Symmetrische Verschlüsselung"}}),r("a",{attrs:{href:"https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bildquelle")])]),r("p",[e._v("Problematisch ist hierbei, dass Sender und Empfänger den gemeinsamen Schlüssel einmalig vor der ersten Übertragung austauschen müssen.\nEs wird somit ein Kommunikationskanal benötigt, in dem die Teilnehmer ihren Schlüssel auf sichere Art und Weise austauschen können, siehe nachfolgende Abbildung.\nEbenso ist zu erwähnen, dass die Anzahl der benötigten Schlüssel mit der Anzahl der Kommunikationspartner drastisch steigt. Damit N Teilnehmer sicher miteinander kommunizieren können, werden\n"),r("strong",[e._v("N(N-1)/2")]),e._v(" Schlüssel benötigt "),r("a",[r("a",{attrs:{href:"#ref_kuesters11"}},[e._v("[KÜST11]")])]),e._v(".\nAls Vorteil ist unter anderem die hohe Geschwindigkeit für das Ver- und Entschlüsseln der Daten zu nennen, da diese Verfahren meist auf effizienten Operationen (z.B. XOR) beruhen , "),r("a",[r("a",{attrs:{href:"#ref_stop18"}},[e._v("[STOP18]")])]),e._v(".")]),r("p",[r("img",{attrs:{src:i(55),alt:"sym_encryption",title:"Symmetrische Verschlüsselung"}}),e._v("\nAbbildung entnommen aus "),r("a",[r("a",{attrs:{href:"#ref_baum14"}},[e._v("[BAUM14]")])])]),r("p",[r("em",[e._v("Asymmetrische Verschlüsselung")])]),r("p",[e._v("Im Gegensatz zur symmetrischen Verschlüsselung verwendet die asymmetrische Verschlüsselung verschiedene Schlüssel zur Ver- und Entschlüsselung.\nEs existiert ein "),r("em",[e._v("Schlüsselpaar")]),e._v(", das aus einem öffentlichen (public key) sowie einem privaten Schlüssel (private key/secret key) besteht. Das grundsätzliche Verfahren ist in der folgenden Abbildung\ndargestellt.")]),r("p",[r("img",{attrs:{src:i(54),alt:"asym_encryption",title:"Asymmetrische Verschlüsselung"}}),r("a",{attrs:{href:"https://www.ssl2buy.com/wiki/symmetric-vs-asymmetric-encryption-what-are-differences",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bildquelle")])]),r("p",[e._v("Der Absender verwendet den öffentlichen Schlüssel des Empfängers zum Verschlüsseln der Daten. Der  Empfänger erhält den verschlüsselten Text und kann diesen mit seinem privaten Schlüssel\ndechiffrieren. Der große Vorteil dieses Verfahrens liegt darin, dass der öffentliche Schlüssel nicht geheim gehalten werden muss, da er nicht zum entschlüsseln der Daten genutzt werden kann. Der bei der symmetrischen Verschlüsselung benötigte sichere Kommunikationskanal entfällt somit, siehe nachfolgende Abbildung. Der private Schlüssel sollte dementsprechend nur dem jeweiligen Empfänger bekannt sein und von ihm geheim gehalten werden. Da die Schlüssel jeweils von nur einem Teilnehmer abhängig sind, steigt die Anzahl der Schlüssel bei steigender Anzahl an Teilnehmern nicht quadratisch, wie bei der symmetrischen Verschlüsselung, sondern linear.")]),r("p",[r("img",{attrs:{src:i(53),alt:"asym_encryption",title:"Asymmetrische Verschlüsselung"}}),e._v("\nAbbildung entnommen aus "),r("a",[r("a",{attrs:{href:"#ref_baum14"}},[e._v("[BAUM14]")])])]),r("h3",{attrs:{id:"digitale-signaturen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#digitale-signaturen","aria-hidden":"true"}},[e._v("#")]),e._v(" Digitale Signaturen")]),r("p",[e._v("Autor: Patrick Vogt")]),r("p",[e._v("Ähnlich wie herkömmliche (analoge) Signaturen sollen digitale Signaturen sicherstellen, dass eine Nachricht bzw. ein Dokument wirklich von dem Absender/Signierer stammt, der vorgibt das Dokument abgeschickt zu haben.\nEine Verschlüsselung der Daten erfolgt bei der Signierung nicht, wenngleich eine zusätzliche Verschlüsselung der signierten Nachricht durchaus üblich ist.\nMithilfe der digitaler Signatur kann beispielsweise beim Schlüsselaustausch zweier Teilnehmer sichergestellt werden, dass mit dem richtigen Gegenüber kommuniziert wird "),r("a",[r("a",{attrs:{href:"#ref_paar16"}},[e._v("[PAAR16]")])]),e._v(".\nDie nachfolgende Abbildung zeigt den prinzipiellen Ablauf beim Übermitteln digial signierter Dokumente.")]),r("p",[r("img",{attrs:{src:i(52),alt:"dig_signature",title:"Prinzipt der digitalen Signatur"}}),r("a",{attrs:{href:"https://www.docusign.com/how-it-works/electronic-signature/digital-signature/digital-signature-faq",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bildquelle")])]),r("p",[e._v("Das zu signierende Dokument wird mithilfe einer Hash-Funktion verarbeitet und anschließend mit dem privaten Schlüssel des Signierers verschlüsselt und an das originale Dokument angefügt. Das nun signierte\nDokument wird an den Empfänger gesendet.  Die Signatur wird mithilfe des öffentlichen Schlüssels des Signierers entschlüsselt. Der Empfänger wendet anschließend den gleichen Hash-Algorithmus wie der Absender\nauf das Dokument an und vergleicht sein Ergebnise mit der empfangenen Signatur. Stimmen die beiden Hashwerte überein wurde der Text mit sehr hoher Wahrscheinlichkeit von der angegebenen Person signiert und nicht verändert.")]),r("p",[e._v("Im Gegensatz zu anderen (auf symmetrischen Verfahren basierenden) Signaturverfahren kann der Empfänger der Nachricht jedem - der ebenfalls den öffentlichen Schlüssel des Signierers kennt - beweisen, dass dieser die Nachricht verfasst hat.\nSolche digitalen Signaturverfahren können deshalb auch zur juristischen Beweisführung verwendet werden "),r("a",[r("a",{attrs:{href:"#ref_paar16"}},[e._v("[PAAR16]")])]),e._v(".")]),r("p",[e._v("Anforderungen an die Verwendung von digitalen Signaturen werden in Deutschland im Signaturgesetz (SigG) bzw. in der Signaturverordnung (SigV) angegeben.\nHier werden drei verschiedene Arten von elektronischen Signaturen unterschieden, "),r("a",[r("a",{attrs:{href:"#ref_baum14"}},[e._v("[BAUM14]")])]),e._v(":")]),r("blockquote",[r("ul",[r("li",[e._v("Als "),r("strong",[e._v("elektronische Signatur")]),e._v(" werden in elektronischer Form vorliegende Daten betrachtet, die zur Authentifizierung dienen und die anderen elektronischen Daten beigefügt\nwerden können. Es könnte sich hierbei also auch um eine eingescannte Unterschrift\nhandeln.")]),r("li",[r("strong",[e._v("Fortgeschrittene elektronische Signaturen")]),e._v(" sind ausschließlich dem Inhaber des Signierschlüssels zuzuordnen. Hier handelt es sich also um Signaturen, die mit einem digitalen\nSignatursystem erzeugt wurden. Allerdings werden keine besonderen Anforderungen\nan die Sicherheit gestellt.")]),r("li",[r("strong",[e._v("Qualifizierte elektronische Signaturen")]),e._v(" müssen ebenfalls mit einem digitalen Signatursystem erzeugt werden. Zusätzlich müssen Sicherheitsanforderungen bei der Erzeugung dieser Signaturen erfüllt sein, und der Zusammenhang zwischen Testschlüssel\nund Identität des entsprechenden Teilnehmers muss durch ein zum Zeitpunkt der Erstellung gültiges qualifiziertes Zertifikat bestätigt werden.")])])]),r("p",[e._v("Letztere Signaturen beinhalten zusätzlich zum Namen und Testschlüssel weitere Details (z.B. das Erzeugungsdatum und Gültigkeit des Zertifikats) "),r("a",[r("a",{attrs:{href:"#ref_baum14"}},[e._v("[BAUM14]")])]),e._v(".")]),r("h3",{attrs:{id:"message-authentication-code-mac"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#message-authentication-code-mac","aria-hidden":"true"}},[e._v("#")]),e._v(" Message Authentication Code (MAC)")]),r("p",[e._v("Autor: Patrick Vogt")]),r("p",[e._v("Message Authentication Codes (MACs) werden auch kryptografische Prüfsummen genannt. Wie auch digitale Signaturen dienen sie der Sicherstellung der Integrität und Authentisierung von Nachrichten, wobei MACs jedoch auf einem symmetrischen Verfahren beruhen, wodurch eine Nichtzurückwesbarkeit nicht gewährleistet werden kann. MACs basieren auf Hash Funktionen oder Blockchiffren, wodurch sie in der Regel deutlich schneller als digitale Signaturen verarbeitet werden können.")]),r("p",[e._v("Im Wesentlichen wird mithilfe eines symmetrischen Schlüssels "),r("em",[e._v("k")]),e._v(" und der Nachricht "),r("em",[e._v("x")]),e._v(" eine Prüfsumme "),r("em",[e._v("m")]),e._v(" gebildet:")]),r("blockquote",[r("p",[e._v("m = MAC"),r("sub",[e._v("k")]),e._v("(x)")])]),r("p",[e._v("Auf diese Art und Weise soll sichergestellt werden, dass die Nachricht auf dem Weg zum Empfänger nicht verändert wurde "),r("a",[r("a",{attrs:{href:"#ref_paar16"}},[e._v("[PAAR16]")])]),e._v(".")]),r("p",[e._v("Der gesamte Vorgang läuft prinzipiell wie bei digitalen Signaturen ab:")]),r("p",[r("img",{attrs:{src:i(51),alt:"dig_signature",title:"Prinzip von MACs"}}),r("a",{attrs:{href:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MAC.svg/661px-MAC.svg.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bildquelle")])]),r("p",[e._v("Der Sender bildet mithilfe des gemeinsamen Schlüssels und der Nachricht eine Prüfsumme und verschickt die Nachricht mit angehängter Prüfsumme. Der Empfänger führt den gleichen Vorgang durch und prüft seine berechnete Prüfsumme mit der erhaltenen.")]),r("h3",{attrs:{id:"public-key-infrastructure-pki"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#public-key-infrastructure-pki","aria-hidden":"true"}},[e._v("#")]),e._v(" Public Key Infrastructure (PKI)")]),r("p",[e._v("Autor: Patrick Vogt")]),r("p",[e._v("Bei Verfahren, die auf asymmetrischen Methodiken beruhen, muss sichergestellt werden, dass ein bestimmter öffentlicher Schlüssel wirklich einer gewissen Person gehört. Die Gültigkeit dieser "),r("em",[e._v("Schlüsselbindung")]),e._v(" wird von "),r("em",[e._v("Zerzifizierungsstellen")]),e._v(" ("),r("em",[e._v("certification authorities, CA")]),e._v("), mithilfe von Zertifikaten ("),r("em",[e._v("cetificates")]),e._v("), bestätigt "),r("a",[r("a",{attrs:{href:"#ref_kuesters11"}},[e._v("[KÜST11]")])]),e._v(".")]),r("p",[e._v("Public Key Infrastructures verwalten und verteilen die Schlüssel und Zertifikate.")]),r("p",[e._v("...")]),r("h3",{attrs:{id:"algorithmen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#algorithmen","aria-hidden":"true"}},[e._v("#")]),e._v(" Algorithmen")]),r("p",[e._v("Autor: Patrick Vogt")]),r("h3",{attrs:{id:"zero-knowledge-proofs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zero-knowledge-proofs","aria-hidden":"true"}},[e._v("#")]),e._v(" Zero knowledge Proofs")]),r("p",[e._v("Autor: Lukas Stuckstette")]),r("h2",{attrs:{id:"distributed-ledger-vs-datenbanken"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distributed-ledger-vs-datenbanken","aria-hidden":"true"}},[e._v("#")]),e._v(" Distributed Ledger vs. Datenbanken")]),r("p",[e._v("Autor: Tim Jastrzembski")]),r("p",[e._v("Abgrenzung zu Datenbanken")]),r("h2",{attrs:{id:"verteilte-systeme"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verteilte-systeme","aria-hidden":"true"}},[e._v("#")]),e._v(" Verteilte Systeme")]),r("p",[e._v("In diesem Kapitel soll definiert werden, was ein verteiltes System im bezug auf die Blockchain ist und welche Probleme\ngelöst werden müssen, damit vertrauen zwischen den einzelnen Nodes aufgebaut werden kann. Zudem sollen die gebräuchlichsten\nKonsens-Algorithmen erläutert werden, welche zur Zeit von den größten Blockchain-Netzwerken benutzt werden.")]),r("h3",{attrs:{id:"was-ist-ein-verteiltes-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#was-ist-ein-verteiltes-system","aria-hidden":"true"}},[e._v("#")]),e._v(" Was ist ein verteiltes System")]),r("p",[e._v("Ein verteiltes System ist prinzipiell eine Ansammlung von Computern, welche untereinander Nachrichten austauschen\nkönnen. Das Medium, über den dieser austausch stattfindet, ist dabei unbedeutend. Heutzutage wird für den Nachrichtenaustausch\nin den allermeisten Fällen das Internet genutzt, da hier Rechner von überall auf der Welt miteinander kommunizieren können und\ndie geschaffene Infrastruktur einfach zugänglich ist. Zudem wird ein verteiltes System darüber definiert, dass ein Benutzer das\nSystems als ein einziges Systems sieht, egal mit welchem Node beziehungsweise Computer im Systems er sich verbindet.")]),r("p",[e._v("Verteilte Systeme können verschiedene Typologien haben. Eine Topologie beschreibt in welcher weise die Nodes im System miteinander verbunden\nsind.\n"),r("img",{attrs:{src:i(50),alt:"Verschiedene Typologien"}})]),r("p",[e._v("Beispielsweise kennt eine Node in einem vollvermaschten System jede andere Node und kann so auf direktem Wege miteinander kommunizieren.\nDie direkte Kommunikation ist einer der Vorteile dieser Topologie. Wenn jedoch eine neue Node dem Netzwerk betreten will, muss nicht nur\ndie neue Node all bereits im Netzwerk bestehenden Nodes kennenlernen, auch müssen die bereits bestehenden Nodes über den betritt informiert\nwerden. Je nach größe des Netzwerkes und wie oft eine neue Node dem Netzwerk betritt kann dies zu einem Problem werden, wo das System nur noch\ndamit beschäftigt ist die Liste der Nodes aktuell zu halten.")]),r("p",[e._v("Bei den meisten Blockchain-Protokollen wird auf eine Abwandlung der vollvermaschten Topologie zurückgegriffen. Es kommt ein vermaschtes Netzwerk\noder auch Peer-to-Peer (P2P) Netzwerk zum Einsatz. Dabei können neue Nodes wie bei einem vollvermaschten Netz von jeder anderen Node\nhinzugefügt werden, allerdings können nicht alle Nodes eines Netzwerkes miteinander kommunizieren. Stattdesstehen steht jede Node mit\neiner handvoll anderer Nodes in Kontakt. Soll eine Nachricht zu einer Node gesendet werden welche nicht im direkten Kontakt mit der Absendernode\nsteht, so wird diese Nachricht vom Netzwerk selbst weitergeleitet, bis die Nachricht eine Node erreicht, welche in Kontakt mit der Empfängernode\nsteht.")]),r("h3",{attrs:{id:"die-blockchain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#die-blockchain","aria-hidden":"true"}},[e._v("#")]),e._v(" Die Blockchain")]),r("p",[e._v("Die Blockchain ist ein verteiltes Kontobuch (Ledger), in welchem jede Transaktion von jedem Nutzer verzeichnet ist. Eine bestimmte Anzahl an\nTransaktionen werden zu Blöcken zusammengefasst. Diese Blöcke werden miteinander verkettet. Dies bedeutet, dass der Hash eines Nachfolgerblock\nim Header des Vorgängerblock gespeichert wird. Daher der Name Blockkette oder im englischen Blockchain. Über die Blockchain kann so die Reihenfolge\nder Transaktionen gespeichert werden. In einem verteilten Blockchain System hält jede Node eine Kopie der Blockchain. Zudem kann jede Node\nTransaktionen eines Nutzers entgegen nehmen und diese im Netzwerk bekannt machen. Das Problem, welches sich nun jeder Blockchain-Algorithmus lösen\nmuss ist, welche Node die gesammelten Transaktionen zu einem Block zusammenfassen und der Blockchain hinzufügen darf. Damit das Protokoll\nfunktioniert müssen alle Nodes im Netzwerk sich auf eine einzige Blockchain einigen. Hinzu kommt, dass Nodes dem Netzwerk frei betreten können,\nohne das eine zentrale Stelle die Node überprüft hat. So kann keiner Node im Netzwerk vertraut werden. Es muss also ein Weg gefunden werden der\nes dem Netzwerk erlaubt Blöcke von einer Node zur Kette hinzufügen zu lassen, obwohl die Absichten der hinzufügenden Node nicht bekannt sind.\nZudem muss geregelt werden was passiert wenn es zu Unstimmigkeiten in der Blockchain kommt, wenn beispielsweise zwei Blöcke zur selben Zeit gefunden\nwurden und es zu einer gabelung (fork) in der Blockchain kommt. Bei einem fork würden zwei verschiedenen Blöcke am Ende der Kette stehen. Dadurch\nkönnten Währungen doppelt ausgegeben werden, falls in den beiden letztens Blöcken Transaktionen von einem Konto zu zwei verschiedenen Empfängern\nverzeichnet sind. Die Aufgabe eines Konsens-Algorithmus ist es deshalb zu einer eindeutigen, gabelungsfreien Blockchain zu gelangen, auf welche\nsich alle Nodes im Netzwerk einigen können.")]),r("h3",{attrs:{id:"konsens-algorithmen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#konsens-algorithmen","aria-hidden":"true"}},[e._v("#")]),e._v(" Konsens-Algorithmen")]),r("p",[e._v("Es gibt verschiedene Wege zu einem Konsens in einem verteilten System zu kommen. Viele Cryptowährungen unterscheiden sich alleine in ihrem\nKonsens-Algorithmus und versuchen so ein alleinstellungsmerkmal zu erlangen. Die gebräuchlichsten Konsens-Algorithmen sind:")]),r("ul",[r("li",[e._v("Proof-of-Work")]),r("li",[e._v("Proof-of-Stake")]),r("li",[e._v("Practical Byzantine Fault Tolerance")]),r("li",[e._v("Proof of Elapsed Time")]),r("li",[e._v("Federated Byzantine Agreement")])]),r("p",[e._v("Diese Algorithmen werden unteranderem von jeweils Bitcoin, Etherium, Ripple, InterLedger (Hyperledger) und Hyperledger Fabric verwendet.")]),r("h4",{attrs:{id:"proof-of-work"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proof-of-work","aria-hidden":"true"}},[e._v("#")]),e._v(" Proof-of-Work")]),r("p",[e._v("Wie bei allen Blockchain-Protokollen wird auch beim Proof-of-Work Transaktionen zu Blöcken zusammengefasst. Jede Node die eine Transaktion empfängt\nspeichert diese zunächst in einem Cache und leitet sie an alle anderen Nodes im Netzwerk weiter. Liegen genug Transaktionen in einem Cache können\ndiese zu einem Block zusammengefasst werden. Alle Nodes fassen Transaktionen in einem eigenen Block zusammen. Dies hat zur Folge das nicht alle Nodes\ndie gleichen Transaktionen in ihrem Block aufgenommen haben, da Transaktionen beim verschiecken zwischen Nodes verloren gegangen sein können oder es\ndurch eine Verzögerung nicht in den aktuellen Block geschafft haben.")]),r("p",[e._v("Nachdem eine Node einen Block zusammengefasst hat, versucht sie einen Nonce zu finden, welcher, gehasht mit dem Blockhash, einen neuen Hashwert\nbildet. Dieser neu gebildete Hashwert muss allerdings eine bestimmte Anzahl an führenden Nullen besitzen um vom Netzwerk als der rechtmäßige\nNachfolgerblock anerkannt zu werden. Die Anzahl der führenden Nullen des Hashes wird Schwierigkeit (Difficulty) genannt. Diese Schwierigkeit passt\nsich dynamisch an das Netzwerkes an, sodass mit sich ändernder Rechenleistung der zeitliche Abstand der Blockerstellung gleichbleibend ist.\nDer eigentliche zeitliche Abstand ist je nach Implementierung des Proof-of-Work unterschiedlich. Im Falle von Bitcoin beträgt er 10 Minuten.")]),r("p",[e._v("Der neu gefundene Block wird von der findenden Node direkt in die Kopie ihrer Blockchain eingefügt und anschließend an alle weiteren Nodes gesendet.\nNodes die den neuen Block empfangen prüfen ihn auf seine Richtigkeit und fügen ihn dan zu ihrer eigenen Kopie der Blockchain hinzu. Sollte es in der\neigenen Blockchain bereits einen Nachfolgerblock geben, weil zwei Nodes zur selben Zeit einen Block gefunden haben, werden zunächst beide Blöcke als Nachfolger\nbehandelt. Nodes können frei entscheiden welchen der beiden Nachfolgerblöcke sie als legitim ansehen. Wird allerdings ein neuer Block gefunden welcher die\nBlockchain um einen Block verlängert, so wird nur der längste Teil der Blockchain als legitim angesehen und der andere Teil der Blockchain wird verlassen.\nEs kann vorkommen das eine Gabelung in der Kette zwei bis drei Blöcke erreicht, bevor ein Ast sich als legitim herrausstellt. Transaktionen die nur\nauf dem abgeschnittenen Ast verzeichnet waren werden somit ungültig. Aufgrund dessen sollte bei einer Transaktion gewartet werden bis mindestens Sechs\nBlöcke nach der eigentlichen Transaktion angehängt worden sind.")]),r("p",[e._v("Aufgrund der Tatsache das die Findung eines Blockes Rechenleistung benötigt kann davon ausgegangen werden das keine einzelne Person Blocks zur\nKette hinzufügen kann. Da nur die längste Kette von allen Nodes als legitim angesehen wird, müsste eine Person alleine jeden einzelnen neuen Block\nfinden, damit seine eigene Blockchain schneller wächst als die Blockchain an der das Rest der Netzwerkes arbeitet. Durch diesem Umstand wird die\ndezentralisierung gewährleistet. Sollte alllerdings eine Person oder Organization mehr als 51% der Rechenleistung kontrollieren, könnte diese\nOrganisation den Verlauf der Blockchain manipulieren.")]),r("h2",{attrs:{id:"dezentrale-anwendungen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dezentrale-anwendungen","aria-hidden":"true"}},[e._v("#")]),e._v(" Dezentrale Anwendungen")]),r("ul",[r("li",[e._v("DApps, Web 3.0")])]),r("p",[e._v("Autor: Patrick Starzynski")]),r("h2",{attrs:{id:"literaturverzeichnis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#literaturverzeichnis","aria-hidden":"true"}},[e._v("#")]),e._v(" Literaturverzeichnis")]),r("p",[r("a",{attrs:{name:"ref_baum14"}},[e._v("[BAUM14]")]),e._v(": Baumann, Ulrike ; Franz, Elke ; Pfitzmann, Andreas: Kryptographische Systeme. Berlin : Springer Vieweg, 2014, ISBN: 978-3-642-45332-8")]),r("p",[r("a",{attrs:{name:"ref_bsi18"}},[e._v("[BSI18]")]),e._v(":  Bundesamt für Sicherheit in der Informationstechnik (BSI) - Referat B 23, Cyber-Sicherheit für den Bürger und Öffentlichkeitsarbeit: IT-Sicherheit: 4 Glossar und Begriffsdefinitionen. Bonn, 2018 URL: https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKataloge/Inhalt/Glossar/glossar_node.html (abgerufen am 29.04.2018)")]),r("p",[r("a",{attrs:{name:"ref_kuesters11"}},[e._v("[KÜST11]")]),e._v(": Küsters, Ralf ; Wilke, Thomas: Moderne Kryptographie : Eine Einführung. 1. Aufl. Wiesbaden : Vieweg + Teubner, 2011, ISBN: 978-3-519-00509-4")]),r("p",[r("a",{attrs:{name:"ref_paar16"}},[e._v("[PAAR16]")]),e._v(": Paar, Christof ; Pelzl, Jan: Kryptografie verständlich : Ein Lehrbuch für Studierende und Anwender. Berlin, Heidelberg : Springer Vieweg, 2016, ISBN: 978-3-662-49296-3")]),r("p",[r("a",{attrs:{name:"ref_stop18"}},[e._v("[STOP18]")]),e._v(": Stobitzer, Christian: Symmetrische Verschlüsselung. Karlsruhe. URL: http://www.kryptowissen.de/symmetrische-verschluesselung.html (abgerufen am 27.04.2018)")])])}],t=i(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);n.default=s.exports}}]);