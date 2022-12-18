import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container fluid>
      <Row className="d-flex">
        <Col className="col-lg-6 col-md-12 col-sm-12">1 of 2</Col>
        <Col className="col-lg-6 col-md-12 col-sm-12">2 of 2</Col>
      </Row>

    </Container>
  );
}

export default App;
