import { useState } from 'react';
import "./App.css";

function App() {
  const [name, setName] = useState('Aditya'); // input Form
  const [form, setForm] = useState({email:'', phone:''}); // multiple Input Form

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFormChange = (e) => {
    // It uses spread operator to copy the previous state and then update the specific field indicated by [e.target.name] with the new value e.target.value.
    setForm({...form, [e.target.name]:e.target.value}) // Form is Asynchronous so when you print it, it will show the previous value, as it takes some time to update the value.
  }

  return (
    <>
      {/* You can add different events on components - onClick, onHover */}
      {/* While using input field, if you pre-set its values then you can't update its value. So you have to use onChange event to update its value. */}
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}</p>

      {/* Multiple Input Form */}
      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleFormChange} />
      <br />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleFormChange} /> 
    </>
  );
}

export default App;
