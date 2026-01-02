import React, {useState} from "react";
import {Container, Row, Col, Card, Badge, ListGroup, Image, Modal} from "react-bootstrap";
import majalojo from "../src/assets/MajaLojo.jpg";
import { FaReact } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { SiDotnet } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { PiFileCSharpLight } from "react-icons/pi";
import { SiTypescript } from "react-icons/si";
import database from "../src/assets/databases.jpg";
import frontend from "./assets/frontend.jpg";
import javascript from "./assets/javascript.jpg";
import zahvalnica from "./assets/zahvalnica.jpg";



interface Projekat {
  naziv: string;
  opis: string;
  godina: string;
  link: string;
  tag: string[];
}

interface Skolovanje {
  naziv: string;
  fakultet: string;
  smjer: string;
  period: string;
}

interface Certifikati{
  naziv: string;
  godina: string;
  slika: string;
}

const App: React.FC = () => {
  const imePrezime: string = "Maja Lojo";
  const zanimanje: string = "Junior Web & Mobile Developer";

  const skolovanje: Skolovanje = {
    naziv: "Univerzitet u Sarajevu",
    fakultet: "Ekonomski fakultet Sarajevo",
    smjer: "Menadžment i informacione tehnologije",
    period: "2021. - 2023.",
  };

  const projekti: Projekat[] = [
    {
      naziv: "BUNJO d.o.o. Sarajevo",
      opis: "Web stranica i CMS dashboard za upravljanje sadržajem.",
      godina: "2023. -",
      link: "https://bunjogrupacija.ba",
      tag: ["React ", ".NET ", "MSSQL ", "MySQL ", "Azure Blob Storage ", "Azure Web Job ", "SignalR"]
    },
    {
      naziv: "BUNJO d.o.o. Sarajevo",
      opis: "Zvanična mobilna aplikacija dostupna na Play Store-u (uskoro i na App Store).",
      godina: "2024. -",
      link: "https://play.google.com/store/apps/details?id=com.majalojo.bunjogrupacijapk",
      tag: ["React Native ", "Expo Notifications ", "Expo-Mail ", "WebView ", "SignalR ", "SecureStorage ", "AsyncStorage"]
    },
  ];

  const certifikatiZahvalnice:Certifikati[] = [
    {
      naziv:"Zahvalnica dekanice za učestvovanje u uvođenju novog rješenja za evidenciju prisustva studenata i profesora na EFSA",
      godina: "2023.",
      slika: zahvalnica
    },
    {
      naziv:"Uvod u baze podataka",
      godina: "2024.",
      slika: database
    },
    {
      naziv:"Uvod u  Front-End razvoj",
      godina: "2024.",
      slika: frontend
    },
    {
      naziv:"Programiranje sa JavaScriptom",
      godina: "2024.",
      slika: javascript
    },


  ]

  const darkCardStyle = {
    backgroundColor: "#FFFFF",
    border: "1px solid darkblue",
    color: "black",
    borderRadius: "20px",
    height: "100%"
  };

  //Modal

  const[selectedSlika, setSelectedSlika] = useState<Certifikati|null>(null);

  const uvecanaSlika = (cert:Certifikati) => setSelectedSlika(cert);
  const zatvoriModal = () => setSelectedSlika(null);

  return (
    <div style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }} className="py-4 py-md-5 text-white">
      <Container>
        <Row className="g-5">
          <Col lg={9}>
            <Card style={darkCardStyle} className="p-4 shadow">
              <Row className="align-items-center">
                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                  <Card.Img
                    src={majalojo}
                    className="rounded-4 shadow-lg border border-secondary"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col xs={12} md={8} className="text-center text-md-start">
                  <Card.Body className="p-0">
                    <h6 className="text-primary text-uppercase fw-bold ls-widest mb-2">
                      {zanimanje}
                    </h6>
                    <h1 className="display-5 fw-bold mb-3">{imePrezime}</h1>
                    <p className="text-secondary fst-italic">
                      Programiranje nije samo pisanje koda već dio životnog
                      ciklusa razvoja softvera
                    </p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={3}>
            <Card style={darkCardStyle} className="p-2 text-center shadow">
              <Card.Title className="fw-bold mb-4 text-primary text-uppercase">
                Tech stack
              </Card.Title>
              <Row className="g-1 align-items-center justify-content-center">
                <Col xs={3} md={6} lg={6}>
                  <FaReact size={40} />
                </Col>
                <Col xs={3} md={6} lg={6}>
                  <SiDotnet size={50} />
                </Col>
                <Col xs={3} md={6} lg={6}>
                  <VscAzure size={40} />
                </Col>
                <Col xs={3} md={6} lg={6}>
                  <DiMsqlServer size={50} />
                </Col>
                 <Col xs={3} md={6} lg={6}>
                  <FaFigma size={40} />
                </Col>
                 <Col xs={3} md={6} lg={6}>
                  <DiMysql size={50} />
                </Col>
                 <Col xs={3} md={6} lg={6}>
                  <DiBootstrap size={50} />
                </Col>
                 <Col xs={3} md={6} lg={6}>
                  <DiGithubBadge size={50} />
                </Col>
                <Col xs={3} md={6} lg={6}>
                  <SiTypescript size={35} />
                </Col>
                <Col xs={3} md={6} lg={6}>
                  <PiFileCSharpLight size={50} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={5}>
            <Card style={darkCardStyle} className="p-4 shadow">
              <Card.Title className="fw-bold mb-4 d-flex align-items-center text-primary">
                Školovanje i angažmani
              </Card.Title>
              <Card.Body className="p-0">
                <h5 className="fw-bold mb-1">
                  {skolovanje.naziv}: {skolovanje.fakultet}
                </h5>
                <p className="text-secondary small mb-3">{skolovanje.smjer}</p>

                <ListGroup variant="flush" className="bg-transparent">
                  <Badge style={{width:"16%"}} className={"mx-2"} bg="primary" pill>2021.</Badge>
                  <ListGroup.Item className="bg-transparent text-secondary border-0 px-3 py-3 small">
                    <span className="text-primary me-2">●</span> Demonstrator na katedri za Menadžment i informacione tehnologije
                  </ListGroup.Item>
                  <Badge style={{width:"16%"}} className={"mx-2"} bg="primary" pill>2022.</Badge>
                  <ListGroup.Item as={"a"}  target="_blank" rel="noreferrer" href={"https://eu4digitalsme.ba/biblioteka/digitalne-konsultacije-decembar-2022/"} style={{textDecoration:"underline"}} className="bg-transparent text-secondary border-0 px-3 py-3 small">
                    <span className="text-primary me-2">●</span> Učesnik na događaju "Dani digitalnih konsultacija: Collaborathon 2022"
                  </ListGroup.Item>
                  <Badge style={{width:"28%"}} className={"mx-2"} bg="primary" pill>2022. - 2023.</Badge>
                  <ListGroup.Item className="bg-transparent text-secondary border-0 px-3 py-3 small">
                    <span className="text-primary me-2">●</span> Team Leader volontera u Centru za menadžment i informacione tehnologije
                  </ListGroup.Item>
                  <Badge style={{width:"16%"}} className={"mx-2"} bg="primary" pill>2023.</Badge>
                  <ListGroup.Item as={"a"} target="_blank" rel="noreferrer" href={"https://www.efsa.unsa.ba/ef/bs/odrzano-4-it-takmicenje-za-srednjoskolce-na-ekonomskom-fakultetu-univerziteta-u-sarajevu"} style={{textDecoration:"underline"}} className="bg-transparent text-secondary  border-0 px-3 py-3 small">
                    <span className="text-primary me-2">●</span> Suorganizator IV IT takmičenja za srednjoškolce u BiH
                  </ListGroup.Item>

                  <Badge style={{width:"16%"}} className={"mx-2"} bg="primary" pill>2023.</Badge>
                   <ListGroup.Item className="bg-transparent text-secondary border-0 px-3 py-3 small">
                    <span className="text-primary me-2">●</span> Učesnik u razvoju novog sistema za evidenciju prisustva studenata i nastavnog osoblja Fakulteta upotrebom QR kod tehnologije
                  </ListGroup.Item>
                </ListGroup>

                <Card.Link
                  href="https://plus-legacy.cobiss.net/cobiss/bh/bs/bib/57914886"
                  className="text-primary text-decoration-underline d-inline-block mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pogledaj diplomski rad
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>



          <Col lg={7}>
            <Card style={darkCardStyle} className="p-4 shadow">
              <Card.Title className="fw-bold mb-4 text-primary">
                Certifikati i zahvalnice
              </Card.Title>
              <div className="d-flex flex-column gap-3">
                {certifikatiZahvalnice.map((cert, index) => (
                      <div key={index} className=" border border-secondary p-3 rounded-4 transition-all">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="pe-2">
                            <div className="d-flex flex-wrap gap-1 mb-2">
                                  <Badge  bg="primary" style={{ fontSize: "9px" }}>{cert.godina}</Badge>
                            </div>
                            <h6 className="text-black mb-1 fw-bold">{cert.naziv}</h6>
                            <div onClick={()=> uvecanaSlika(cert)}>
                              <Image fluid src={cert.slika} width="200" />
                            </div>
                            <i style={{fontSize:"small"}}>Klikni na sliku da uvećaš</i>

                          </div>
                        </div>
                      </div>
                ))}
              </div>
              <Modal centered={true} size="lg" show={!!selectedSlika} onHide={zatvoriModal}>
                <Modal.Header closeButton>
                  <Modal.Title className={"text-primary text-bold"}>{selectedSlika?.naziv}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                <Image fluid src={selectedSlika?.slika} width="600" />
                </Modal.Body>
              </Modal>
            </Card>
          </Col>

          <Col lg={12}>
            <Card style={darkCardStyle} className="p-4 shadow">
              <Card.Title className="fw-bold mb-4 text-primary">
                Projekti
              </Card.Title>
              <div className="d-flex flex-column gap-3">
                {projekti.map((proj, idx) => (
                  <a
                    key={idx}
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div className=" border border-secondary p-3 rounded-4 transition-all">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="pe-2">
                          <div className="d-flex flex-wrap gap-1 mb-2">
                            {proj.tag.map((onetag, index) => (
                              <Badge key={index} bg="primary" style={{ fontSize: "9px" }}>{onetag}</Badge>
                            ))}
                          </div>
                          <h6 className="text-black mb-1 fw-bold">{proj.naziv}</h6>
                          <p className="text-secondary mb-0 small" style={{ fontSize: "12px" }}>
                            {proj.opis}
                          </p>
                           <Badge bg="secondary" style={{ fontSize: "9px" }}>{proj.godina}</Badge>
                        </div>
                        <span className="text-primary fs-4"><FaArrowCircleRight size={20}/></span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </Col>

          {/* FOOTER */}
          <Col xs={12}>
            <footer className="mt-5 pt-4 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center opacity-75">
              <p className="small text-secondary mb-3 mb-md-0 text-center">
                © 2025 {imePrezime} • Rađeno u React sa React Bootstrap
              </p>
              <div className="d-flex gap-4">
                <a href="mailto:maja.lojo@outlook.com" className="text-primary text-decoration-none small fw-bold text-uppercase tracking-wider">Kontaktiraj me!</a>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
