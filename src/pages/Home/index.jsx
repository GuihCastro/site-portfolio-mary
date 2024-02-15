import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Gallery } from "../../components/Gallery";

export function Home() {
    return (
        <Container>
            <Header />

            <Menu />

            <Gallery />
        </Container>
    );
};