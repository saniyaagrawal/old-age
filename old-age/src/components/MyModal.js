import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../static/css/mymodal.css'
import StaticStars from './StaticStars';
import BankDetails from './BankDetails';
import MemberCard from './MemberCard';

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
          <MemberCard/>
          <BankDetails/>
          <div className='review'>Reviews:</div>
          <div>
            <div className='name_stars'>
                <div className='name'>Saniya Agrawal</div>
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
