import { useState } from "react";
import { Container, Form } from "./styles";
import emailjs from "@emailjs/browser";

export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !message) {
            return alert("Please, fill in all fields!");
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
            to_name: 'Mariana',
        };

        emailjs.send("service_g8t2ci6", "template_di3v2bi", templateParams, "xeFTV5z4t9ZDMjKyy")
        .then((response) => {
            alert("Message sent successfully!");
            console.log('SUCCESS!', response.status, response.text);
            setName("");
            setEmail("");
            setMessage("");
        }, (error) => {
            alert("An error occurred, please try again later.", error.text);
        });
    }

    return (
        <Container>
            <h2>Contact</h2>

            <Form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input 
                    type="email" 
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea 
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <button type="submit">Send</button>
            </Form>
        </Container>
    );
};