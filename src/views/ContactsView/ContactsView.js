import FormAddContact from "components/FormContacts/FormContacts";
import * as React from 'react';
import { useFetchContactsQuery } from "Redux/ContactsReduser/ContactsSliceApi";
import { useSelector } from "react-redux";
import { Div } from "./Contactsview.styled";
import FilterContacts from "components/Filter/FilterContacts";
import ContactsList from "./ContactsList";

const ContactsView = () => {
  const { data } = useFetchContactsQuery();
  const inputFilter = useSelector((state) => state.filter.filter);
  const contactList = data?.filter(item => item.name.toLowerCase().includes(inputFilter.toLowerCase()));

  return (
    <main>
      <Div>
        <FormAddContact />
        <FilterContacts />
      </Div>
      {contactList && <ContactsList contactsList={contactList} />}
    </main>
  );
}

export default ContactsView;