KidsConnect

KidsConnect is a social platform that enables parents or guardians to arrange meetups for their kids based on shared interests. The app is designed to create safe, authentic group meetups that foster healthy connections among kids. Only parents have access to control and manage these meetups to ensure safety.

Features

User Authentication: Parents can sign up, log in, and manage their profiles.
Group Interests: Parents can browse and select groups based on their child's interests.
Meetups: Organize and join meetups with other parents for group-based events.
Search: Easily search for interests or meetups.

Tech Stack

Frontend: React, React-Bootstrap, Vite, Firebase for authentication
Backend: Java, Spring Boot
Database: Firebase (for authentication and user data storage)
Build Tool: Vite

Getting Started

Prerequisites
Ensure you have the following installed on your local machine:
Node.js
Java Development Kit (JDK)
Firebase CLI

Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/kidsconnect.git
cd kidsconnect
2. Install frontend dependencies
bash
Copy code
cd frontend
npm install
3. Set up Firebase Authentication
Go to Firebase Console.
Create a new project and set up Firebase Authentication.
Enable Email/Password authentication method.
Add your Firebase configuration to a .env file in the frontend folder.
env
Copy code
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
4. Install backend dependencies
bash
Copy code
cd backend
./mvnw install
Running the App
Frontend
bash
Copy code
cd frontend
npm run dev
Backend
bash
Copy code
cd backend
./mvnw spring-boot:run

Usage:
Sign up or log in as a parent.
Explore the group interests available on the dashboard.
Create or join a group-based meetup for your kids.
View upcoming meetups and RSVP.

Contributing:
Feel free to contribute to this project by opening a pull request or submitting an issue!

License:
This project is licensed under the MIT License - see the LICENSE file for details.

