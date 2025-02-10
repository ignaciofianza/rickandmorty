import React from "react";
import { Modal, Button, Row, Col, Badge, Card } from "react-bootstrap";

const CharacterDetailsPopup = ({ character, onClose }) => {
  const { name, species, location, image, status, gender, origin, episode } = character;

  return (
    <Modal show={true} onHide={onClose} centered size="lg">
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <Row>
          <Col md={4} className="d-flex justify-content-center">
            <img
              src={image}
              alt={name}
              className="img-fluid rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </Col>
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Row>
                  <Col xs={6}>
                    <p><strong>Especie:</strong> {species}</p>
                    <p><strong>Género:</strong> {gender}</p>
                  </Col>
                  <Col xs={6}>
                    <p><strong>Estado:</strong> {status}</p>
                    <p><strong>Localización:</strong> {location.name}</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <p><strong>Origen:</strong> {origin.name}</p>
                    <p><strong>Primera aparición:</strong> {episode[0]}</p>
                  </Col>
                  <Col xs={6}>
                    <p>
                      <strong>Estado actual: </strong>
                      <Badge pill variant={status === "Alive" ? "success" : status === "Dead" ? "danger" : "secondary"}>
                        {status}
                      </Badge>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterDetailsPopup;
