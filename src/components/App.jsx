import React, { useState } from "react";

function App() {
  const [fullName, setFullNmae] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;
    setFullNmae(
      name === "fName"
        ? { fName: value, lName: fullName.lName }
        : { fName: fullName.fName, lName: value }
    );
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

// // previous method solotion
// function App() {
//   const [fName, setfNmae] = useState("");
//   const [lName, setlNmae] = useState("");

//   function changeFname(event) {
//     setfNmae(event.target.value);
//   }

//   function changeLname(event) {
//     setlNmae(event.target.value);
//   }
//   return (
//     <div className="container">
//       <h1>
//         Hello {fName} {lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           placeholder="First Name"
//           value={fName}
//           onChange={changeFname}
//         />
//         <input
//           name="lName"
//           placeholder="Last Name"
//           value={lName}
//           onChange={changeLname}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
