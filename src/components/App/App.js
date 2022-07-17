import { About } from './About/About';
import './App.css';
import { AuthForms } from './AuthForms/AuthForms';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { CreateBook } from './CreateBook/CreateBook';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AuthForms />
      <Catalog />
      <CreateBook />
      <About />
      <Footer />
    </div>
  );
}

export default App;
