import { useState } from 'react';
function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={()=>setCounter(counter+1)}>{counter}</button>
  );
}
function App() {
  return (
    <Button />
  );
}

export default App;
