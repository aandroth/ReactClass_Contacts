import { useState } from 'react';
import Contact from '../Models/Contact';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './Home.css'

const Home = () => {

    const [showForm, setShowForm] = useState(false);

    const [contacts, setContacts] = useState<Contact[]>([
        {
            fullName: "Mom",
            number: 9077774444,
            isFavorite: true,
        },
        {
            fullName: "Dad",
            number: 9079994444,
            isFavorite: true,
        },
        {
            fullName: "Bob",
            number: 1117776666,
            isFavorite: false,
        },
    ]);

    const deleteContact = (index: number): void => {
        setContacts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
        // We could also use: setContacts((prev) => {const newArray = prev.slice(0); newArray.splice(index+1); return newArray;})
    }

    const addContact = (contact: Contact): void => {
        setContacts((prev) => [...prev, contact]); /* prev.concat(contact)*/
        setShowForm(false);
    }

  return (
    <div className='Home'>
        {!showForm && <button onClick={() => setShowForm(true)}>Show Form</button>}
        {showForm && <ContactForm onSubmitForm={addContact} onClose={() => {setShowForm(false);}}/>}
        <ContactList contacts={contacts} onDelete={deleteContact}/>
    </div>
  )
};

export default Home;
