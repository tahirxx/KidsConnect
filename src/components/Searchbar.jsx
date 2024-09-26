import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Button, InputGroup } from 'react-bootstrap';
import SocialMediaIcons from './SocialMediaIcons';
export default function Searchbar() {

  return (
    <div className="searchbar d-flex justify-content-between w-100 my-2">
      <div>
     <InputGroup className=''> 
        <Form.Control
            type="text"
            placeholder="Search"
           className="border-right-0 "
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <Button variant="primary" type="submit" className="border-left-0">
            <i className="bi bi-search "></i>
          </Button>
      </InputGroup> 
      </div>
      <div>
        <SocialMediaIcons />
      </div>
    </div>
  )
}
