import Contact from '../Models/Contact';
import ContactCard from './ContactCard';
import './ContactList.css'

interface Props {
    contacts: Contact[];
    onDelete: (index: number) => void;
}


const ContactList = ({contacts, onDelete}: Props) => {
  return (
    <ul className='ContactList'>
        {contacts.map((contact, index) => 
            <ContactCard key={contact.number} contact={contact} onDelete={() => onDelete(index)}/>)}
    </ul>
  )
};

export default ContactList;
