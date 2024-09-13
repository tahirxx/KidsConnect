import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function MeetupCard({ title, date, location }) {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Date:</strong> {date} <br />
          <strong>Location:</strong> {location}
        </Card.Text>
        <Button variant="primary">View Details</Button> 
        </Card.Body>
      </Card>
    </div>
  )
}

MeetupCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };