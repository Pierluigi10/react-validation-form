import { useState } from "react";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payload, setPayload] = useState({});

  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const clearPayload = () => {
    setPayload((prev) => ({}));
  };

  const handleName = (e) => {
    let _name = e.target.value;
    if (_name !== "" && _name.length <= 10) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
    setName(_name);
    clearPayload();
  };

  const handlePhone = (e) => {
    let _phone = e.target.value;
    setPhone(_phone);
  };

  const handleButton = (e) => {
    e.preventDefault();
    setPayload((prev) => ({
      ...prev,
      name,
      phone,
    }));
  };

  return (
    <div className="App">
      {/* [{phone}] */}
      <form>
        <fieldset>
          <legend>Order Form</legend>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleName} />
          </div>
          <div className="note">required, maximum 10 characters</div>

          <div className="row">
            <label htmlFor="phone" value={phone} onChange={handlePhone}>
              Phone
            </label>
            <input type="text" id="name" />
          </div>
          <div className="note">e.g. 555-333-2222</div>
          <div className="buttonRow" onClick={handleButton}>
            <button>Register</button>
          </div>
        </fieldset>
      </form>

      {Object.keys(payload).length !== 0 && (
        <pre>payload: {JSON.stringify(payload, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
