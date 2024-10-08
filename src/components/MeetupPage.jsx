
import MeetupCard from '../components/MeetupCard';
import { Container, Row, Col } from 'react-bootstrap';
import soccerImage from '../assets/images/soccer.jpeg';
import artImage from '../assets/images/art2.webp';
import musicImage from '../assets/images/music.jpeg';
import kids from '../assets/images/KIDs4.png';
import play from '../assets/images/kids9.png';
import book from '../assets/images/book.jpg';
import { useEffect, useState } from 'react';

const meetups = [
  { id: 1, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: soccerImage },
  { id: 2, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: artImage  },
  { id: 3, title: "Music Meetup", date: "Oct 2, 2024", location: "Community Hall", time: "4:00PM", image: musicImage },
  { id: 4, title: "Book Club", date: "Oct 5, 2024", location: "Library", time: "3:00PM", image: book },
  { id: 5, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: play  },
  { id: 6, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: soccerImage },
  { id: 7, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: kids },
  { id: 8, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: artImage  },
  { id: 9, title: "Music Meetup", date: "Oct 2, 2024", location: "Community Hall", time: "4:00PM", image: kids },
  { id: 10, title: "Book Club", date: "Oct 5, 2024", location: "Library", time: "3:00PM", image: book },
  { id: 11, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: artImage  },
  { id: 12, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: kids },
  { id: 13, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: soccerImage },
  { id: 14, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: play  },
  { id: 15, title: "Music Meetup", date: "Oct 2, 2024", location: "Community Hall", time: "4:00PM", image: musicImage },
  { id: 16, title: "Book Club", date: "Oct 5, 2024", location: "Library", time: "3:00PM", image: book },
  { id: 17, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: artImage  },
  { id: 18, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: play },

   ];

export default function MeetupPage() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetups() {
      const response = await fetch("/api/meetups");
      const data = await response.json();
      setMeetups(data);
    }

    fetchMeetups();
    
  }, []);

  return (
    <Container>
      <h1 className="my-4">Upcoming Meetups</h1>
      <Row>
        {meetups.map((meetup, index) => (
          <Col md={4} key={index} className="mb-4">
            <MeetupCard 
              image={meetup.image}
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
