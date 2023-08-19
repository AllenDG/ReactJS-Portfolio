import React from 'react';

import SocialLinks from '../components/SocialLinks';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { Button, Image, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";



const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend Developer','Researcher','Graphic designer',"Video Editor" ],
    loop:{},
});

  return (
    <div className='container  align-items-center'>
      
      <Row className='hero gap-3' style={{color:"white"}}>
      
        <Col>
          <h1 className='display-1 fw-bold'>Allen Walter F. De Guzman</h1>
          <h3 style={{color: "white"}}>i'm a 
            <span> {text}</span>
            <Cursor/>
          </h3>
          <hr/>  
          <p style={{color: "white", fontsize: "20px"}}>
          I'm a web developer and researcher, passionate about creating innovative online experiences
          </p>
          <div className='d-flex align-items-center gap-2'> 
           
            
            <SocialLinks />
          </div>
          
        </Col>
        <Col className='photo d-flex justify-content-center align-items-center'>
          <Image src="/profile.png" width={500} height={700} alt="profile" className="rounded-lg" style={{paddingBottom:"10vh"}}/>
        </Col>
      </Row>
      <hr style={{color:"white"}}/>  
          <h1 style={{color: "white", fontsize: "20px", marginBottom:"20px"}}>
          Skills
          </h1>

         
                     
                        <div class="skills__data" style={{backgroundColor:"white", marginBottom:"20px", paddingBottom:"30px"}}>
                            <div class="skills__names">
                                <i class=''> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPtJREFUSEvNlIENwjAMBL+TAZuwAhMAE7ACm8AobFL0KEaJcW2nVSQsVZVa589+J5kwOKbB+vgLwB7AGQDfOsICowSKPgBcymM56mpEAFZOceYRZHXB/9elWWYB3l5YBbAqFQg7qeMO4FU+/HSiOxDPe3YvAcdqQaOpAeJ5D+AE4FYtaCzTgLlHueQeygaQpU8A/PaJLQAK0XPrjHx1I4An4jWbBmh/Mw66Fukha38zAHfIFKgH7V0RFqyp3hqyLJKDtjPuoOj0N+AoOXMuVl0VUsUSQKygnZsAeiZ1+zIfbgQCzYgs8jqRM7Io7g05sx1TOdkOUmJW0nDAG1LoLxkq0pkDAAAAAElFTkSuQmCC"/> </i>
                                
                                <span class="skills__name">python</span>
                            </div>  
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">50%</span>
                            </div>
                        </div>
                        <div class="skills__data"  style={{backgroundColor:"white", marginBottom:"20px"}}>
                            <div class="skills__names">
                                <i class=' skills__icon'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALVJREFUSEvtlVEOgzAMQx8nG5xs28ngZkyWahRVQ5QR0D7oDxGkduw0pePk1Z2Mz+UEc5KipfBawU1gh2+LNs/a/1o0lNrH8nwBb6AH/E6fflbgjZqXCRChwBVHkhQCgQv423CmEFiBLHkCsuvwHESLBOYeKE63KJ5VE6nRItplkaVro5sqIMWPosJ22apdBPWN6yrdZCs5ZFFUISCv2NiUJm/eESVh1aJWgOa8y//JzZW1Jn4AU68vGetXTtUAAAAASUVORK5CYII="/></i>
                                <span class="skills__name">Javascrip</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>   
                                <span class="skills__percentage">60%</span>
                            </div>
                        </div>
                        <div class="skills__data"  style={{backgroundColor:"white",marginBottom:"20px"}}>
                            <div class="skills__names">
                                <i class=' skills__icon' ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANlJREFUSEvFlV0SwjAIhLcns55MPZm9mc4+4NAGEiCTMY914GOXHzcsftvi/PgL4DOh6gBw1/GWgjeAvQgJAR4AnkUA414jBRpwkutAb6qgNCAyBLSTtvKlAVRAX6N9CQGsiqJ9kYJ+bloWeJK9ySJcfpsCeIOl1TUFe02MLJv4PQWQxbF6cB2AZskoeaRAgnRfxKopgIylVRVh/C5P7EwpuG6zTqib3V2ynkW9uSfMGtlmyaoAb1xTACaJbi8V8YKaNkaOmVSs71E36ehcF/8K7LCMghJ4OeALopM+GVgHS48AAAAASUVORK5CYII="/> </i>
                                <span class="skills__name">html/css</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">90%</span>
                            </div>      
                        </div>  
                        <div class="skills__data"  style={{backgroundColor:"white", marginBottom:"20px"}}>
                            <div class="skills__names">
                                <i class='skills__icon'> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAONJREFUSEvNlVEOwkAIROnJ1JMZT6Y9Wc1LJCEIu2C6ify0m7YzMDB0k8WxLcaXvya4i8hjpsCvFQC+i8hrBcFVRCC4zcB53q0AYAgA56qRVtIhsODcE6f1wMry/ABP9e9IZJt6dKTtSETmaA9BObkOgZ37chUdArJWEk9Aj8KejAj46JIYSgEtcFjViEBH0Wdnz9bNobsrEvmdExksdXeVwIJa92I0fdbugQKlDTxrF0GAB3yQ8XThRRKNpidLuj2muthG+4YJYowJ7omv9ytN1ooUSEH9OfwBVQgqvUzfWU7wBtmDNBmiUGbWAAAAAElFTkSuQmCC"/></i>
                                <span class="skills__name">Java</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">30%</span>
                            </div>
                        </div>
                       
                    
                    
    </div>
   


  );
};

export default Home;
