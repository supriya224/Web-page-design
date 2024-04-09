
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
          {/* <Header /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
