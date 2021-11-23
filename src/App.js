
import { BrowserRouter,Routes, Route,Outlet  } from 'react-router-dom';
import './App.css';
import Blog from './views/Blog';
import ListadoPeliculas from './views/ListadoPeliculas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />}>
          <Blog />
        </Route>
        <Route path="/" element={<ListadoPeliculas />}>
          <ListadoPeliculas />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
