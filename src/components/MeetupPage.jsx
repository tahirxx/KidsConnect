
import MeetupCard from '../components/MeetupCard';
import { Container, Row, Col } from 'react-bootstrap';

const meetups = [
    { title: 'Tech Talk', date: '2024-09-20', location: 'Conference Room A' },
    { title: 'Networking Event', date: '2024-10-05', location: 'Main Hall' },
    { title: 'Workshop on React', date: '2024-11-15', location: 'Room 204' }
  ];

export default function MeetupPage() {
  return (
    <Container>
      <h1 className="my-4">Upcoming Meetups</h1>
      <Row>
        {meetups.map((meetup, index) => (
          <Col md={4} key={index} className="mb-4">
            <MeetupCard 
              title={meetup.title} 
              date={meetup.date} 
              location={meetup.location} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
