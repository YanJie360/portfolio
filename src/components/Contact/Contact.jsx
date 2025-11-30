import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {}, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:yanjieliauw@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Row style={{ paddingTop: "60px", paddingBottom: "40px", justifyContent: "center" }}>
        <Col md={6} className="contact-form-col">
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-sub">Have a question or want to work together? Send me a message.</p>

          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="contactName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </Form.Group>

            <Form.Group controlId="contactEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </Form.Group>

            <Form.Group controlId="contactMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." required />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button type="submit" variant="primary">Send Message</Button>
            </div>

            {submitted && <p className="mt-3 text-muted">Opening your email client…</p>}
          </Form>
        </Col>
      </Row>

      <Row style={{ paddingBottom: "40px" }}>
          <h3 className="info-title">Get in touch</h3>
          <p className="info-item"><AiOutlineMail />&nbsp; yanjieliauw@gmail.com</p>
          <p className="info-item"><AiOutlinePhone />&nbsp; +65 9689 6826</p>

          <div className="social-links" style={{ marginTop: 20 }}>
            <a href="https://github.com/yanjie360" aria-label="GitHub" target="_blank" rel="noreferrer"><AiFillGithub className="social-icon" /></a>
            <a href="https://www.linkedin.com/in/yanjieliauw/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn className="social-icon" /></a>
          </div>

      </Row>
    </Container>
  );
}

export default Contact;
