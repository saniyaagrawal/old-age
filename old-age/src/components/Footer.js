import React from 'react'

function Footer() {
    return (
        <div style={{backgroundColor: 'black', height: '50px', bottom: 0}}>
            <div style={{display: 'flex', justifyContent: 'space-between', color: 'white', margin: '20px', height: '100%', alignItems: 'center'}}>
                <div>
                    © All rights reserved 2021
                </div>
                <div>
                    Contact us at: agewell@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Footer
