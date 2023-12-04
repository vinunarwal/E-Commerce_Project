import React from 'react'

function Ninth_page() {
  return (
   <>

<div className='services'>
               <div className='row'>
                  <div className='col-md-4 delivery'>
                     <div className='relative services_bg_icon'>
                        <img src={Icons_bg} alt="Not found" />
                        <img className='delivery_icon' src={Delivery} alt="Not found" />
                     </div>
                     <h3 className='mt-6'>FREE AND FAST DELIVERY</h3>
                     <p className='mt-2'>Free delivery for all orders over $140</p>
                  </div>

                  <div className='col-md-4 customer_service'>
                     <div className='relative services_bg_icon'>
                        <img src={Icons_bg} alt="Not found"></img>
                        <img className='customer_service_icon' src={Headphones} alt="Not found"></img>
                     </div>
                     <h3 className='mt-6'>24/7 CUSTOMER SERVICE</h3>
                     <p className='mt-2'> Friendly 24/7 customer support</p>
                  </div>

                  <div className='col-md-4 guarantee'>
                     <div className='relative services_bg_icon'>
                        <img src={Icons_bg} alt="Not found"></img>
                        <img className='guarantee_icon' src={Check} alt="Not found"></img>
                     </div>
                     <h3 className='mt-6'>MONEY BACK GUARANTEE</h3>
                     <p className='mt-2'>We return money within 30 days</p>
                  </div>

               </div>
            </div>
   
   
   </>
  )
}

export default Ninth_page