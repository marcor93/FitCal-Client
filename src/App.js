import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Activity from "./pages/Activity/Activity";
import Cardio from "./pages/Cardio/Cardio";
import Workout from "./pages/Workout/Workout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
