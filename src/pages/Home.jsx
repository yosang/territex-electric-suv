import { Button, Container, Hero, ProductCard } from "@yosang/react-ui";

import './styles.css'

export default function App() {
    const isMobileScreen = window.innerWidth < 600;

    return (
        <>
            <Hero style={{ minHeight: isMobileScreen ? "1000px" : "600px", overflow: "hidden" }} type="video" src="https://i.imgur.com/Ap6NV5k.mp4">
                <Container style={{ textAlign: "center", gap: 0, backgroundColor: "transparent" }}>
                    <h1>TERRI</h1>
                    <h2>Norges mest prisvennlige elektriske SUV</h2>
                    <h2>Fra 244 900 kr</h2>

                </Container>

                <Container direction="row" style={{ justifyContent: "center", backgroundColor: "transparent" }}>
                    <Button style={{ backgroundColor: "black", width: "12rem", display: "flex", justifyContent: "center", height: "3rem", fontWeight: "550" }} rippleEffect={false}>Bygg din egen</Button>
                    <Button variant="tertiary" style={{ width: "12rem", display: "flex", justifyContent: "center", height: "3rem", fontWeight: "500" }} rippleEffect={false}>Les mer</Button>
                </Container>
                <Container className="hero-margin" direction="row" >
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>340 km</h1>
                        <h3>Rekkevidde</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>100% km</h1>
                        <h3>Elektrisk drivlinje</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>4.3 m</h1>
                        <h3>Lengde</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>500 l</h1>
                        <h3>Bagasjerom</h3>
                    </Container>
                    <Container style={{ backgroundColor: "transparent" }}>
                        <h1>8 år</h1>
                        <h3>Eller 200 000 km garanti</h3>
                    </Container>
                </Container>
            </Hero>
            <Container centered={true} style={{ textAlign: "center", margin: "5% auto" }}>
                <h1>Mer plass. Mer frihet</h1>
                <p><strong>TERRI</strong> er en helelektrisk SUV som kombinerer smart design, praktiske løsninger og god rekkevidde, spesielt tilpasset norske veier og klima.</p>
                <br />
                <p><strong>Fra kr 244 900,-</strong> får du en romslig og velutstyrt elbil med moderne teknologi, høy komfort og solid byggekvalitet som standard.</p>
            </Container>
            <Hero type="video" src="https://i.imgur.com/OKfruqh.mp4" />
            <Container direction="row" style={{ margin: "2rem 0" }}>
                <img className="tailgate-img" src="https://i.imgur.com/aE2CEAp.jpeg" />
                <Container>
                    <h1>Split Tailgate – praktisk i hverdagen</h1>
                    <p>
                        <strong>TERRIs</strong> todelte bakluke gir deg helt nye muligheter.
                    </p>

                    <p>
                        <strong>Den øvre delen</strong> kan åpnes separat – perfekt når du har lav garasje eller trang parkering.
                    </p>
                    <p>
                        <strong>Den nedre delen</strong> tåler opptil 150 kg og fungerer som sitteplass eller ekstra bord når du er ute på tur.
                    </p>

                    <p>
                        Baksetene kan legges flatt og gir opptil 2 meter laste- eller liggeplass – ideelt for lange gjenstander, campingtur eller spontane eventyr.
                    </p>
                </Container>

            </Container>
            <Container style={{ margin: "1rem auto" }} centered={true} direction="row">
                <ProductCard image="https://i.imgur.com/3yOt08L.jpeg" style={{ width: "300px" }} title="Romslig bagasjerom" description="
                    Med 500 liter bagasjeplass og flatt gulv får du enkelt plass til barnevogn, kofferter, handleposer eller sportsutstyr.
                " />
                <ProductCard image="https://i.imgur.com/9D3wIfg.jpeg" style={{ width: "300px" }} title="Komfort og design" description="
                    TERRI kombinerer praktiske løsninger med den komforten og det stilrene designet du forventer fra en bil i en helt annen prisklasse.
                " />
                <ProductCard image="https://i.imgur.com/kq4QcC2.jpeg" style={{ width: "300px" }} title="Rask lading og solid rekkevidde" description="
                    Bygget for norske forhold med varme, effektiv batteriteknologi og rask hurtiglading – så du får god rekkevidde selv på kalde vinterdager
                " />
            </Container>
            <Container direction="row" style={{ margin: "2rem 0" }}>
                <img className="colors-img" src="https://i.imgur.com/fcURsJN.jpeg" />
                <Container>
                    <h1>Bredt utvalg av farger</h1>
                    <p>Velg mellom flere stilrene farger som passer din personlighet og livsstil.</p>
                    <Button variant="secondary" style={{ backgroundColor: "black", width: "12rem", display: "flex", justifyContent: "center", height: "3rem", fontWeight: "550" }} rippleEffect={false} >Få tilbud</Button>
                </Container>

            </Container>
        </>
    )
}