import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NavigationBar from './components/NavigationBar';
import Track from './pages/Track';
import PriceComparison from './pages/PriceComparison';

function App() {
  return (
    <Router>
    <body className="h-full">
      <NavigationBar/>
      <Routes>
      <Route path="/home" exact element={<Home />} />
      <Route path="/" exact element={<SignUp />} />
      <Route path="/track" exact element={<Track />} />
      <Route path="/comparison" exact element={<PriceComparison />} />
      </Routes>
    </body>
    </Router>
  );
}

export default App;
