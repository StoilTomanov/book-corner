import { About } from './About/About';
import './App.css';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { EditBook } from './EditBook/EditBook';
import { CreateBook } from './CreateBook/CreateBook';
import { Profile } from './Profile/Profile';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Catalog />
      <About />
      <Login />
      <Register />
      <CreateBook />
      <EditBook />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
