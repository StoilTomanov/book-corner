import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { About } from './About/About';
import { Catalog } from './Catalog/Catalog';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Home } from './Home/Home';
import { EditBook } from './EditBook/EditBook';
import { CreateBook } from './CreateBook/CreateBook';
import { Profile } from './Profile/Profile';
import { Upcoming } from './Upcoming/Upcoming';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { Privacy } from './Privacy/Privacy';
import { Contact } from './Contact/Contact';
import { Careers } from './Careers/Careers';
import { Delivery } from './Delivery/Delivery';
import { FAQ } from './FAQ/FAQ';

function App () {
  return (
    <div className="App">
      <Header />
      <main id='main-container'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreateBook />} />
          <Route path='/edit' element={<EditBook />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/faq' element={<FAQ />} />
          {/* TODO: 404 */}
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;
