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
 
     <iframe  title = {props.video} className = "video" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src={props.video} allowfullscreen="true"></iframe>
     {(props.pdf)? (
       <div>
        <p>
       {props.pdf_message}
       </p>
       <iframe title = {props.pdf} src={props.pdf} frameborder="0" height="100%" width="100%" allowfullscreen></iframe>
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
        <h2>Here are a few messages we've compiled for you.</h2>
      </Row>
      <Message video = "https://www.youtube.com/embed/NsaLJFNGMKo" from = "Appa and Amma" />
      <Message video = "https://www.youtube.com/embed/-ZRmKSrDECk" from = "Shahdol family" />
      <Message video = "https://www.youtube.com/embed/cKIQozQ86M0" from = "Kidiyur family" />
      <Message pdf={"https://drive.google.com/file/d/1JXX1sJCUHNUGZF6TQpI65yQIrGyhlMWb/preview"} pdf_message = "Letter from Yashoda Chikki"
      video = "https://www.youtube.com/embed/VTWvpCulZd8" from = "Hubli family" />

      <Message pdf={"https://drive.google.com/file/d/1djo50F9o8_g5q_p41-YBuHoEK79ryPbg/preview"} pdf_message = "Poem by Amitha"
      video = "https://www.youtube.com/embed/4rywGTnh89U" from = "Surathkal family"/>
      <Row>
      <h2>We hope you have a great year ahead :) </h2>
      </Row>
    </Container>
  );
}

export default App;
