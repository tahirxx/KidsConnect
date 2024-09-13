import PropTypes from 'prop-types';

export default function Welcome({ name }) {
  return (
    <div className="container mt-5">
    <h2>Welcome, {name}!</h2>
    <p>Here s a quick overview of your upcoming meetups and events.</p>
  </div>
  )
}
Welcome.propTypes = {
    name: PropTypes.string.isRequired, // Define 'name' as a required string
  };