// [x] finish details view
// [x] implement login
// [x] implement register
// [x] data persist on browser refresh
// [x] add 404 page
// [x] add guards
// [x] implement edit functionality
// [x] implement delete functionality
// [x] form validation
// [x] wrap comment text - currently overflowing  
// [x] update details state when adding a comment
// [x] show buy button in the details page for non-admin users
// [x] implement admin role
// [x] implement edit button for book record
// [x] implement delete button for book record
// [x] ensure the edit and delete buttons are visible only for the admin
// [ ] complete the filtering in the catalog page
// [ ] complete the filtering in the upcoming page
// [ ] complete the filtering in the on-sale page
// [ ] add email validation
// [x] implement rating
// [x] non-admin users should be able to post comments/feedback with the rating
// [ ] implement the bin view - modal
// [ ] checkout in bin view
// [x] implement profile view
// [x] complete the tabs in the profile view
// [ ] upload avatar for the profile view
// [x] finish messages in profile view once they are implemented
// [x] edit functionality on the profile data (addresses, personal info, etc.)
// [x] guest should see catalog and details without functional activities (edit, delete, rate, etc.)
// [ ] create modal with the categories
// [x] show/hide links based on role and authentication
// [x] complete the contact form
// [x] user should be able to reply to admin's messages
// [x] admin should be able to reply to user's messages
// [ ] get a confirmation when Buy is clicked
// [x] add comment to the book model - e.g. {username: Josh123, comment: 'Really cool book'}
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
