import './App.css';
import { AuthForms } from './AuthForms/AuthForms';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AuthForms />
      <Footer />
    </div>
  );
}

export default App;
