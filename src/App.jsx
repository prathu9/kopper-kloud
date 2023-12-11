import {Routes, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ContactForm from './pages/contact-form/contact-form.component';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<HomePage/>}/>
        <Route path="/investor_benefits" element={<HomePage/>}/>
        <Route path="/roadmap" element={<HomePage/>}/>
        <Route path="/partners" element={<HomePage/>}/>
        <Route path="/team" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
