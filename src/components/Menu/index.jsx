import { BsShareFill, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaArtstation } from "react-icons/fa";
import { Container, InternalLinks, ExternalLinks } from "./styles";

export function Menu() {
    return (
        <Container>
            <nav>
                <InternalLinks>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
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