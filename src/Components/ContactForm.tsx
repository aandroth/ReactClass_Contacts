import { FormEvent, useState } from 'react';
import Contact from '../Models/Contact';
import './ContactForm.css'

interface Props {
  onSubmitForm: (contact: Contact) => void;
  onClose: () => void;
}

const ContactForm = ({onSubmitForm, onClose}: Props) => {

  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmitForm({fullName, number: Number(number), isFavorite});
  }
  
  // const verifyNumber = (number: string): boolean => {

  //   if(number.siz)
  // }

  return (
    <form className='ContactForm' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="fullName">Full Name</label>
        <input required
                type="Text" 
                name="fullName" 
                id="fullName" 
                value={fullName}
                 onChange={(e) => setFullName(e.target.value)}/>
        <label htmlFor="number">Number</label>
        <input required
                type="number" 
                name="fullName" 
                id="number" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)}/>
        <label htmlFor="isFavorite">Is Favorite?</label>
        <input type="checkBox" 
                name="fullName" 
                id="isFavorite" 
                checked={isFavorite} 
                onChange={(e) => setIsFavorite(e.target.checked)}/>
        <button onClick={() => onSubmitForm}>Enter</button>
        <button type="button" color="primary" onClick={() => onClose()}>Cancel</button>
    </form>
  )
};

export default ContactForm;
