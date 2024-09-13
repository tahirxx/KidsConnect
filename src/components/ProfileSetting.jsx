import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ProfileSetting() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // Handle profile save logic here
    console.log({ name, email, interests });
  };

  return (
    <div className="container mt-5">
      <h2>Profile Settings</h2>
      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInterests">
          <Form.Label>Childs Interests</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your child's interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Save</Button>
      </Form>
    </div>
  );
}
