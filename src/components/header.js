import { Nav, Navbar} from "react-bootstrap";
// the reason we are using the LinkContainer is that the Link to="" functionality of  won't work,
// so we are importing the linkContainer, so we can make links clickable and actionable
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {

    return(
        <div className='container'>
            <Navbar className='yellotail'>
                <LinkContainer to="/">
                    <Navbar.Brand> The Daily News </Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link> Home </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="contact">
                        <Nav.Link> Contact </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>

        </div>

    )
}

export default Header;