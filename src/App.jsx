import { useRef } from "react";

export default function App() {
  const myRef = useRef(null);
  const handleClick = () => {
    myRef.current.focus();
  };

  return (
    <>
      <input ref={myRef} type="text" className="border"/>
      <button className="" onClick={handleClick}>
        Focus me
      </button>
    </>
  );
}
