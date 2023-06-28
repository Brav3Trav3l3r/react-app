import { useState } from "react";
import { useReducer } from "react";
import tasksReducer from "./reducer";

export default function App() {
  // const [people, setPeoples] = useState(peoples);
  const [people, dispatch] = useReducer(tasksReducer, peoples);

  let newPerson = {
        id: people.length + 1,
        name: e.target.name.value,
        age: e.target.age.value,
        gender: e.target.gender.value,
      };

  function handleDelete(id) {
    dispatch({
      type: "delete",
      id: id,
    });
  }
  
  function handleAdd(newPeson){
    dispatch({
      type: "add",
      id: people.length + 1,
      person: newPeson
    });
  }
  // const handleAdd = (e) => {
  //   e.preventDefault();
  //  

  //   setPeoples([...people, newPerson]);
  // };

  // const handleDelete = (id) => {
  //   setPeoples(people.filter((e) => e.id !== id));
  // };

  return (
    <>
      <h1>People on Island</h1>
      <ul className="gap-3">
        {people.map((p) => (
          <ul key={p.id} className="border flex gap-4">
            <li>{p.name}</li>
            <li>{p.age}</li>
            <li>{p.gender}</li>
            <button
              onClick={() => handleDelete(p.id)}
              className="bg-red-400 px-4"
            >
              Delete
            </button>
          </ul>
        ))}
      </ul>
      {/* <form
        onSubmit={handleAdd}
        className="flex bg-slate-400 p-4 flex-col gap-2 m-4"
      >
        <input type="text" name="name" className="border" id="" />
        <input type="text" name="age" className="border" id="" />
        <input type="text" name="gender" className="border" id="" />
        <button className="px-2 bg-pink-300 active:scale-95">Add person</button>
      </form> */}
    </>
  );
}

const peoples = [
  { id: 1, name: "Walt", age: 12, gender: "male" },
  { id: 2, name: "Kate", age: 23, gender: "female" },
  { id: 3, name: "Jack", age: 31, gender: "male" },
];
