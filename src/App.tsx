import { Routes, Route } from "react-router-dom";

import Core from "./modules/Core";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Core />} />
      </Routes>
    </>
  );
}

export default App;
