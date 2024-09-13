import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function Searchbar() {

  return (
    <div className="searchbar ">
     <InputGroup> 
     
         <Form.Control
            type="text"
            placeholder="Search"
           className="border-right-0"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          <Button variant="primary" type="submit" className="border-left-0">
            <i className="bi bi-search "></i>
          </Button>
     
  </InputGroup> 
    </div>
  )
}
