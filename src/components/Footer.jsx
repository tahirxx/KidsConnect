
export default function Footer() {
    return (
        <footer className="bg-dark text-white py-5 my-2 ">
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <h5>About Us</h5>
                <p>
                  KidsConnect is dedicated to creating safe and fun connections for children through organized meetups.
                </p>
              </div>
              <div className="col-md-3">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Home</a></li>
                  <li><a href="#" className="text-white">Features</a></li>
                  <li><a href="#" className="text-white">Contact</a></li>
                  <li><a href="#" className="text-white">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Contact Us</h5>
                <p>
                  Email: <a href="mailto:info@kidsconnect.com" className="text-white">info@kidsconnect.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+1234567890" className="text-white">+1 (234) 567-890</a>
                </p>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="mb-0">&copy; {new Date().getFullYear()} KidsConnect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
}
