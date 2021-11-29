import { useState } from "react";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payload, setPayload] = useState({});

  const handleName = (e) => {
    let _name = e.target.value;
    setName(_name);
  };

  const handlePhone = (e) => {
    let _phone = e.target.value;
    setPhone(_phone);
  };

  return (
    <div className="App">
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
          <div className="buttonRow">
            <button>Register</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
