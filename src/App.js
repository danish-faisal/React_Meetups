import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />}>
        </Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}>
        </Route>
        <Route path='/favorites' element={<FavoritesPage />}>

        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
