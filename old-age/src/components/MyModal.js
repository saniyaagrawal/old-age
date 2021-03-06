import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../static/css/mymodal.css'
import '../static/css/app.css'
import StaticStars from './StaticStars';
import BankDetails from './BankDetails';
import MemberCard from './MemberCard';
import { DropletHalf, GeoAlt, Telephone, Envelope } from 'react-bootstrap-icons';
import AddComment from './AddComment';
import Review from './Review';


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
            <div className='modal_heading'>
              <div>Name of Oldage</div>
              <div className='heading_stars'><StaticStars value={4}/></div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src='https://www.theparentscare.com/storage/avatar/450x/acdab1e7ee7fdb24eaed9c85e116e814_1596197538.jpg'
              style={{height:'30%',width:"100%", display:'flex',justifySelf:'center'}}
            />
            {/* <div>Ratings (4.0)</div>
            <StaticStars value={4}/> */}
            <hr style={{width: '100%', height: 1}} />
            <div className="oldage_details">
              <div className="row" style={{alignItems: 'center'}}>
                <GeoAlt/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Address:
                </div>
                <div style={{marginLeft:'1%'}}>133, xyx some address, Indore (M.P.)</div>
              </div>
              <div className="row" style={{alignItems: 'center'}}>
                <Telephone/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Phone No.:
                </div>
                <div style={{marginLeft:'1%'}}>9334235245</div>
              </div>
              <div className="row" style={{alignItems: 'center'}}>
                <Envelope/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Email:
                </div>
                <div style={{paddingLeft:'1%'}}>abc@gmail.com</div>
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
            <h4>Reviews</h4>
            <Review/>
            <h4>Add Review</h4>
            <AddComment/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal
