import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Step1 } from "./page/step1/Step1";
import "./App.css";
import { Rules } from "./page/rules/Rules";
import { Step2 } from "./page/step2/Step2";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/result" element={<Step2 />} />
          </Routes>
        </main>
        <Rules />
      </Router>
    </div>
  );
}

export default App;
