import { useState } from 'react';
function Button(props){
  return(
      <button onClick={ props.increaseCounter }>+1</button> //to increase the value of counter when button is clicked
  );
}
function Display(props){
  return(
    <p>Counter Value: {props.name}</p> //display the counter value
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter+1);
  return (
    <div>
      <Button increaseCounter={handleClick}/> 
      <Display name={counter}/> 
    </div>
    
  );
}

export default App;
