import { useState } from "react";
import s from './form.module.css';
import { useAddContactMutation, useFetchContactsQuery } from "Redux/SliceApi";
import Notiflix from 'notiflix';

export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('+380');
    const { data } = useFetchContactsQuery();
    const contactList = data;
    const [addContact, { isLoading: isAdd }] = useAddContactMutation();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();

        if (
            contactList.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ||
            contactList.find(contact => contact.number === number)
        ) {
            return Notiflix.Notify.failure(`${name} is already in contacts`);
        }

        await addContact({ name, number });
        resetState();
    };

    const resetState = () => {
        setName('');
        setNumber('+380');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className={s.label_form}>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                    className={s.input_form}
                />
            </label>

            <label className={s.label_form}>Phone Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                    className={s.input_form}
                />
            </label>

            <button type="submit" className={s.btn_form}>{isAdd ? 'ADD...' : "add contacts"}</button>
        </form>
    )
};
