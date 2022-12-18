// import noteContext from "./noteContext";
// import { useContext } from "react";

// function App() {
//   const [state] = useContext(noteContext);
//   return (
//     <div>

//       {
//         state.map((num) => {
//           return (
//             <>
//               <h3>{num.name}</h3>
//             </>
//           )
//         })

//       }


//     </div>
//   )
// }

// export default App;






import React from 'react'
import Table from './Project/Table'

const App = () => {
  return (
    <div>
      <Table />
    </div>
  )
}

export default App