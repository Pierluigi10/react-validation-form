import './App.scss';

function App() {
  return (
    <div className="App">
		<form>
    <fieldset>
        <legend>Order Form</legend>
        <div className="row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
        </div>
        <div className="row">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="name"/>
        </div>
        <div className="buttonRow">
            <button>Register</button>
        </div>
    </fieldset>
</form>
    </div>
  );
}

export default App;