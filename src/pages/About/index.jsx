import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Profile } from "../../components/Profile";
import { Container } from "./styles";

export function About() {
    return (
        <Container>
            <Header />

            <Menu />

            <Profile />
        </Container>
    );
}