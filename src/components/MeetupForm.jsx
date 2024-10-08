import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function MeetupForm() {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMeetup = { title, description, date, location };

    try {
      const response = await fetch("/api/meetups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMeetup),
      });

      if (response.ok) {
      
        setSuccessMessage("Meetup created successfully!");

        // Option 1: Reset the form fields after successful submission
        setTitle("");
        setDescription("");
        setDate("");
        setLocation("");

        // Option 2: Redirect to another page (e.g., Meetup List page)
        navigate("/meetups");

        // Option 3: Optionally display the success message to the user
        setTimeout(() => {
          setSuccessMessage(""); // Hide the success message after a while
        }, 3000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Failed to create meetup");
      }
    } catch (error) {
        console.log(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      required
    />
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Description"
      required
    />
    <input
      type="datetime-local"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
    />
    <input
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="Location"
      required
    />
    <button type="submit">Create Meetup</button>
  </form>
  )
}
