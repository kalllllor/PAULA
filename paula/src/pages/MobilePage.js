import React from "react";
import "../styles/pages/mobilePage.css";
import "../styles/components/menu.css";
import "../styles/pages/mainPage.css";
import logo from "../img/logo.png";
import { aboutData } from "../data/aboutData";
import { motion } from "framer-motion";
import AboutColumn from "../components/AboutColumn";

class MobilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      container: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
        },
      },
      arrowAnimation: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
        },
      },
      position: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    if (window.pageYOffset / document.documentElement.clientHeight > 1.5) {
      this.setState({
        position: true,
      });
    } else {
      this.setState({
        position: false,
      });
    }
  };

  toggleMenu = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { isVisible, container, arrowAnimation, position } = this.state;
    return (
      <div className="MobilePage">
        {position && (
          <motion.div
            variants={arrowAnimation}
            initial="hidden"
            animate="visible"
            className={position ? "ScrollTop Scrollvisible" : "ScrollTop"}
            onClick={this.scrollTop}
          />
        )}
        <div className="Menu">
          <div className="Menu__mobile">
            <div className="Menu__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="Menu__toggler">
              <div
                className={
                  isVisible ? "Menu__button button__active" : "Menu__button"
                }
                onClick={this.toggleMenu}
              >
                <div className="Button__burger" />
              </div>
            </div>
          </div>
          <div
            className={`Menu__links ${isVisible ? "Menu__links--visible" : ""}`}
          >
            <a
              className={
                "link" +
                (this.props.active === "mainPage" ? " animation__up" : "") +
                (this.props.before === "mainPage" ? " animation__down" : "")
              }
              href="#main"
            >
              STRONA GŁÓWNA
            </a>
            <a
              className={
                "link" +
                (this.props.active === "mainPage" ? " animation__up" : "") +
                (this.props.before === "mainPage" ? " animation__down" : "")
              }
              href="#about"
            >
              O NAS
            </a>
            <a
              className={
                "link" +
                (this.props.active === "mainPage" ? " animation__up" : "") +
                (this.props.before === "mainPage" ? " animation__down" : "")
              }
              href="#map"
            >
              MAPY
            </a>
            <a
              className={
                "link" +
                (this.props.active === "mainPage" ? " animation__up" : "") +
                (this.props.before === "mainPage" ? " animation__down" : "")
              }
              href="#contact"
            >
              KONTAKT
            </a>
          </div>
        </div>
        <div className="Menu__padding" id="main" />
        <div className="mobilePage__Main">
          <motion.div
            className="mobilePage__first"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <h1>PAULA</h1>
            <h2>CENTRUM MATERIAŁÓW BUDOWLANYCH</h2>
          </motion.div>
          <div className="Mobile__title">
            <h1>KIM JESTEŚMY</h1>
          </div>
          <div className="main__content">
            <p>
              Nasza hurtownia PAULA powstała ponad 20 lat temu, a dokładniej w
              1998 w Słomnikach. Z roku na rok nasza oferta uległa rozbudowie,
              tak aby w maksymalnym stopniu dostosować ją do potrzeb naszych
              klientów. Z czasem zdobywaliśmy zaufanie coraz większej liczby
              klientów (ponad 20 tysięcy), a dziś dostarczamy materiały do
              odbiorców w całej Małopolsce i nie tylko.W 2010 roku powstał nasz
              drugi oddział w Miechowie. W tej chwili proponujemy gamę
              materiałów budowlanych, od materiałów fundamnetowych, poprzez
              ceramikę ścienną, pokrycia dachowe, aż po materiały wykończeniowe.
              W Słomnikach mamy również hurtownię instalacyjną PAULA II WOD-KAN
              C.O. GAZ, która również postała w 1998 roku i oferuje niezbędne
              materiały potrzebne do budowy infrastruktury podziemnej w zakresie
              sieci wodno-kanalizacyjnych, gazowych oraz pełen asortyment do
              wewnętrznych instalacji.Reasumując, nasze hurtownie zajmują się
              kompleksowym zaopatrzeniem materiałowym firm wykonawczych i
              klientów indywidualnych.
            </p>
          </div>
        </div>
        <div className="mobilePage__About" id="about">
          <div className="Mobile__title">
            <h1>CO NAS CECHUJE</h1>
          </div>
          <div className="mainPage__About">
            {aboutData.map((item, id) => {
              return <AboutColumn data={item} key={id} />;
            })}
          </div>
        </div>
        <div className="mobilePage__Map" id="map">
          <div className="Mobile__title">
            <h1>GDZIE NAS ZNALEŹĆ</h1>
          </div>
          <div className="map__contener">
            <h2>ODDZIAŁ SŁOMNIKI</h2>
            <iframe
              className="Mobile__map"
              title="oddzialSlomniki"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.7896139065024!2d20.08388305161039!3d50.23983521029808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165294cab2fbf9%3A0x2adcec16e6812c57!2sF.H.U.%20%22PAULA%22%20Pawe%C5%82%20Zieli%C5%84ski-Wojciech%20Podyma%20s%20c!5e0!3m2!1spl!2spl!4v1591528360106!5m2!1spl!2spl"
            />
          </div>
          <div className="map__contener">
            <h2>ODDZIAŁ MIECHÓW</h2>
            <iframe
              className="Mobile__map"
              title="oddzialMiechow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.5367980332494!2d20.008533451613044!3d50.35654430190654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717abd2d833cde9%3A0x5a78f744149fd93c!2sF.H.U.%20%22Paula%22%20Pawe%C5%82%20Zieli%C5%84ski%20-%20Wojciech%20Podyma!5e0!3m2!1spl!2spl!4v1591528492798!5m2!1spl!2spl"
            />
          </div>
        </div>
        <div className="mobilePage__RODO" id="RODO">
          <div className="Mobile__title">
            <h1>RODO</h1>
          </div>
          <div className="main__content">
            <p>
              W związku z zmianą przepisów dotyczących ochrony danych osobowych,
              określaną popularnie jako RODO, informujemy, iż decydując się na
              kontakt z nami wyrażasz zgodę na przetwarzanie Twoich danych
              osobowych przez naszą firmę handlowo usługową PAULA Paweł
              Zieliński Wojciech Podyma S.C, z siedzibą w Proszowska 7, 32-090
              Słomniki, Regon: 366027722, NIP: 682-177-38-87. Głównym celem
              nowych przepisów jest zapewnienie większego bezpieczeństwa i
              większej ochrony przy przetwarzaniu Twoich danych osobowych.
              Wiadomość ta jest spełnieniem obowiązku informacyjnego
              wynikającego z RODO. W trosce o Twoje dane osobowe informujemy, że
              administratorem Twoich danych osobowych jest firma handlowo
              usługowa PAULA Paweł Zieliński Wojciech Podyma S.C, z siedzibą w
              proszowska 7, 32-090 Słomniki, Regon: 366027722, NIP:
              682-177-38-87 (dalej PAULA). Pamiętaj, że przysługuje Ci prawo do
              wglądu do swoich danych, prawo do cofnięcia zgody na ich
              przetwarzanie, prawo do żądania ich sprostowania, poprawiania,
              usunięcia lub ograniczenia przetwarzania, a także do przenoszenia
              danych, wyrażenia sprzeciwu i wniesienia skargi do organu
              nadzorczego. Uprawnienie to możesz zrealizować kontaktując się z
              nami pisemnie na adres: Firma handlowo usługowa PAULA Paweł
              Zieliński Wojciech Podyma, Proszowska 7, 32-090 Słomniki lub
              poprzez adres email: paulaslomniki@o2.pl, paulamiechow@onet.pl
              Twoje dane będą przetwarzane na podstawie udzielonej przez Ciebie
              zgody w celu odpowiedzi na zapytania informacyjne i ofertowe,
              wykonywania czynności niezbędnych do realizacji zawartych umów
              (umowy sprzedaży, zakupu, najmu, transportu), oraz realizacji
              obowiązków wynikających z przepisów prawa. Ponadto Twoje dane
              osobowe mogą być przetwarzane w celach: ustalenia, dochodzenia lub
              obrony przed ewentualnymi roszczeniami związanymi z realizacją
              zawartych umów. Twoje dane przechowywane będą do momentu wycofania
              przez Ciebie zgody, a po takim wycofaniu, przez okres
              przedawnienia roszczeń przysługujących administratorowi danych i w
              stosunku do niego, lub do momentu wygaśniecia obowiązków
              wynikających z przepisów prawa. Wycofanie zgody nie ma wpływu na
              zgodność z prawem przetwarzania, którego dokonano na podstawie
              zgody przed jej wycofaniem. Twoje dane mogą być ujawnione
              podmiotom zajmującym się obsługą informatyczną i księgową
              administratora danych, którzy zapewniają bezpieczeństwo danych
              osobowych i pełnią rolę odbiorców w rozumieniu prawa.
            </p>
          </div>
        </div>
        <div className="mobilePage__Contact" id="contact">
          <div className="Mobile__title Mobile__contactTitle">
            <h1>KONTAKT</h1>
            <div className="contact__content">
              <div className="content__pause" />
              <h2>ODDZIAŁ SŁOMNIKI</h2>
              <h3>ul. Proszowska 23</h3>
              <p>pn-pt 7-18</p>
              <p>sobota 7-14</p>
              <a href="tel:123883062">
                <p>tel. 12 388 30 62</p>
              </a>
              <a href="tel:123880340">
                <p>tel. 12 388 03 40</p>
              </a>
              <div className="content__pause" />
              <h2>ODDZIAŁ MIECHÓW</h2>
              <p>ul. Sienkiewicza 53</p>
              <p>pn-pt 7-17</p>
              <p>sobota 7-14</p>
              <a href="tel:413840400">
                <p>tel. 41 38 40 400</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobilePage;
