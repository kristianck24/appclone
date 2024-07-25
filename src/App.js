import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard.js";
import TicketPage from "./pages/TicketPage.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/ticket" element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
