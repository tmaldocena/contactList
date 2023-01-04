import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';

import '../../styles/contact.css';

const ContactComponent = ({ contact, status, remove }) => {


    function contactStatus() {
        if(contact.online){
        return (
            <h6 className='mb-0 mt-2'>
                <span className='badge bg-success'>
                    Online
                </span>
            </h6>
        );
        }else{
            return(
                <h6 className='mb-0 mt-2'>
                    <span className='badge bg-secondary'>
                        Offline
                    </span>
                </h6>
            );
        }
    }

    function statusIcon() {
        if(contact.online){
            return (
            <i className='bi bi-wifi contact-action' onClick={() => status(contact)} style={{color:'green', fontSize: '2rem'}}></i>
            ); 
        }else{
            return (
            <i className='bi bi-wifi-off contact-action' onClick={() => status(contact)} style={{color:'grey', fontSize: '2rem'}}></i>
            );
        }
    }

    return (
        <tr className='fs-5 fw-light text-white'>
            <th>
                <span>{ contact.name }</span>
            </th>
            <th>
                <span>{ contact.phone_number }</span>
            </th>
            <th>
                <span>{ contact.email }</span>
            </th>
            <th>
                {contactStatus()}
            </th>
            <th>
                {statusIcon()}
                <i className='bi bi-trash-fill contact-action' onClick={() => remove(contact)} style={{color:'tomato', fontWeight:'bold', fontSize: '2rem'}}></i>
            </th>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    remove: PropTypes.func.isRequired,
    status: PropTypes.func.isRequired
}

export default ContactComponent;
