import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImage from "../assets/img/contact-img.svg";

const ContactForm = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        setButtonText('Sending...');
        try {
            const response = await fetch("http://localhost:5173/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formDetails)
            });
            const result = await response.json();
            if (response.ok) {
                setStatus({ success: true, message: "Message Sent" });
            } else {
                setStatus({ success: false, message: result.error || "Something went wrong" });
            }
        } catch (error) {
            setStatus({ success: false, message: "Something went wrong" });
        }
        setButtonText('Send');
    };

    const onFormUpdate = (field, value) => {
        setFormDetails({
            ...formDetails,
            [field]: value,
        });
    };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Become Our Valued Sponsor</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.emailAddress} placeholder='Email Address' onChange={(e) => onFormUpdate('emailAddress', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phoneNumber} placeholder='Phone Number' onChange={(e) => onFormUpdate('phoneNumber', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactForm;
