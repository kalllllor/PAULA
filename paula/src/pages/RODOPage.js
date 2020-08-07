import React from "react";
import Menu from "../components/Menu";
import "../styles/pages/RODOPage.css";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="RODOPage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d8d8d8"
              fill-opacity="1"
              d="M0,288L24,266.7C48,245,96,203,144,208C192,213,240,267,288,293.3C336,320,384,320,432,288C480,256,528,192,576,144C624,96,672,64,720,85.3C768,107,816,181,864,197.3C912,213,960,171,1008,165.3C1056,160,1104,192,1152,208C1200,224,1248,224,1296,202.7C1344,181,1392,139,1416,117.3L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg>
          <Menu active="RODOPage" before={this.props.location.before} />
          <div style={{ borderTop: "solid 1.5rem #FCC700" }}>
            <div className="RODOPage__content">
              <div className="RODOPage__title">
                <h1>RODO</h1>
              </div>
              <div className="RODOPage__text">
                <h3>Drogi użytkowniku,</h3>
                <p>
                  W związku z zmianą przepisów dotyczących ochrony danych
                  osobowych, określaną popularnie jako RODO, informujemy, iż
                  decydując się na kontakt z nami wyrażasz zgodę na
                  przetwarzanie Twoich danych osobowych przez naszą firmę
                  handlowo usługową PAULA Paweł Zieliński Wojciech Podyma S.C, z
                  siedzibą w Proszowska 7, 32-090 Słomniki, Regon: 366027722,
                  NIP: 682-177-38-87. Głównym celem nowych przepisów jest
                  zapewnienie większego bezpieczeństwa i większej ochrony przy
                  przetwarzaniu Twoich danych osobowych. Wiadomość ta jest
                  spełnieniem obowiązku informacyjnego wynikającego z RODO.{" "}
                </p>
                <p>
                  W trosce o Twoje dane osobowe informujemy, że administratorem
                  Twoich danych osobowych jest firma handlowo usługowa PAULA
                  Paweł Zieliński Wojciech Podyma S.C, z siedzibą w proszowska
                  7, 32-090 Słomniki, Regon: 366027722, NIP: 682-177-38-87
                  (dalej PAULA).
                </p>
                <p>
                  Pamiętaj, że przysługuje Ci prawo do wglądu do swoich danych,
                  prawo do cofnięcia zgody na ich przetwarzanie, prawo do
                  żądania ich sprostowania, poprawiania, usunięcia lub
                  ograniczenia przetwarzania, a także do przenoszenia danych,
                  wyrażenia sprzeciwu i wniesienia skargi do organu nadzorczego.
                  Uprawnienie to możesz zrealizować kontaktując się z nami
                  pisemnie na adres: Firma handlowo usługowa PAULA Paweł
                  Zieliński Wojciech Podyma, Proszowska 7, 32-090 Słomniki lub
                  poprzez adres email: paulaslomniki@o2.pl, paulamiechow@onet.pl
                </p>
                <p>
                  Twoje dane będą przetwarzane na podstawie udzielonej przez
                  Ciebie zgody w celu odpowiedzi na zapytania informacyjne i
                  ofertowe, wykonywania czynności niezbędnych do realizacji
                  zawartych umów (umowy sprzedaży, zakupu, najmu, transportu),
                  oraz realizacji obowiązków wynikających z przepisów prawa.
                  Ponadto Twoje dane osobowe mogą być przetwarzane w celach:
                  ustalenia, dochodzenia lub obrony przed ewentualnymi
                  roszczeniami związanymi z realizacją zawartych umów.
                </p>
                <p>
                  Twoje dane przechowywane będą do momentu wycofania przez
                  Ciebie zgody, a po takim wycofaniu, przez okres przedawnienia
                  roszczeń przysługujących administratorowi danych i w stosunku
                  do niego, lub do momentu wygaśniecia obowiązków wynikających z
                  przepisów prawa. Wycofanie zgody nie ma wpływu na zgodność z
                  prawem przetwarzania, którego dokonano na podstawie zgody
                  przed jej wycofaniem.
                </p>
                <p>
                  Twoje dane mogą być ujawnione podmiotom zajmującym się obsługą
                  informatyczną i księgową administratora danych, którzy
                  zapewniają bezpieczeństwo danych osobowych i pełnią rolę
                  odbiorców w rozumieniu prawa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
