import { Routes, Route } from 'react-router-dom';

import './App.css';
import { About } from './About/About';
import { Catalog } from './Catalog/Catalog';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { EditBook } from './EditBook/EditBook';
import { CreateBook } from './CreateBook/CreateBook';
import { Profile } from './Profile/Profile';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

function App () {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreateBook />} />
          <Route path='/edit' element={<EditBook />} />
          <Route path='/profile' element={<Profile />} />
          {/* TODO: 404 */}
        </Routes>
      <Footer />
    </div>

  );
}

export default App;
