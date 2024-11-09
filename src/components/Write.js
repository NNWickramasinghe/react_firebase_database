import React, { useState } from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate} from 'react-router-dom';

function Write() {

  const navigate = useNavigate();

  let [inputValue1, setInputValue1] = useState("");
  let [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    const db = getDatabase(app);
    const newDOCRef = push(ref(db, "nature/fruits"));
    set(newDOCRef, {
      fruitName: inputValue1,
      fruitDefinition: inputValue2
    }).then(() => {
      alert("Data saved successfully");
    }).catch((error) => {  // Add error as a parameter here
      alert("Error: " + error.message);
    });
  };

  return (
    <div>
      <h1>WRITE/HOMEPAGE</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <br />
      <button onClick={saveData}>Save DATA</button>
      <br/>
      <br/>
      <br/>
      <button className='button1' onClick={ () => navigate("/updateread")}>GO UPDATE READ</button><br/>
      <button className='button1' onClick={ () => navigate("/Read")}>GO READ PAGE</button>
    </div>
  );
}

export default Write;
