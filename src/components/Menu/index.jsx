import { BsShareFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, InternalLinks, ExternalLinks } from "./styles";

export function Menu() {
    return (
        <Container>
            <nav>
                <InternalLinks>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </InternalLinks>

                <ExternalLinks>
                    <li><a><BsShareFill /></a></li>
                    <li><a><BsInstagram /></a></li>
                    <li><a><BsLinkedin /></a></li>
                    <li><a><FaArtstation /></a></li>
                </ExternalLinks>
            </nav>
        </Container>
    );
};