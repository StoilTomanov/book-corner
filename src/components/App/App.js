import { About } from './About/About';
import './App.css';
import { AuthForms } from './AuthForms/AuthForms';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { EditBook } from './EditBook/EditBook';
import { CreateBook } from './CreateBook/CreateBook';
import { Profile } from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AuthForms />
      <Catalog />
      <About />
      <CreateBook />
      <EditBook />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
