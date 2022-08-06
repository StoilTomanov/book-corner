// [x] finish details view
// [ ] post comment to book record
// [x] implement login
// [x] implement register
// [x] data persist on browser refresh
// [ ] add guards
// [ ] add guard for the home page - logged user should not be able to access the home page
// [ ] implement edit functionality
// [ ] implement delete functionality
// [x] form validation
// [ ] calculate discount
// [ ] show buy button in the details page for non-admin users
// [ ] show quantity in the details view
// [x] implement admin role
// [x] implement edit button for book record
// [x] implement delete button for book record
// [x] ensure the edit and delete buttons are visible only for the admin
// [ ] complete the filtering in the catalog page
// [ ] complete the filtering in the upcoming page
// [ ] complete the filtering in the on-sale page
// [ ] implement rating
// [ ] non-admin users should be able to leave comments/feedback with the rating
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

import { AuthContext } from '../../contexts/AuthContext';

import { useSession } from '../../hooks/useSession';

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
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Login />}/>
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreateBook />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/edit/:id' element={<EditBook />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/upcoming' element={<Upcoming />} />
            <Route path='/sale' element={<OnSale />} />
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
    </AuthContext.Provider>
  );
}

export default App;
