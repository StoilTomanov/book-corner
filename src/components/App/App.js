import './App.css';
import { AuthForms } from './AuthForms/AuthForms';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AuthForms />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
