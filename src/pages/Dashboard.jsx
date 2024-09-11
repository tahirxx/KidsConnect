// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';  // Adjust the import path as needed





export default function Dashboard() {
  const [groups, setGroups] = useState([]);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      const querySnapshot = await getDocs(collection(db, 'groups'));
      const groupsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGroups(groupsData);
    };

    const fetchMeetups = async () => {
      const querySnapshot = await getDocs(collection(db, 'meetups'));
      const meetupsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMeetups(meetupsData);
    };

    fetchGroups();
    fetchMeetups();
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <section>
        <h2>Groups</h2>
        <ul>
          {groups.map(group => (
            <li key={group.id}>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Meetups</h2>
        <ul>
          {meetups.map(meetup => (
            <li key={meetup.id}>
              <h3>{meetup.name}</h3>
              <p>{meetup.date} at {meetup.time}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

