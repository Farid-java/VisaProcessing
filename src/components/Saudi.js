import React, { useState } from 'react';
import { Button, ButtonDropdown, Dropdown, DropdownItem, DropdownToggle } from 'reactstrap';
import "./Saudi.css";
 
 

function Saudi() {
   
    return (
      <div className="saudi">

         <div className="form">
           <span className="form_title">Saudi Visa register Form</span>
         </div>
           <div className="border"> 
               <div className="row1">
                 <label className="label">ID No</label>
                 <input type={Text} placeholder="Document Id"  className="field"/>
                 <label className="label">Entry Branch</label>

                  
                 
                 <input type={Text} placeholder="select" className="field" />
                  

                 <label className="label">Visa Type</label>
                 <input type={Text} placeholder="select"  className="field" />
               </div>

               <div className="row1">
                 <label className="label">Ref No</label>
                 <input type={Text} placeholder="Ref No..."  className="field"/>
                 <label className="label">Visa Agent</label>
                 <input type={Text} placeholder="select agency" className="field" />
                 <label className="label">1stiqdam office</label>
                 <input type={Text} placeholder="select"  className="field" />
               </div>

               <div className="row1">
                 <label className="label">Stamping Form</label>
                 <input type={Text} placeholder="select"  className="field"/>
                 <label className="label">Visa No</label>
                 <input type={Text} placeholder="select" className="field" />
                 <label className="label">Visa date</label>
                 <input type={Date} placeholder="select date"  className="field" />
               </div>

               <div className="row1">
                 <label className="label">Visa Exp.Date</label>
                 <input type={Text} placeholder="visa exp.date..."  className="field"/>
                 <label className="label">Total visa</label>
                 <input type={Text} placeholder="total visa" className="field" />
                 <label className="label">Service Charge</label>
                 <input type={Text} placeholder="0"  className="field" />
               </div>

               <div className="row1">
                 <label className="label">Agen Commision</label>
                 <input type={Text} placeholder="0"  className="field"/>
                 <label className="label">Sponser Id</label>
                 <input type={Text} placeholder="sponser id" className="field" />
                 <label className="label">Sponser name(English)</label>
                 <input type={Text} placeholder="Sponser name(English)"  className="field" />
               </div>

               <div className="row1">
                 <label className="label">Sponser name(Arabic)</label>
                 <input type={Text} placeholder="Sponser name(Arabic)"  className="field"/>
                 <label className="label">Sponser Mobile</label>
                 <input type={Text} placeholder="sponser mobile" className="field" />
                 <label className="label">Sponser Email</label>
                 <input type={Text} placeholder="sponser mail"  className="field" />
               </div>

               <div className="row1">
                 <label className="label">Sponser Address</label>
                 <textarea  placeholder="sponser address" className="field1" />
                 
                 <label className="label">Remark</label>
                 <textarea  placeholder="Remark.." className="field1" />
               </div>

              

               <div className="border1">
                 <div>
                 <input type={Text} placeholder="sponser mail"  className="field2" />
                 
                 <input type={Text} placeholder="sponser mail"  className="field2" />
                 
                 <input type={Text} placeholder="sponser mail"  className="field2" />
                    <Button   className="saudi_button">Add Profession</Button>
                    <Button   className="saudi_button">Delete Profession</Button>
                    
                 </div>
               </div>
               <Button   className="saudi_formsubmit">Submit</Button>


            
           </div>
        

            
        </div>
    )
}

export default Saudi;
