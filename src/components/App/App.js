// [ ] complete the filtering in the catalog page
// [ ] complete the filtering in the upcoming page
// [ ] complete the filtering in the on-sale page
// [ ] add email validation
// [ ] create modal with the categories
// [ ] get a confirmation when Buy is clicked
// [ ] implement search functionality

// My Place: List of bought books, messages - toggle rows
// Info: Form to update username, email and password, Form to update contacts (birth date, address, telephone, etc) - toggle rows

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
import { OnSale } from './OnSale/OnSale';
import { Details } from './Details/Details';
import { NotFound } from './NotFound/NotFound';

import { AuthContext } from '../../contexts/AuthContext';

import { useSession } from '../../hooks/useSession';
import { GuestGuard } from '../../guards/GuestGuard';
import { LoggedGuard } from '../../guards/LoggedGuard';
import { MyPlace } from './Profile/MyPlace/MyPlace';
import { Info } from './Profile/Info/Info';

function App () {
  const [authData, setAuthData] = useSession('auth', {});

  const authHandler = (authData) => {
    setAuthData(authData);
  }

  return (
    <AuthContext.Provider value={{authData, authHandler}}>
      <div className="App">
        <Header />
        <main id='main-container'>
          <Routes>
            <Route path='/' element={<Navigate to="/home" replace />}></Route>
            <Route path='/home' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={(
              <LoggedGuard>
                <Login />
              </LoggedGuard>
            )} />
            <Route path='/logout' element={<Navigate to="/catalog" replace />}/>
            <Route path='/register' element={(
              <LoggedGuard>
                <Register />
              </LoggedGuard>
            )} />
            <Route path='/create' element={(
              <GuestGuard>
                <CreateBook />
              </GuestGuard>
            )} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/edit/:id' element={(
              <GuestGuard>
                <EditBook />
              </GuestGuard>
            )} />
            <Route path='/profile' element={(
              <GuestGuard>
                <Profile />
              </GuestGuard>
            )}>
              <Route path='/profile/myplace' element={<MyPlace />}></Route>
              <Route path='/profile/info' element={<Info />}></Route>
            </Route>
            <Route path='/upcoming' element={<Upcoming />} />
            <Route path='/sale' element={<OnSale />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
