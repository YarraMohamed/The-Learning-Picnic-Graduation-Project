import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './shared/Header'
import Footer from './shared/Footer'
import BackgroundImage from '../src/assets/background.jpg'

function App() {
  return (
       <div className='App' style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:'fixed', backgroundSize: 'cover'}}>
      <Header />
      <Outlet />
      <Footer />
     </div>
  );
}

export default App;
