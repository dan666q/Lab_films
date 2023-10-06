import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FilmsPresentation from './components/FilmsPresentation';
import Detail from './components/Detail';
import News from './components/News';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<FilmsPresentation />}> </Route>
        <Route path='/Detail/:id' element={<Detail />}></Route>
        <Route path='/Contact/' element={<Contact />}></Route>
        <Route path='/News/' element={<News />}></Route>
        <Route path='/About/' element={<About />}></Route>
        {/* <Route path='/Dashboard/' element={<Dashboard />}></Route>
        <Route path='/EditFilms/:id' element={<EditFilms />}></Route>
        <Route path='/AddFilm/' element={<AddFilm />}></Route> */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
