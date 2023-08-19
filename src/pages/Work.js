import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const Work = () => {
  return (
    
    <CardGroup>
    <Card style={{margin: "20px", borderRadius: "20px", backgroundColor: "black"}}>
      <Card.Img variant="top" src="cite.png" style={{borderRadius:"20px"}}/>
      <Card.Body style={{color: "white"}}>
        <Card.Title>Cite Fest</Card.Title>
        <Card.Text>
        A blog website on our campus that indicates the events, parties, and other activities taking place on our campus.
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{margin: "20px", borderRadius: "20px", backgroundColor:"black"}}>
      <Card.Img variant="top" src="foodChef.png" style={{borderRadius:"20px"}}/>
      <Card.Body style={{color:"white"}}>
        <Card.Title>Pro Chef</Card.Title>
        <Card.Text>
        The website showcases delicious delicacies and offers a range of recipes, appealing to food enthusiasts and aspiring chefs alike. 
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{margin: "20px", borderRadius: "20px", backgroundColor:"black"}}>
      <Card.Img variant="top" src="photo.png" style={{borderRadius:"20px"}}/>
      <Card.Body style={{color:"white"}}>
        <Card.Title>Photo Studio</Card.Title>
        <Card.Text>
        Photo Studios is a website that showcases a gallery of images and features various photo projects through its photo.
        </Card.Text>
      </Card.Body>
      
    </Card>
  </CardGroup>
  );
};

export default Work;
