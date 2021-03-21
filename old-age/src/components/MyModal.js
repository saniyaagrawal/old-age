import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../static/css/mymodal.css'
import '../static/css/app.css'
import StaticStars from './StaticStars';
import BankDetails from './BankDetails';
import MemberCard from './MemberCard';
import { DropletFill, GeoAlt, Telephone, Envelope, Eyedropper, Dice5Fill, Stopwatch, Basket2Fill, SuitHeart } from 'react-bootstrap-icons';
import AddComment from './AddComment';
import Review from './Review';
import BASEURL from '../baseUrl';


function MyModal({oldageId}) {
  const members=[
    {
      "name":"Harsh Khatri",
      "position":"President",
      "occupation":"CEO of abc company",
      "image":"data:image/jpeg;base64,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JSxSPgTCSC5RKmcK4y8eUABHrKTRK/8AR/qMqknLlLllZ0pEgF7OT9n9v+QpTPdBXhqUVe01ach7zd+dBzPKSIomNiF0GROveAeHE+HGulZ2WEaZ5fCDuliFAApllLIEtIBHT1ylDaNjljGvvc+ffNNh69es4G1Sood4I8x+8jU6OfJkWiao1kTMB0WyP6S97fU0UWyP6S97fU0UDQDQgaKKQ0SxSntPaK2KY2BYk0VRlU0rmdwoIopML8cltDaD2xq5yHZUdle4bzzMAFpHilozAY74oooDGTua1dRziihD0HZNk1ijWy5O6GzRq5ouSlxT3qg08DunUbAu62d3VdAASacBmfgIoo22y46zra23tD22JY10qSSgHAKuEeHhOioK6UBIyrU05nfoTFFOS29e3jMmZw13qLZSuYRgw0BK4kxHyw5d86PpftM2N3tLRe12LPk7nCG8Os36ab4op0eL44P5v+0/48rsEAAA0hWiinQ84EqQSRmpzI3qeIO9eW7dwk1zIpFFAo3m0xGu4ZD7nx+wgkXONFIFpEyitBlFFAndrLOXggiikz4BEVNBrp/2VLkvtGNpuOS13KNMvM/qMeKBroAPhJAxopcQYQb6evGKKRRhX9MLnnRh46/EGVoopz36Og2QP5S97fU0eKKQP//Z"
    },{
      "name":"Radhika Ahuja",
      "position":"President",
      "occupation":"abc company",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLM0puwCNlVCZHQdUcaZB_j1YlRBrdqd67A&usqp=CAU"
    },{
      "name":"Rishabh Bhandari",
      "position":"President",
      "occupation":"abc company",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0Dp6BK5E9V8lkUcCYRcL9LhYrf2NEHSRM4Ko9BSm4wNKP8D9P5wFsgOpqm3K38KQPMY&usqp=CAU"
    },{
      "name":"Shyam Rajgarhia",
      "position":"President",
      "occupation":"abc company",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN3cXzhLEkf_LZJRsbgFqQGCrbCYQROTIjw&usqp=CAU"
    }
  ]
  const [show, setShow] = useState(false);
  const [wish, setWish] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${BASEURL}oldage/${oldageId}`)
      .then(res => res.json())
      .then(data => {
        if(data.status==='success') {
          setData(data.payload)
          console.log(data.payload[2][0]);
        }
    })
  }, [])
  
  if(!data) return <h1>Loading ...</h1>
  else
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
        <Modal.Header closeButton >
          <Modal.Title id="example-custom-modal-styling-title">
            <div className='modal_heading'>
              <div>{data[0][0].name}</div>
              <div className='heading_stars'><StaticStars value={4}/></div>
              <div className='wishlist'>
                {
                  wish?<Button variant='info' onClick={() => setWish(false)}>
                  Wishlist
                  <SuitHeart style={{marginLeft:'5px'}}/>
                </Button>:<Button variant='outline-info' onClick={() => setWish(true)}>
                  Wishlist
                  <SuitHeart style={{marginLeft:'5px'}}/>
                </Button>
                }
              </div>
            </div>
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <div>
            <img src='https://www.theparentscare.com/storage/avatar/450x/acdab1e7ee7fdb24eaed9c85e116e814_1596197538.jpg'
              style={{height:'30%',width:"100%", display:'flex',justifySelf:'center'}}
            />
            <hr style={{width: '100%', height: 1}} />
            <div className="oldage_details">
              <div className="row" style={{alignItems: 'center'}}>
                <GeoAlt/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Address:
                </div>
                <div style={{marginLeft:'1%'}}>{data[0][0].address}</div>
              </div>
              <div className="row" style={{alignItems: 'center'}}>
                <Telephone/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Phone No.:
                </div>
                <div style={{marginLeft:'1%'}}>{data[0][0].phone_no}</div>
              </div>
              <div className="row" style={{alignItems: 'center'}}>
                <Envelope/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Email:
                </div>
                <div style={{paddingLeft:'1%'}}>{data[0][0].email}</div>
              </div>
              <div className="row" style={{alignItems: 'center'}}>
                <Stopwatch/>
                <div className="name" style={{marginLeft:'1%'}}>
                  Visiting Hours:
                </div>
                <div style={{marginLeft:'1%'}}>{data[0][0]?.visiting_hours}</div>
              </div>
            </div>
            <hr style={{width: '100%', height: 1}} />
            <h4>Facilities</h4>
            <div className="facilities row" style={{justifyContent: 'space-evenly'}}>
            <div className="row ai-c">
                <Eyedropper style={{marginRight:'5px'}}/>
                Doctor On Call
              </div>
              <div className="row ai-c">
                <DropletFill style={{marginRight:'5px'}}/>
                Water purifier
              </div>
              <div className="row ai-c">
                <Dice5Fill style={{marginRight:'5px'}}/>
                Indoor Games
              </div>
              {/* <div className="row ai-c">
                <TvFill/>
                Common Room
              </div>   */}
              <div className="row ai-c">
                <Basket2Fill style={{marginRight:'5px'}}/>
                Regular Outings
              </div> 
              <hr style={{width: '100%', height: 1}} />

            </div>
            <h4>Members of oldage</h4>
            <div className="members">
              <MemberCard data={members[0]}/>
              <MemberCard data={members[1]}/>
              <MemberCard data={members[2]}/>
              <MemberCard data={members[3]}/>
            </div>
            <br/>
            <BankDetails details={data[1][0]}/>
            <hr style={{width: '100%', height: 1}} />
            <h4>Reviews</h4>
            <Review allReviews={data[2]}/>
            <hr style={{width: '100%', height: 1}} />
            <h4>Add Review</h4>
            <AddComment oldageId={oldageId}/>
          </div>
        </Modal.Body>
      
      </Modal>
    
    </>
  );
}

export default MyModal
