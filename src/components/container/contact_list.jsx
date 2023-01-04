import React, { useState } from 'react';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/form/contactForm';

const ContactListComponent = () => {


    const defaultContact = new Contact('John', '+11 1 111111 ', 'john@mail.com', false);

    const [contacts, setContacts] = useState([defaultContact]);

    function statusContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].online = !tempContacts[index].online;
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }

    function addContact(contact){
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function showAdd(){
        let card = document.getElementById("addContactCard");
        card.style.display = 'block';
        card.scrollIntoView();
    }

    return (
        <div id='contactList'>
            <div className='col-12'>
                <div className='card bg-dark bg-gradient mb-3'>
                    <div className='card-header p-3 row justify-content-around'>
                        <h5 className='col mt-2 '>Your Contacts:</h5>
                        <button className='col-2 btn bg-success' onClick={showAdd}>Add</button>
                    </div>
                    <div className='card-body ' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table className='table'>
                            <thead className='text-light'>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Phone Number</th>
                                    <th scope='col'>Mail</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                    <ContactComponent key={index} contact={contact} status={statusContact} remove={deleteContact}>

                                    </ContactComponent>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactListComponent;
