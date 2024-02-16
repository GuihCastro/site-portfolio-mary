import avatar from "../../assets/img/hero.jpg"
import { Container, ImgWrapper } from "./styles";

export function Profile() {
    return (
        <Container>
            <ImgWrapper>
                <img src={avatar} alt="foto de Mariana Livraes desenhando" />
            </ImgWrapper>

            <p>
                I am an illustrator and concept artist, specializing in creating characters for games, with a special passion for themes of medieval Dark Fantasy. I have extensive experience working with various companies and projects, both in the domestic (Brazilian) and international markets.
            </p>

            <p>
                Graduated in Graphic Design, I have been studying drawing since forever, constantly seeking to learn and improve from the masters.
            </p>

            <p>
                Today, in addition to my professional role as a Character Designer with various partners, I dedicate myself to the development of personal projects in my own Worldbuilding.
            </p>

            <p>
                Furthermore, I allocate a portion of my time to a social mentorship program, where I share the knowledge I have built in my journey with other aspiring artists, aiming to help them find and build their own paths.
            </p>
        </Container>
    );
};