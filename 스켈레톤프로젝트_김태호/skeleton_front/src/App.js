import {Route, Routes} from 'react-router-dom';

import Layout from '@components/Layout';
import Home from '@pages/Home';
import Users from '@pages/Users';
import BoardList from '@pages/BoardList';
import Signup from '@pages/Signup';
import BoardDetail from '@pages/BoardDetail';
import BoardUpdate from '@pages/BoardUpdate';
import BoardInsert from '@pages/BoardInsert';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/boards" element={<BoardList />} />
        <Route path="/detail/:id" element={<BoardDetail />} />
        <Route path="/update" element={<BoardUpdate />} />
        <Route path="/insert" element={<BoardInsert />} />
      </Route>
    </Routes>
  );
}

export default App;
