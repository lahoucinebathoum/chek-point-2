import React from 'react';
import { Container, Navbar, Card, Button, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App" style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', paddingBottom: '2rem' }}>
        
        {/* Navbar bleu ciel */}
        <Navbar style={{ backgroundColor: '#87ceeb' }} variant="light" className="mb-5">
          <Navbar.Brand href="#home" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Navbar Bleu Ciel
          </Navbar.Brand>
        </Navbar>

        {/* Heading principal */}
        <h1 className="text-center mb-5" style={{ color: '#ff4500', fontFamily: 'Verdana, sans-serif' }}>
          Découvrez nos cartes avec images !
        </h1>

        {/* Container pour les cartes */}
        <Container>
          <Row>
            {/* Carte 1 – Image nature */}
            <Col md={4}>
              <Card className="mb-4 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#40e0d0', color: '#ffffff' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Title>Carte Nature</Card.Title>
                  <Card.Text>
                    Une carte turquoise avec une belle image de nature.
                  </Card.Text>
                  <Button variant="light" style={{ borderRadius: '20px' }}>Voir Plus</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Carte 2 – Image coucher de soleil (corrigée) */}
            <Col md={4}>
              <Card className="mb-4 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#ffd700', color: '#800080' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Title>Carte Soleil</Card.Title>
                  <Card.Text>
                    Carte jaune avec une belle image de coucher de soleil.
                  </Card.Text>
                  <Button variant="dark" style={{ borderRadius: '20px' }}>Découvrir</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Carte 3 – Image mer */}
            <Col md={4}>
              <Card className="mb-4 shadow-lg" style={{ borderRadius: '15px', backgroundColor: '#ff1493', color: '#ffffff' }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Title>Carte Mer</Card.Title>
                  <Card.Text>
                    Carte rose avec une image de mer magnifique.
                  </Card.Text>
                  <Button variant="warning" style={{ borderRadius: '20px' }}>Action</Button>
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
