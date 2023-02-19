import React from "react";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {updateName, updateEmail, updateMessage, resetForm} from "../../redux/contactFormSlice";


import {
    Container,
    Title,
    Form,
    Label,
    Input,
    TextArea,
    Button
} from './styles'

const ContactForm: React.FC = () => {

    const {name, email, message} = useAppSelector((state) => state.contactForm);
    const dispatch = useAppDispatch();


    const onSubmit = async (data : any) => {
        try {
            const response = await axios.post('http://localhost:4000/contact', data)
            console.log(response.status, response.data.message)

            // dispatch(resetForm());
        } catch (err) {
            console.log(err)
        }
    };

    const handleName = (e : React.ChangeEvent < HTMLInputElement >) => {
        dispatch(updateName(e.target.value))
    }
    const handleEmail = (e : React.ChangeEvent < HTMLInputElement >) => {
        dispatch(updateEmail(e.target.value))
    }
    const handleMessage = (e : React.ChangeEvent < HTMLTextAreaElement >) => {
        dispatch(updateMessage(e.target.value))
    }

    return (

        <Container>

            <Form onSubmit={onSubmit}>
                <Title>
                    Reach out to us!</Title>
                <Label>
                    <Input type="text" placeholder="Your name*"
                        value={name}
                        onChange={handleName}/>
                </Label>
                <Label>
                    <Input type="text" placeholder="You e-mail*"
                        value={email}
                        onChange={handleEmail}/>
                </Label>
                <Label>
                    <TextArea placeholder="Your message*"
                        value={message}
                        onChange={handleMessage}/>
                </Label>
                <Button type="submit">Send Message</Button>
            </Form>
        </Container>
    );
};

export default ContactForm;
