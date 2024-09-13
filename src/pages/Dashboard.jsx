// src/pages/Dashboard.jsx
// import { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';  // Adjust the import path as needed
// import '../App.css';

// export default function Dashboard() {
//   const [groups, setGroups] = useState([]);
//   const [meetups, setMeetups] = useState([]);

//   useEffect(() => {
//     const fetchGroups = async () => {
//       const querySnapshot = await getDocs(collection(db, 'groups'));
//       const groupsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setGroups(groupsData);
//     };

//     const fetchMeetups = async () => {
//       const querySnapshot = await getDocs(collection(db, 'meetups'));
//       const meetupsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setMeetups(meetupsData);
//     };

//     fetchGroups();
//     fetchMeetups();
//   }, []);

//   return (
//     <div>
//       <h1 className='text'>Welcome to the Dashboard</h1>
//       <section>
//         <h2>Groups</h2>
//         <ul>
//           {groups.map(group => (
//             <li key={group.id}>
//               <h3>{group.name}</h3>
//               <p>{group.description}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//       <section>
//         <h2>Meetups</h2>
//         <ul>
//           {meetups.map(meetup => (
//             <li key={meetup.id}>
//               <h3>{meetup.name}</h3>
//               <p>{meetup.date} at {meetup.time}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }




export default function Dashboard() {
  return (
    <div>
    

      {/* Upcoming Meetups Section */}
      <div className="upcoming-meetups">
        <h2>Upcoming Meetups</h2>
        <ul>
          <li>
            <h3>Soccer Game Meetup</h3>
            <p>Date: Sept 25, 2024</p>
            <p>Time: 2:00 PM</p>
            <p>Location: Central Park</p>
            <button>RSVP</button>
          </li>
          {/* Add more meetups here */}
        </ul>
      </div>

      {/* My Groups Section */}
      <div className="my-groups">
        <h2>My Groups/Interests</h2>
        <div className="group-tags">
          <span className="tag">Sports</span>
          <span className="tag">Music</span>
          <span className="tag">Art</span>
          <button>Create New Group</button>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>You RSVP'd to Soccer Game Meetup on Sept 10</li>
          <li>New Meetup: Art Class on Sept 20</li>
          <li>Message from Sarah: "Looking forward to the soccer game!"</li>
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="cta-buttons">
        <button>Create a New Meetup</button>
        <button>Join a New Group</button>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 MeetUp App. All Rights Reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
        </ul>
      </footer>
    </div>
  );

};

