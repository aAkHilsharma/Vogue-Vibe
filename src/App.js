import Home from './routes/home/home.component.jsx';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';

const Shop = () => {
  return (
    <div>
      <h1>Shop component</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
