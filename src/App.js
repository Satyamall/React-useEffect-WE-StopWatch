import "./styles.css";
import { useEffect, useState } from "react";

const Countdown = ({ initial }) => {
  const [value, setValue] = useState(initial);
  // * disptach(newValue)
  // * dispatch(prev=>prev+1)
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now());
      setValue((prev) => {
        if (prev - 1 === 0) {
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log(`cleaning up...`);
      clearInterval(id);
    }; // cleanup function
  }, []);
  return (
    <div>
      <h3>Countdown</h3>
      <h3>{value}</h3>
    </div>
  );
};

// * useEffect( callback, dependency array)
// * after render
export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      {!hide && <Countdown initial={5}/>}
      <button onClick={() => setHide(!hide)}>TOGGLE HIDE</button>
    </div>
  );
}
