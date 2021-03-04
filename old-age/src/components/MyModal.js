import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../static/css/mymodal.css'
import '../static/css/app.css'
import StaticStars from './StaticStars';
import BankDetails from './BankDetails';
import MemberCard from './MemberCard';
import { DropletHalf, GeoAltFill } from 'react-bootstrap-icons';


function MyModal() {
    const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Name of Oldage
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ratings (4.0)
          <StaticStars value={4}/>

          <hr style={{width: '100%', height: 1}} />
          <div className="oldage_details">
            <div className="row" style={{alignItems: 'center'}}>
              <div className="name"><GeoAltFill/>Address:</div>
              <div>133, xyx some address, Indore (M.P.)</div>
            </div>
          </div>
          <hr style={{width: '100%', height: 1}} />
          <h4>Facilities</h4>
          <div className="facilities row" style={{justifyContent: 'space-evenly'}}>
          <div className="row ai-c">
              <DropletHalf/>
              Facility 1
            </div>
            <div className="row ai-c">
              <DropletHalf/>
              Facility 1
            </div>
            <div className="row ai-c">
              <DropletHalf/>
              Facility 1
            </div>
            <div className="row ai-c">
              <DropletHalf/>
              Facility 1
            </div>  
            <hr style={{width: '100%', height: 1}} />

          </div>
          <h4>Members of oldage</h4>
          <div className="members">
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>
          </div>
          <br/>
          <BankDetails/>
          <hr style={{width: '100%', height: 1}} />
          <div className='review'>Reviews:</div>
          <div>
            <div className='name_stars'>
                <div className='name'>person name</div>
                <div className='stars'><StaticStars value={3}/></div>
            </div>
            <div>This is a good and friendly place.</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal
