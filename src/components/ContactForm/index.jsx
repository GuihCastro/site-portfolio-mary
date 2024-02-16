import { Container, Form } from "./styles";

export function ContactForm() {
    return (
        <Container>
            <h2>Contact</h2>

            <Form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Message" />
                <button type="submit">Send</button>
            </Form>
        </Container>
    );
};