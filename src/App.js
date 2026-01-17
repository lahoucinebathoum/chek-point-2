import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* Fragment React */}
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">Mon Projet</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Accueil</Nav.Link>
              <Nav.Link href="#">À propos</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Header */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">Bienvenue sur mon projet React</h1>

          {/* Trois cartes */}
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>Ceci est un exemple de carte 1.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>Ceci est un exemple de carte 2.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>Ceci est un exemple de carte 3.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
