import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { ContactForm } from "../../components/ContactForm";

export function Contact() {
    return (
        <Container>
            <Header />

            <Menu />

            <ContactForm />
        </Container>
    );
};