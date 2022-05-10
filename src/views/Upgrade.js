import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Embed} from "semantic-ui-react";
import reactlogo from "assets/img/reactlogo.png"
function Upgrade() {
  return (
    <>
      <Container fluid>
        
          <Embed
          placeholder = {reactlogo}
    url='https://datastudio.google.com/embed/u/0/reporting/13f4afec-d8c6-40e5-8eeb-3ed5b33c590f/page/YTCsC'
  />
          
           
          
      </Container>
    </>
  );
}

export default Upgrade;
