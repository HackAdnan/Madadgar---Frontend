import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CreateReport from './components/CreateReport'; // Make sure this path is correct

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route path="/createReport" element={<CreateReport />} />
      </Routes>
      </>
  );
}

export default App;
