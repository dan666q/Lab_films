import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FilmsPresentation from './components/FilmsPresentation';
import Detail from './components/Detail';
import News from './components/News';
import Contact from './components/Contact';
import About from './components/About';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import DarkModeSwitch from './components/DarkModeTheme';
// import Breadcrumb from './components/Breadcrumb';

const lightTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export { lightTheme, darkTheme };
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navigation />
        {/* <Breadcrumb/> */}
        <DarkModeSwitch checked={darkMode} onChange={handleDarkModeToggle}/>

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
      </ThemeProvider>

    </div>
  );
}

export default App;
