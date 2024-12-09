// Create a component 
function App() {
    const name = 'Benny!'
    let message = 'Bye,'
    if (Math.random() > 0.5) {
        message = 'Hello there,';
    }
    const inputType = 'number'
    const minValue = 5;

    const count = 10;

    const firstName = 'Jane';
    const booleanTrue = true;
    const booleanFalse = false;
    const nullValue = null;
    const undefinedValue = undefined;

    return (
        <div> 
            <h1>{ message } {name} The time is: {new Date().toLocaleTimeString()}</h1>
            <input style = {{ border: '3px solid blue' }} type = {inputType} min = {minValue} max ={20}/>
            <br></br>
            <textarea placeholder='Your text here' autoFocus = {true} spellCheck style = {{ border: '1px solid red' }}/>
            <br></br>
            <meter optimum={50}/>
            <div className="wrapper">
                <textarea
                    readOnly={true}
                    maxLength={3}
                    spellCheck
                    style={{backgroundColor: "lightgreen"}}/>
            </div>
            <ul>
                <li>Number: {count}</li>
                <li>String: {firstName}</li>
                <li>True: {booleanTrue}</li>
                <li>False: {booleanFalse}</li>
                <li>Null: {nullValue}</li>
                <li>Undefined: {undefinedValue}</li>
            </ul>
            <div>{1 + 1}</div>
            <div>
                <input type="date" />
                <div>
                    <img src="https://picsum.photos/150/150" alt='bridge' />
                </div>
            </div>
            <br></br>
            <img
                src="https://picsum.photos/id/237/200/300"
                alt="This is a randomly picked photo"
            />
            <br></br>
            <div
                style={{
                    height: '100px',
                    width: '100px',
                    backgroundColor: 'lightblue',
                }}
            />
            <p
                style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    color: 'blue',
                }}
                >
                Press the button below!!!
            </p>
            <button className="btn btn-primary">Submit</button>
            
        </div>
    
    );
}
// named exports
// messageForExport = "This is a named export.";
// export { messageForExport };
export default App;
