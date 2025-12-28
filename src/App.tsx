import React from "react";
import { Container, Row, Col, Card, Badge, ListGroup } from "react-bootstrap";
import majalojo from "../src/assets/MajaLojo.jpg";
import { FaReact } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { SiDotnet } from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";

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
      naziv: "BUNJO d.o.o. Sarajevo + CMS",
      opis: "Web stranica i dashboard za upravljanje sadržajem.",
      godina: "2023. -",
      link: "https://bunjogrupacija.ba",
      tag: ["React ", ".NET ", "MSSQL ", "MySQL ", "Azure Blob Storage ", "Azure Web Job ", "SignalR"]
    },
    {
      naziv: "BUNJO d.o.o. Mobilna App",
      opis: "Zvanična mobilna aplikacija dostupna na Play Store-u (uskoro i na App Store).",
      godina: "2024. -",
      link: "https://play.google.com/store/apps/details?id=com.majalojo.bunjogrupacijapk",
      tag: ["React Native ", "Expo Notifications ", "Expo-Mail ", "WebView ", "SignalR ", "SecureStorage ", "AsyncStorage"]
    },
  ];

  const darkCardStyle = {
    backgroundColor: "#FFFFF",
    border: "1px solid darkblue",
    color: "black",
    borderRadius: "20px",
    height: "100%"
  };

  return (
    <div style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }} className="py-4 py-md-5 text-white">
      <Container>
        <Row className="g-4">
          <Col lg={8}>
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

          <Col lg={4}>
            <Card style={darkCardStyle} className="p-4 text-center shadow">
              <Card.Title className="fw-bold mb-4 text-primary text-uppercase">
                Tech stack
              </Card.Title>
              <Row className="g-4 align-items-center justify-content-center">
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
                <Badge bg="white" className="border border-secondary mb-4 p-2 text-primary">
                  {skolovanje.period}
                </Badge>

                <ListGroup variant="flush" className="bg-transparent">
                  <ListGroup.Item className="bg-transparent text-secondary border-0 px-0 py-1 small">
                    <span className="text-primary me-2">●</span> Demonstrator na katedri za Menadžment i informacione tehnologije
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-secondary border-0 px-0 py-1 small">
                    <span className="text-primary me-2">●</span> Suorganizator IV IT takmičenja za srednjoškolce u BiH
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-secondary border-0 px-0 py-1 small">
                    <span className="text-primary me-2">●</span> Team Leader volontera u Centru za menadžment i informacione tehnologije
                  </ListGroup.Item>
                   <ListGroup.Item className="bg-transparent text-secondary border-0 px-0 py-1 small">
                    <span className="text-primary me-2">●</span> Učesnik u razvoju novog sistema za evidenciju prisustva studenata i nastavnog osoblja Fakulteta upotrebom QR kod tehnologije
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent text-secondary border-0 px-0 py-1 small">
                    <span className="text-primary me-2">●</span> Učesnik na događaju "Dani digitalnih konsultacija: Collaborathon 2022"
                  </ListGroup.Item>
                </ListGroup>

                <Card.Link
                  href="https://plus-legacy.cobiss.net/cobiss/bh/bs/bib/57914886"
                  className="text-primary text-decoration-underline d-inline-block mt-3"
                  target="_blank"
                >
                  Pogledaj diplomski rad
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card style={darkCardStyle} className="p-4 shadow">
              <Card.Title className="fw-bold mb-4 text-primary">
                Projekti i zaposlenje
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
                        </div>
                        <span className="text-primary fs-4"><FaArrowCircleRight size={20}/></span>
                      </div>
                    </div>
                  </a>
                ))}

                <div className="border border-secondary p-3 rounded-4 transition-all">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Badge bg="primary" className="mb-2 uppercase" style={{ fontSize: "10px" }}>
                        Praksa
                      </Badge>
                      <h6 className="text-black mb-1 fw-bold">JP BH Pošta d.o.o. Sarajevo</h6>
                   
                    </div>
                  </div>
                </div>

                <div className="border border-secondary p-3 rounded-4 transition-all">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Badge bg="primary" className="mb-2 uppercase" style={{ fontSize: "10px" }}>
                        Pripravnički staž
                      </Badge>
                      <h6 className="text-black mb-1 fw-bold">JP BH Pošta d.o.o. Sarajevo</h6>
                      
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>

          {/* FOOTER */}
          <Col xs={12}>
            <footer className="mt-5 pt-4 border-top border-secondary d-flex flex-column flex-md-row justify-content-between align-items-center opacity-75">
              <p className="small text-secondary mb-3 mb-md-0 text-center">
                © 2025 {imePrezime} • Rađeno u React sa React Bootstrap • Statična one page stranica
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