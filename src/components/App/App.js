// [x] finish details view
// [ ] post comment to book record
// [ ] implement login
// [ ] implement register
// [ ] implement edit functionality
// [ ] form validation
// [ ] show quantity in the details view
// [ ] implement admin role
// [ ] implement edit button for book record
// [ ] implement delete button for book record
// [ ] ensure the edit and delete buttons are visible only for the admin
// [ ] complete the filtering in the catalog page
// [ ] complete the filtering in the upcoming page
// [ ] complete the filtering in the on-sale page
// [ ] implement rating
// [ ] users should be able to leave comments/feedback with the rating
// [ ] implement the bin view - modal
// [ ] checkout in bin view
// [ ] implement profile view
// [ ] complete the tabs in the profile view
// [ ] upload avatar for the profile view
// [ ] edit functionality on the profile data (addresses, personal info, etc.)
// [ ] guest should see catalog and details without functional activities (edit, delete, rate, etc.)
// [ ] create modal with the categories
// [ ] show/hide links based on role and authentication
// [ ] complete the contact form
// [ ] create inbox icon for each user
// [ ] create inbox icon for admin
// [ ] user should be able to reply to admin's messages
// [ ] admin should be able to reply to user's messages
// [ ] get a confirmation when Buy is clicked
// [x] add comment to the book model - e.g. {username: Josh123, comment: 'Really cool book'}
// [ ] add guards
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

  );
}

export default App;
