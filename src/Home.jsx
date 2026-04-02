import { Button, Container, Hero, ProductCard } from "@yosang/react-ui";
import PageFooter from './PageFooter'

export default function App() {
    return (
        <>

            <Hero style={{ minHeight: "600px" }} type="video" src="https://i.imgur.com/Ap6NV5k.mp4">
                <Container style={{ gap: 0, backgroundColor: "transparent" }}>
                    <h1>TERRI</h1>
                    <h2>Norges rimeligste SUV</h2>
                    <h2>Fra 244 900 kr</h2>

                </Container>

                <Container direction="row" style={{ justifyContent: "center", backgroundColor: "transparent" }}>
                    <Button variant="secondary">Bygg din TERRI</Button>
                    <Button variant="tertiary">Få tilbud</Button>
                </Container>
                <Container direction="row" style={{ marginTop: "200px", backgroundColor: "transparent" }}>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>340 km</h1>
                        <h3>Rekkevidde</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>100% km</h1>
                        <h3>Elektrisk</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>4.3 m</h1>
                        <h3>Lengde</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>500 l</h1>
                        <h3>Bagasjeroms-volum</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>8 år</h1>
                        <h3>Eller 200 000 km garanti</h3>
                    </Container>
                </Container>
            </Hero>
            <Container centered={true} style={{ textAlign: "center", width: "80vh", margin: "5% auto" }}>
                <h1>Mer plass. Mer frihet</h1>
                <p><strong>TERRI</strong> kombinerer moderne design, smart funksjonalitet og solid rekkevidde i en helelektrisk SUV utviklet for norske forhold.</p>
                <br />
                <p><strong>Fra kr 244 900,-</strong> får du en romslig og godt utstyrt elektrisk SUV med moderne teknologi og høy komfort som standard.</p>
            </Container>
            <Hero type="video" src="https://i.imgur.com/OKfruqh.mp4" />
            <Container direction="row" style={{ margin: "2rem 0" }}>
                <img style={{ borderRadius: "1rem", width: "600px" }} src="https://i.imgur.com/aE2CEAp.jpeg" />
                <Container>
                    <h1>Split Tailgate – fleksibilitet i hverdagen</h1>
                    <p>
                        <strong>TERRIs</strong> todelte bakluke gir deg helt nye bruksmuligheter.
                    </p>

                    <p>
                        <strong>Den øvre delen</strong> kan åpnes separat – praktisk i lave garasjer og trange parkeringshus. <strong>Den nedre delen</strong> tåler opptil 150 kg og kan brukes som sitteplass eller praktisk bord.
                    </p>

                    <p>
                        Baksetene kan legges flatt og gir opptil 2000 mm laste- eller liggelengde – perfekt for lange gjenstander eller en spontan overnatting.
                    </p>
                </Container>

            </Container>
            <Container style={{ margin: "1rem auto" }} centered={true} direction="row">
                <ProductCard image="https://i.imgur.com/3yOt08L.jpeg" style={{ width: "300px" }} title="Romslig bagasjerom" description="
                    Med 500 liter bagasjeromsplass og flatt gulv får du enkelt plass til barnevogn, kofferter eller handleposer.
                " />
                <ProductCard image="https://i.imgur.com/9D3wIfg.jpeg" style={{ width: "300px" }} title="Komfort og design" description="
                    TERRI kombinerer praktiske løsninger med komfort du forventer i en langt dyrere bil. Moderne, rent design utvendig og gjennomført interiør innvendig.
                " />
                <ProductCard image="https://i.imgur.com/kq4QcC2.jpeg" style={{ width: "300px" }} title="Rask lading og solid rekkevidde" description="
                    TERRI er bygget for norske forhold. Med effektiv batteriteknologi, varmepumpe og rask hurtiglading får du stabil rekkevidde – også når temperaturen faller, og for kortere stopp underveis.
                " />
            </Container>
            <Container direction="row" style={{ margin: "2rem 0" }}>
                <img style={{ borderRadius: "1rem", width: "800px" }} src="https://i.imgur.com/fcURsJN.jpeg" />
                <Container>
                    <h1>Bred spekter av farger</h1>
                    <Button variant="secondary">Få tilbud</Button>
                </Container>

            </Container>
            <PageFooter />
        </>
    )
}