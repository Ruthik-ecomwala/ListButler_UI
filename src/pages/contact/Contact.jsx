import React from 'react'
import './contact.css'
import DropdownList from "react-widgets/DropdownList";


const Contact = () => {
  const companyType = [
    { id: 0, name: 'Please Select' },
    { id: 1, name: 'Agency > Amazon PPC Agency'},
    { id: 2, name: 'Agency > Digital Marketing'},
    { id: 3, name: 'Agency > eBay Full Service' },
    { id: 4, name: 'Agency > Multi-Platform' },
    { id: 5, name: 'Agency > Amazon Full Service' },
    { id: 6, name: 'Investor > FBA Aggregator' },
    { id: 7, name: 'Investor > Venture Capital' },
    { id: 8, name: 'Seller > Enterprise Brand' },
    { id: 9, name: 'Seller > Brand Owner' },
    { id: 10, name: 'Seller > Online Retailer' },
    { id: 11, name: 'Seller > Amazon Vendor' },
    { id: 12, name: 'Partner > eCommerce Accounting' },
    { id: 13, name: 'Partner > eCommerce Broker' },
    { id: 14, name: 'Partner > eCommerce Lending' },
    { id: 15, name: 'Partner > Investment Bank' },
    { id: 16, name: 'Partner > Logistics' },
    { id: 17 , name: 'Partner > Marketplace' },
    { id: 18 , name: 'Partner > Solution Provider' },
  ];
  const reason = [
    {id: 0, name: 'Please select'},
    {id: 1, name: 'Schedule a product demo'},
    {id: 2, name: 'Explore partnership opportunity'},
    {id: 3, name: 'Report an issue'},
    {id: 4, name: 'Suggest an improvement'},
    {id: 5, name: 'Turn on product feature'},
    {id: 6, name: 'Request additional capacity or seats'},
    {id: 7, name: 'Others'},
  ]
  return (
    <section className='contact-outer-container'>
      <div className="contact-inner-container">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>Questions, inquiries, or further information? We’d love to hear from you!</p>
        </div>
        <form action="" className='form'>
          <div className='form-group'>
            <div>

              <label for="firstName" className="contact-label">First Name*</label>
              <input type="text" id="firstName" name="firstName" required="true" className="input" />
            </div>

            <div>
              <label for="lastName" className="contact-label">Last Name*</label>
              <input type="text" id="lastName" name="lastName" required="true" className="input" />
            </div>
          </div>
          
          <div className='form-group'>
            <div>
              <label for="email" className="contact-label">Email</label>
              <input type="email" id="email" name="email" required="true" className="input" /> 
            </div>

            <div>
              <label for="contactNumber" className="contact-label">Contact number*</label>
              <input type="tel" id="contactNumber" name="contactNumber" required="true" className="input" />
            </div>
          </div>
          
          <label for="companyName" className="contact-label">Company Name
          <input type="tel" id="companyName" name="companyName" required="false" className="input" /></label>
          
          <label for="companyType" className="contact-label">Company type
            <DropdownList
              data={companyType}
              dataKey='id'
              textField='name'
              defaultValue={0}
            />
          </label>

          <label for="reason" className="contact-label">Reason for getting in touch*
            <DropdownList
              data={reason}
              dataKey='id'
              textField='name'
              defaultValue={0}
            />
          </label>
          
          <label for="reason" className="contact-label"> Further information* </label>
            <textarea name="reason" id="reason"></textarea>
          
         <button type="submit" className="submit">Submit</button>
        </form>
        <p className='contact-note'>The capable and friendly ListButler customer service team is available Monday to Friday from 9:00 AM AEST to 6:00 PM EST.</p>
      </div>    
    </section>
  )
}

export default Contact
