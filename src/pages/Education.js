import React from 'react';
import {Accordion, Container} from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


const Education = () => {
  return (
    <Container style={{color: "white"}}>
      <h2 className='display-1 fw-bold text-center'>My Education</h2>
      <p className='text-center'>These are my academic qualifications:</p>
      <hr/>
      <Container className='p-5'>
      <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>2008-2014</Accordion.Header>
        <Accordion.Body>
        MALABAGO ELEMENTARY SCHOOL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2014-2018</Accordion.Header>
        <Accordion.Body>
        MANGALDAN NAATIONAL HIGH SCHOOL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>2018-2020</Accordion.Header>
        <Accordion.Body>
        University of Pangasinan (SHS)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>2023-present</Accordion.Header>
        <Accordion.Body>
        Phinma University of Pangasinan (College)
        </Accordion.Body>
      </Accordion.Item>
  

    </Accordion>
    
      </Container>
    </Container>
  );
};

export default Education;
