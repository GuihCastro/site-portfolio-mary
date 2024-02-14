import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export function Home() {
    return (
        <Container>
            <Header />

            <Menu />
        </Container>
    );
};