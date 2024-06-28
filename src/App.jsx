import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import How from "./pages/howitworks/How";
import Footer from "./components/footer/Footer";
import Landing from "./pages/landing/Landing";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/HowItWorks" element={<How />} />
        </Routes>
      </TransitionWrapper>
      <Footer />
    </Router>
  );
};

export default App;
