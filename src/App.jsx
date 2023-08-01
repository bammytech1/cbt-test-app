// import "./style.scss";
// import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import StudentDashboard from "./components/studentDashboard/StudentDashboard";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" exact element={<Login />} />
//       <Route path="/studentDash/*" element={<StudentDashboard />} />
//     </Routes>
//   );
// }

// export default App;

import "./style.scss";
import Login from "./components/Login/Login";
import StudentDashboard from "./components/studentDashboard/StudentDashboard";
import Result from "./components/result";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/studentDash/*",
    element: <StudentDashboard />,
  },
  {
    path: "/questions",
    element: <div>question component</div>,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
