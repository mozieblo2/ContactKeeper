import React, { useReducer } from 'react';
import * as uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACT, CLEAR_FILTER} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Kevin Home",
                email: "kevin@o2.pl",
                phone: "111-111-111",
                type: "personal"
            },
            {
                id: 2,
                name: "Sara White",
                email: "sara@o2.pl",
                phone: "333-111-111",
                type: "professional"
            },
            {
                id: 3,
                name: "John Leg",
                email: "john@o2.pl",
                phone: "111-333-111",
                type: "personal"
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    
    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete Contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // Set Current Contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update Contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;