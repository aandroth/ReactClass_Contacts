import Contact from '../Models/Contact';
import './ContactCard.css'

interface Props {
    contact: Contact;
    onDelete: ()=> void;
}

const ContactCard = ({contact, onDelete}: Props) => {
  return (
    <li className='ContactCard'>
        <p>Full name: {contact.fullName}</p>
        <p>Number: {contact.number}</p>
        <p className={contact.isFavorite ? "favorite" : ""}>&hearts;</p>
        <button onClick={onDelete}>X</button>
    </li>
  )
};

export default ContactCard;
