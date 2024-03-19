// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // function handleSubmit(event){
  //   event.preventDefault();
  //   onSubmitUsername(event.target.elements.usernameInput.value);
  // }


  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor={"usernameInput"}>Username:</label>
  //       <input id="usernameInput" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // extra credit - 1

  // const usernameInputRef = React.useRef();

  // function handleSubmit(event){
  //   event.preventDefault();
  //   onSubmitUsername(usernameInputRef.current.value);
  // }


  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor={"usernameInput"}>Username:</label>
  //       <input id="usernameInput" type="text" ref={usernameInputRef}/>
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )


  // extra credit - 2

  // const [errorState, setErrorState] = React.useState(null);

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   onSubmitUsername(event.target.elements.usernameInput.value) // get value by element now.
  // }

  // function handleInputChange(event){
  //   const {value} = event.target;
  //   setErrorState(value === value.toLowerCase() ? null : 'Username must be lower case');
  // }


  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor={"usernameInput"}>Username:</label>
  //       <input id="usernameInput" type="text" onChange={handleInputChange}/>
  //     </div>
  //     <div role="alert">
  //       {errorState}
  //     </div>
  //     <button disabled={Boolean(errorState)} type="submit">Submit</button>
  //   </form>
  // )


  // extra credit - 3

  const [userName, setUserName] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  function handleInputChange(event){
    setUserName(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"usernameInput"}>Username:</label>
        <input id="usernameInput" type="text" value={userName} onChange={handleInputChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
