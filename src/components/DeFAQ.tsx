"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

type ContentItem = {
  heading: string;
  content: string; // Using string to allow HTML content as a string
};
type ContentArray = ContentItem[];

const content1: ContentArray = [
  {
    heading: "Warum sollten Sie VPNs.Guide vertrauen?",
    content: `
            <p>Wir sind ein unabhängiges Unternehmen und kaufen jedes VPN persönlich, um sicherzustellen, dass unsere Bewertungen unvoreingenommen und vertrauenswürdig sind. Unsere Tests konzentrieren sich auf die folgenden wichtigen Kriterien:</p>
            <ul style="list-style-type: inherit; padding-left: 25px;">
            <li>Datenschutz & Protokollierungsrichtlinien</li>
            <li>Sicherheits & Verschlüsselungsstandards</li>
            <li>Verbindungsgeschwindigkeit</li>
            <li>Serverstandorte</li>
            <li>Zugang & Entsperrfähigkeit</li>
            <li>Gerätekompatibilität</li>
<li>Benutzerfreundlichkeit</li>
<li>Qualität des Kundensupports</li>
            </ul>
            <p>Unser Ziel ist es, <span style="font-weight: 500;">klare und ehrliche Empfehlungen</span> zu geben, damit Sie die beste Entscheidung treffen können.</p>
          `,
  },
  {
    heading: "Was ist ein VPN und wie funktioniert es?",
    content: `
            <p>Ein VPN (Virtuelles Privates Netzwerk) ist besonders nützlich bei der Nutzung öffentlicher WLAN-Hotspots, z. B. in Cafés, Hotels oder Flughäfen. <span style="font-weight: 500;">Es verschlüsselt alle Daten, die von und an Ihr Gerät (Laptop, Smartphone oder Tablet) gesendet werden, schützt Ihre Privatsphäre und sichert Ihren Datenverkehr.</span></p>

<p></p>Alles, was Sie benötigen, ist eine VPN-App, die zu einem günstigen Abonnementpreis verfügbar ist. Gute VPN-Lösungen funktionieren auf verschiedenen Geräten und bieten Schutz, egal wo Sie sind.</p>
          `,
  },
  {
    heading: "Wie schützt ein VPN meine Online-Aktivitäten?",
    content: `
            <p>Ein VPN (Virtuelles Privates Netzwerk) schützt Ihre Online-Aktivitäten, indem es Ihre Internetverbindung verschlüsselt. <span style="font-weight: 500;">Es verbirgt Ihre IP-Adresse und macht Ihre Online-Aktivitäten für Hacker, Internetanbieter oder andere, die Sie verfolgen möchten, unsichtbar.</span></p>

<p></p>Wenn Sie sich mit einem VPN verbinden, werden alle Ihre Daten durch einen sicheren, verschlüsselten Tunnel geleitet. Dies schützt sensible Informationen wie Passwörter, Bankdaten und persönliche Daten, selbst in öffentlichen WLAN-Netzwerken.</p>

<p></p>Für die besten Ergebnisse empfehlen wir vertrauenswürdige VPNs wie  <a href="https://track.vpns.guide/base2.php?cloid=1002&token4=faq&token5=DE">CyberGhost</a> und  <a href="https://track.vpns.guide/base2.php?cloid=1007&token4=faq&token5=DE">Total VPN</a>. <span style="font-weight: 500;">Sie bieten starke Sicherheitsfunktionen, schnelle Verbindungen und zuverlässigen Datenschutz für all Ihre Online-Aktivitäten.</span></p>
          `,
  },
  {
    heading: "Kann ich ein VPN auf mehreren Geräten verwenden?",
    content: `
            <p>Ja, die meisten VPNs ermöglichen es, den Dienst auf <span style="font-weight: 500;">mehreren Geräten gleichzeitig</span> zu nutzen. Das bedeutet, Sie können Ihren <span style="font-weight: 500;">Laptop</span>, Ihr <span style="font-weight: 500;">Smartphone</span>, Ihr <span style="font-weight: 500;">Tablet</span> und sogar Ihren <span style="font-weight: 500;">Smart-TV</span> oder Ihre <span style="font-weight: 500;">Spielekonsole</span> mit einem einzigen <span style="font-weight: 500;">Abonnement</span> schützen.</p>

<p>Moderne VPNs sind mit verschiedenen Betriebssystemen wie <span style="font-weight: 500;">Windows, macOS, Android</span> und <span style="font-weight: 500;">iOS</span> kompatibel. Viele Anbieter bieten auch Apps für Router an, sodass alle Geräte in Ihrem Heimnetzwerk geschützt sind.</p>

<p>Egal ob zu Hause oder unterwegs – <span style="font-weight: 500;">Ihre Online-Privatsphäre und -Sicherheit bleiben auf all Ihren Geräten gewährleistet.</span></p>
          `,
  },
  {
    heading: "Ist ein kostenloses VPN in Deutschland sicher?",
    content: `
            <p><span style="font-weight: 500;">Kostenlose VPNs mögen eine attraktive Option erscheinen, aber sie haben oft Schwächen in wichtigen Bereichen wie Sicherheit, Leistung und Zuverlässigkeit.</span> Viele kostenlose VPN-Anbieter nutzen veraltete Protokolle oder bieten nur begrenzte Serveroptionen, wodurch Ihre Daten potenziellen Risiken ausgesetzt sind. Einige protokollieren sogar Ihre Aktivitäten oder verkaufen Ihre Daten an Dritte, was Ihre Privatsphäre gefährdet.</p>

<p>Im Gegensatz dazu legen <span style="font-weight: 500;">kostenpflichtige VPN-Dienste großen Wert auf Ihre Sicherheit und Privatsphäre. Sie verwenden fortschrittliche Verschlüsselungsmethoden und eine Vielzahl sicherer Protokolle, um Ihre Daten bestens zu schützen.</span> Kostenpflichtige VPNs bieten auch schnellere, stabilere Verbindungen mit höherer Bandbreite, was für ein reibungsloses Surferlebnis sorgt, auch in öffentlichen WLAN-Netzen.</p>

<p>Zudem bieten kostenpflichtige VPN-Dienste professionellen Kundensupport, der Ihnen bei Bedarf jederzeit zur Seite steht. Dies ist ein deutlicher Vorteil gegenüber kostenlosen Anbietern, bei denen der Support oft begrenzt oder gar nicht vorhanden ist.</p>

<p>Zusammengefasst bieten kostenpflichtige VPN-Dienste im Vergleich zu kostenlosen Alternativen eine deutlich bessere Sicherheit, Leistung und Kundenbetreuung und sind somit die sicherere und zuverlässigere Wahl.</p>

<p><span style="font-weight: 500;">Kostenpflichtige Dienste bieten mehrere Vorteile gegenüber kostenlosen Alternativen. Die wichtigsten Vorteile sind:</span></p>
   <ul style="list-style-type: inherit; padding-left: 25px;">

<li>Höhere Sicherheit mit fortschrittlicher Verschlüsselung</li>
<li>Mehrere VPN-Protokolle zur Auswahl</li>
<li>Höhere Bandbreite für schnellere und effizientere Verbindungen</li>
<li>Professioneller Kunden- und IT-Support, häufig rund um die Uhr</li>
</ul>

  <p>Wenn Sie das beste Preis-Leistungs-Verhältnis suchen, ist 
    <a href="https://track.vpns.guide/base2.php?cloid=1007&token4=faq&token5=DE">Total VPN</a>, eine ausgezeichnete Wahl. Es bietet wettbewerbsfähige Preise, robuste Sicherheitsfunktionen und Zugriff auf tausende Server weltweit. Schauen Sie sich die <a href="https://track.vpns.guide/base2.php?cloid=1002&token4=faq&token5=DE">Total VPN-Angebote</a> an für erschwinglichen, hochwertigen Schutz.</p>
            `,
  },
  ];

const FAQ = () => {
  return (
    <div className="flex-col laptopl:px-96 px-5 my-5" id="faq">
      <div className="text-4xl font-semibold pb-10">Frequently Asked Question</div>
        <Accordion variant="splitted">
          {content1.map((itm: ContentItem, idx: number) => (
            <AccordionItem
              key={idx}
              aria-label={itm.heading}
              title={itm.heading}
              className="font-bold"
            >
              <div
                dangerouslySetInnerHTML={{ __html: itm.content }}
                className="customAccr bg-gray-100 p-3 rounded-lg font-normal"
                style={{
                  fontSize: "16px", // Increase text size
                  lineHeight: "1.5", // Adjust line spacing
                }}
              />
            </AccordionItem>
          ))}
        </Accordion>
    </div>
  );
};

export default FAQ;
