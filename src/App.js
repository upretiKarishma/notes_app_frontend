
import './App.css';
import { Navbar } from './components/Homepage/Navbar';
import Footer from './components/Homepage/Navbar/Footer/footer';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
