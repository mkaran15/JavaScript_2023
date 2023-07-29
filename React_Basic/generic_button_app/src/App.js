import {useState} from 'react';

function Button(props){
  const buttonClick = () => props.handleClick(props.counterValue);
  return(
    <button onClick={buttonClick}>+{props.counterValue}</button>
    );
}

function Display(props){
  return(
    <div>Count Value: {props.value}</div>    
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const increaseCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <div>
      <Button handleClick={increaseCounter} counterValue={1}/>
      <Button handleClick={increaseCounter} counterValue={2}/>
      <Button handleClick={increaseCounter} counterValue={5}/>
      <Button handleClick={increaseCounter} counterValue={10}/>
      <Button handleClick={increaseCounter} counterValue={20}/>
      <Display value={counter}/>
    </div>
  );
}

export default App;
