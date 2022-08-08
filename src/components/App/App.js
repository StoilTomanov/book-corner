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
// [ ] show buy button in the details page for non-admin users
// [ ] show quantity in the details view
// [x] implement admin role
// [x] implement edit button for book record
// [x] implement delete button for book record
// [x] ensure the edit and delete buttons are visible only for the admin
// [ ] complete the filtering in the catalog page
// [ ] complete the filtering in the upcoming page
// [ ] complete the filtering in the on-sale page
// [x] implement rating
// [x] non-admin users should be able to post comments/feedback with the rating
// [ ] implement the bin view - modal
// [ ] checkout in bin view
// [ ] implement profile view
// [ ] complete the tabs in the profile view
// [ ] upload avatar for the profile view
// [ ] edit functionality on the profile data (addresses, personal info, etc.)
// [x] guest should see catalog and details without functional activities (edit, delete, rate, etc.)
// [ ] create modal with the categories
// [x] show/hide links based on role and authentication
// [ ] complete the contact form
// [ ] create inbox icon for each user
// [ ] create inbox icon for admin
// [ ] user should be able to reply to admin's messages
// [ ] admin should be able to reply to user's messages
// [ ] get a confirmation when Buy is clicked
// [x] add comment to the book model - e.g. {username: Josh123, comment: 'Really cool book'}
// [ ] implement search functionality

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
              <Route path='/profile/profile' element={<h1>Hello from Profile</h1>}></Route>
              <Route path='/profile/orders' element={<h1>Hello from Orders</h1>}></Route>
              <Route path='/profile/addresses' element={<h1>Hello from Addresses</h1>}></Route>
              <Route path='/profile/info' element={<h1>Hello from Info</h1>}></Route>
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
