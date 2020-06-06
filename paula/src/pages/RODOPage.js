import React, { Component } from "react"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import "../styles/pages/RODOPage.css"


class AboutPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="RODOPage">
                    <Menu active="RODOPage" before={this.props.location.before} />
                    <div style={{ borderTop: "solid 3vh #FCC700" }}>
                        <div className="RODOPage__content">
                            <div className="RODOPage__title">
                                <h1>RODO</h1>
                            </div>
                            <div className="RODOPage__text">
                                <h3>Drogi użytkowniku,</h3>
                                <p>W związku z zmianą przepisów dotyczących ochrony danych osobowych, określaną popularnie jako RODO, informujemy, iż decydując się na kontakt z nami wyrażasz zgodę na przetwarzanie Twoich danych osobowych przez naszą firmę handlowo obsługową PAULA Paweł Zieliński Wojciech Podyma S.C, z siedzibą w Proszowska 7, 32-090 Słomniki, Regon: 366027722, NIP: 682-177-38-87. Głównym celem nowych przepisów jest zapewnienie większego bezpieczeństwa i większej ochrony przy przetwarzaniu Twoich danych osobowych. Wiadomość ta jest spełnieniem obowiązku informacyjnego wynikającego z RODO. </p>
                                <p>W trosce o Twoje dane osobowe informujemy, że administratorem Twoich danych osobowych jest firma handlowo obsługowa PAULA Paweł Zieliński Wojciech Podyma S.C, z siedzibą w proszowska 7, 32-090 Słomniki, Regon: 366027722, NIP: 682-177-38-87 (dalej PAULA).</p>
                                <p>Pamiętaj, że przysługuje Ci prawo do wglądu do swoich danych, prawo do cofnięcia zgody na ich przetwarzanie, prawo do żądania ich sprostowania, poprawiania, usunięcia lub ograniczenia przetwarzania,  a także do przenoszenia danych, wyrażenia sprzeciwu i wniesienia skargi do organu nadzorczego. Uprawnienie to możesz zrealizować kontaktując się z nami pisemnie na adres: Firma handlowo obsługowa PAULA Paweł Zieliński Wojciech Podyma, Proszowska 7, 32-090 Słomniki lub poprzez adres email: paulaslomniki@o2.pl, paulamiechow@onet.pl</p>
                                <p>Twoje dane będą przetwarzane na podstawie udzielonej przez Ciebie zgody w celu odpowiedzi na zapytania informacyjne i ofertowe, wykonywania czynności niezbędnych do realizacji zawartych umów (umowy sprzedaży, zakupu, najmu, transportu), oraz realizacji obowiązków wynikających z przepisów prawa. Ponadto Twoje dane osobowe mogą być przetwarzane w celach: ustalenia, dochodzenia lub obrony przed ewentualnymi roszczeniami związanymi z realizacją zawartych umów.</p>
                                <p>Twoje dane przechowywane będą do momentu wycofania przez Ciebie zgody,  a po takim wycofaniu, przez okres przedawnienia roszczeń przysługujących administratorowi danych i w stosunku do niego, lub do momentu wygaśniecia obowiązków wynikających z przepisów prawa. Wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem.</p>
                                <p>Twoje dane mogą być ujawnione podmiotom zajmującym się obsługą informatyczną i księgową administratora danych, którzy zapewniają bezpieczeństwo danych osobowych i pełnią rolę odbiorców w rozumieniu prawa.</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default AboutPage