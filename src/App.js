import React from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nom from './Nom';
import Prix from './Prix';
import Description from './Description';
import Image from './Image';

const prenom = "Lahoucine"; // change ton prénom ou laisse "" si pas fourni

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
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

        {/* Contenu */}
        <Container className="mt-4">
          <h1 className="text-center mb-4">Bienvenue sur mon projet React</h1>

          {/* Carte produit */}
          <Card>
            <Card.Body>
              <Image />
              <Nom />
              <Prix />
              <Description />
            </Card.Body>
          </Card>

          {/* Message de bienvenue */}
          <p className="mt-3">
            Bonjour, {prenom ? prenom : "là !"}
          </p>

          {/* Afficher une image si prénom fourni */}
          {prenom && (
            <img
              src="https://via.placeholder.com/100"
              alt="Avatar"
              style={{ borderRadius: "50%", marginTop: "10px" }}
            />
          )}
        </Container>
      </div>
    </>
  );
}

export default App;
