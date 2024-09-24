import { Tabs, Tab } from 'react-bootstrap';

export default function GroupInterest() {
    return (
        <div className="group-interests">
          
          
          <Tabs defaultActiveKey="sports" id="interest-tabs" className="mb-3" fill>
            {/* Sports Tab */}
            <Tab eventKey="sports" title="Sports">
              
            </Tab>
            
            {/* Hobbies Tab */}
            <Tab eventKey="hobbies" title="Hobbies">
             
            </Tab>
    
            {/* Games Tab */}
            <Tab eventKey="games" title="Games">
             
            </Tab>
    
            {/* Outdoors Tab */}
            <Tab eventKey="outdoors" title="Outdoors">
              
            </Tab>
    
            {/* Education Tab */}
            <Tab eventKey="education" title="Education">
              
            </Tab>
          </Tabs>
        </div>
      );
    };
    

