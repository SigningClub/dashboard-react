import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  iframe,
} from "react-bootstrap";

function User() {
  return (
    <>
    <div></div>
    <img
    src={require("assets/img/topo_fundo.png").default}
    
    alt="..."
  /> 
      <Container >
        <Row>
        <Col>
          <iframe height={"535"} width={"1057"} src="https://datastudio.google.com/embed/reporting/13f4afec-d8c6-40e5-8eeb-3ed5b33c590f/page/YTCsC" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
