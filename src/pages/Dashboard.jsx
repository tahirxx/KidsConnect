
import soccerImage from '../assets/images/soccer.jpeg';
import artImage from '../assets/images/art2.webp';
import musicImage from '../assets/images/music.jpeg';
import GroupInterest from '../components/GroupInterest';
import kids from '../assets/images/KIDs4.png';
import Footer from '../components/Footer';
import play from '../assets/images/kids9.png';
import { Carousel } from "react-bootstrap";
import book from '../assets/images/book.jpg';
import { useNavigate } from 'react-router-dom';

const meetups = [
  { id: 1, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: soccerImage },
  { id: 2, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: artImage  },
  { id: 3, title: "Music Meetup", date: "Oct 2, 2024", location: "Community Hall", time: "4:00PM", image: musicImage },
  { id: 4, title: "Book Club", date: "Oct 5, 2024", location: "Library", time: "3:00PM", image: book },
  { id: 5, title: "Art Class", date: "Sept 28, 2024", location: "Downtown Studio", time: "6:00PM", image: artImage  },
  { id: 6, title: "Soccer Game", date: "Sept 25, 2024", location: "Central Park", time: "2:00PM", image: soccerImage },
];

export default function Dashboard() {
  
const navigate = useNavigate();

const handleJoinClick = () => {
  navigate('/login');
}
  return (
    <div className="p-2">
    
      {/* My Groups Section */}
      <div className="group-interest-section">
       <GroupInterest />
      </div> 

      <div className='m-5 p-5 gap-4 d-flex w-100 align-items-center justify-content-center'>
        <div className='w-60 .text-center'>
        <h1>Connecting Kids, Empowering Parents</h1>
        <p>A safe space for parents to organize meetups and help their kids bond over shared interests.</p>
       
        <button className='bg-primary text-white' onClick={handleJoinClick}>Join KIDsConnect</button>
      </div>
      <div className='w-25'><img src={kids} alt="" className='w-100'/></div>
      </div>

       {/* Upcoming Meetups Section with Carousel */}
      <div className="upcoming-meetups bg-light p-2 my-4">
        <h2 className="text-center">Upcoming Meetups</h2>
        <Carousel controls={true} indicators={false}>
          {meetups.map((meetup, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex col-row-3 justify-content-around">
                {meetups.slice(index, index + 3).map((meetup) => (
                  <div key={meetup.id} className="text-center mx-2" style={{ width: "30%" }}>
                    <img
                      src={meetup.image}
                      className="d-block w-100"
                      alt={meetup.title}
                    />
                    <h3>{meetup.title}</h3>
                    <p>Date: {meetup.date}</p>
                    <p>Time: {meetup.time}</p>
                    <p>Location: {meetup.location}</p>
                    <button className="btn btn-outline-primary">Join Meetup</button>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Reviews and Testimonials Section */}
<div className="reviews-testimonials p-4">
  <h2 className="mb-4 text-center font-weight-bold">What Parents Are Saying...</h2>

  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="testimonial-card p-4 shadow-lg border rounded bg-light h-100 d-flex flex-column">
        <p className="review-text mb-4">
          <em>Joining the soccer game was such a great experience for my son. He made new friends, and I connected with other parents. We are excited for the next meetup!</em>
        </p>
        <p className="review-author text-right mt-auto"><strong>– Jane D.</strong></p>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="testimonial-card p-4 shadow-lg border rounded bg-light h-100 d-flex flex-column">
        <p className="review-text mb-4">
          <em>The art class meetup was well-organized and fun for my daughter. It was so easy to join, and I felt comfortable with the safety measures in place.</em>
        </p>
        <p className="review-author text-right mt-auto"><strong>– Emily S.</strong></p>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="testimonial-card p-4 shadow-lg border rounded bg-light h-100 d-flex flex-column">
        <p className="review-text mb-4">
          <em>This app has been a lifesaver for planning activities. It helps me find the right events for my kids, and the community has been amazing.</em>
        </p>
        <p className="review-author text-right mt-auto"><strong>– Michael T.</strong></p>
      </div>
    </div>
  </div>
</div>


      {/* CTA Buttons */}
      <div className="container bg-gray">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <h2>Get Started Today</h2>
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-primary btn-ml">
              Create a New Meetup
            </button>
            <button className="btn btn-secondary btn-ml">
              Join a New Group
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={play} alt="Call to Action" className="img-fluid" />
        </div>
      </div>
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );

};

