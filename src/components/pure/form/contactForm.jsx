import React, { useRef } from 'react';
import { Contact } from '../../../models/contact';

const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const phoneRef = useRef('');
    const mailRef = useRef('');

    function addContact(event){
        event.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            phoneRef.current.value,
            mailRef.current.value,
            true
        );
        add(newContact);
        document.getElementById("contactList").scrollIntoView();
        let card = document.getElementById('addContactCard');
        card.style.display = 'none';
        nameRef.current.value = "";
        phoneRef.current.value = "";
        mailRef.current.value = "";

    }

    return (
        <div id='addContactCard' className='card p-3 bg-dark bg-gradient mb-3 border-round' style={{display: 'none'}}>
            <h6 className='mb-4'>Add a new Contact</h6>  
            <form onSubmit={addContact} className='mx-4'>
                <div class="mb-3">
                    <label for="contactName" class="form-label">Name</label>
                    <input ref={nameRef} type="text" class="form-control" id="contactName" placeholder='Insert a name' required autoFocus></input>
                </div>
                <div class="mb-3">
                    <label for="contactNumber" class="form-label">Phone Number</label>
                    <input ref={phoneRef} type="tel" class="form-control" id="contactNumber" placeholder='XXX-XXXX-XXXXXX' required autoFocus></input>
                </div>
                <div class="mb-3">
                    <label for="contactMail" class="form-label">Mail</label>
                    <input ref={mailRef} type="email" class="form-control" id="contactMail" placeholder='user@mail.com' required autoFocus></input>
                </div>
                <button type='submit' className='btn btn-success btn-large ms-2 my-3 col-4'>Add</button>
            </form>
        </div>
    );
}

export default ContactForm;
