import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
