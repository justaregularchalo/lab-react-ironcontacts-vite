import "./App.css";
import allContacts from "../src/contacts.json";
import { useState } from "react";

console.log(allContacts);

function App() {
  const firstFiveArr = allContacts.shift();
  const [contactsToShow, setContactsToShow] = useState(allContacts.slice(0, 4));



  const randomAdd = () => {

    const randomContact = (Math.floor(Math.random() * allContacts.length))
    const clone = JSON.parse(JSON.stringify(contactsToShow))
    clone.push(allContacts[randomContact])
    setContactsToShow(clone)

  }

    const sortByName = () => {
    const newArray = Array.from(contactsToShow)
    const orderedByName = newArray.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  setContactsToShow(orderedByName);
};



  const sortByNumber = () => {
  const newArray2 = Array.from(contactsToShow);
  const orderedByNumber = newArray2.slice().sort((a, b) => {
   
    return b.popularity - a.popularity;
  });
  setContactsToShow(orderedByNumber);
};

 const deleteContact = (indexToDelete) => {

  const clone = JSON.parse(JSON.stringify(contactsToShow))
  clone.splice(indexToDelete,1)
  setContactsToShow(clone)


 }




  return (
    <div className="App">
      <h1>Iron Contacts</h1>

      <button onClick={randomAdd}> Add Random Contact</button>
      <button onClick={sortByNumber}> Sort by Popularity</button>      
      <button onClick={sortByName}> Sort by Name</button>


    
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Emmy</th>
            <th>Won Oscar</th>
          </tr>
        </thead>
        <tbody>
          {contactsToShow.map((eachContact) => {
            console.log(eachContact)
            return (
              <tr key={eachContact.id}>
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    alt="contact"
                    width="80px"
                  />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity}</td>
                <td>{eachContact.wonOscar === true ? "🏆" : undefined}</td>
                <td>{eachContact.wonEmmy === true ? "🌟 " : undefined}</td>
                <button onClick={deleteContact}>Delete</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
