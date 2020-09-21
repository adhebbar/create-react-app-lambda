import React from 'react';
import './App.css';
import { Row,  Container, Col, 
  Card,  CardBody,
 } from "reactstrap";

 const Message = (props) => 
 {
   return (
     <Card fluid className = "message-container">
               <CardBody>
       <p>From {props.from}</p>
 
     <iframe  title = {props.video} className = "video" src={props.video} ></iframe>
     {(props.pdf)? (
       <div>
        <p>
       {props.pdf_message}
       </p>
       <iframe title = {props.pdf} src={props.pdf} frameborder="0" height="100%" width="100%"></iframe>
       </div>
     ) : null }
 
 
     
     </CardBody>
 
     </Card>
   )
 }

function App() {
  return (
    <Container className = "top-container" fluid>
      <Row>
        <Col>
          <h1>Happy 50th Birthday, Dear Anil!</h1>
        </Col>
      </Row>
      <Row>
        <h2>Here are a few messages we've complied for you.</h2>
      </Row>
      <Message video = "https://drive.google.com/file/d/1FEUKBuIjerNre2u_0RIieQGX8OxJiD8L/preview" from = "Appa and Amma" />
      <Message video = "https://drive.google.com/file/d/1BZgBRdKNC-xCPZ2T_AYMBgA9WilnQOro/preview" from = "Shahdol family" />
      <Message video = "https://drive.google.com/file/d/1QJnfBuU0IMFQNrrecCaYkV74ZkaWeBog/preview" from = "Kidiyur family" />
      <Message pdf={"https://drive.google.com/file/d/1JXX1sJCUHNUGZF6TQpI65yQIrGyhlMWb/preview"} pdf_message = "Letter from Yashoda Chikki"
      video = "https://drive.google.com/file/d/13Kjhr5CJ9sKxFBJVwQuto6rNNUQxACjX/preview" from = "Hubli family" />

      <Message pdf={"https://drive.google.com/file/d/1djo50F9o8_g5q_p41-YBuHoEK79ryPbg/preview"} pdf_message = "Poem by Amitha"
      video = "https://drive.google.com/file/d/1QbUF5VZx8JAj6O8pzDdi1rh2rdd3sLVQ/preview" from = "Surathkal family"/>
      <Row>
      <h2>We hope you have a great year ahead :) </h2>
      </Row>
    </Container>
  );
}

export default App;
