import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/AllenDG">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/AllenWalterDG/">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/pickaro_/">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;