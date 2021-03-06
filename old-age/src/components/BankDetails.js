import React from 'react'
import '../static/css/bankdetails.css'
import { CashStack } from 'react-bootstrap-icons';


function BankDetails() {
    return (
        <div className='bankdetails'>
            <div className='body'>
                <h4><CashStack/> Donate Us At </h4>
                <div className='key_value'>
                    <div className='key'>Account Number: </div>
                    <div className='value'>3456789213 </div>
                </div>
                <div className='key_value'>
                    <div className='key'>Account Name: </div>
                    <div className='value'>KALYAN MITRA SAMITI </div>
                </div>
                <div className='key_value'>
                    <div className='key'>Bank Name: </div>
                    <div className='value'>State Bank Of India </div>
                </div>
                <div className='key_value'>
                    <div className='key'>IFSC Code: </div>
                    <div className='value'>345DR78 </div>
                </div>
            </div>
        </div>
    )
}

export default BankDetails
