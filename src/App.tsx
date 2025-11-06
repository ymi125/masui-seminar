import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Group1 from './pages/Group1';
import Group2 from './pages/Group2';
import Group3 from './pages/Group3';
import Group4 from './pages/Group4';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/group1" element={<Group1 />} />
  <Route path="/group2" element={<Group2 />} />
  <Route path="/group3" element={<Group3 />} />
  <Route path="/group4" element={<Group4 />} />
      </Routes>
    </>
  );
}
