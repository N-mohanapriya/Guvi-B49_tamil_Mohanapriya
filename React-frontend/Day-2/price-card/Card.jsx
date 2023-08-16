import React from 'react'
import'./Card.css'

function Card() {
  return (
    <div className='card-container'>
        
            <div className='plan-1'>
  
            <header className='card-header'>FREE</header>
            <h1 className='card-plan'>$0/month</h1>
            <ul className='card-list-1'>
            <li>Single User</li>
            <li>50GB storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li >Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Report</li>
            </ul>
        
            <footer className='card-footer'>
            <button className='card-button-1'>Button</button>
            </footer>
             </div>
                 <div className='plan-2'>
                <header className='card-header'>PLUS</header>
                <h1 className='card-plan'>$0/month</h1>
                    <ul className='card-list-2'>
            <li>5 Users</li>
            <li>50GB storage</li>
            <li>Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Report</li>
        </ul>
        
         <footer className='card-footer'>
            <button className='card-button-2'>Button</button>
            </footer>
         </div>
         <div className='plan-3'>
            <header className='card-header'>PRO</header>
            <h1 className='card-plan'>$0/month</h1>
            <ul className='card-list-3'>
            <li>Unlimited Users</li>
            <li>50GB storage</li>
            <li >Unlimited Public Projects</li>
            <li>Community Access</li>
            <li>Unlimited Private Projects</li>
            <li>Dedicated Phone Support</li>
            <li>Free Subdomain</li>
            <li>Monthly Status Report</li>
            </ul>
        
            <footer className='card-footer'>
            <button className='card-button-3'>Button</button>
            </footer>
             </div>
        </div>
    
  )
}

export default Card