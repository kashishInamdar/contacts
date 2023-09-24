import React, { useEffect, useState } from "react"
import  phonebook  from "../../data/Phonwbook";
import ContactCard from "./../../componenet/ContactCard/ContactCard";
import './App.css'

function App() {
    const [contacts, setContacts] = useState(phonebook);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
     const filteredContacts = phonebook.filter((contact)=>{
        const name = contact.name.toLowerCase();
        const mobile = contact.mobile.toString();

        const query = searchTerm.toLowerCase();

        return (name.includes(query) || mobile.includes(query) )
     })
    setContacts(filteredContacts);  
    },[searchTerm])

    return (
        <>
            <h1 className="text-center" >Contact Baba </h1>
            <input type="text"
                placeholder="Search"
                className="search"
                value={searchTerm}
                onChange={(e)=> {setSearchTerm(e.target.value)}}
            />
            <div>
                {
                    contacts.map((contact, index) => {
                        const { name, mobile } = contact;

                        return <ContactCard key={index} name={name} mobile={mobile} />
                    })
                }
            </div>
            {
              contacts.length === 0 ? <h2 className="text-center">No Contact found </h2> :   null  
            }
               
            
        </>
    )
}


export default App;