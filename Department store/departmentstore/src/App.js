
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/Home/Login/indexLogin.tsx";
import Main from "../src/Home/Main/indexMain.tsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/main" element={<Main />}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
