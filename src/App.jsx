import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Listarticles from './components/articles/Listarticles';
import Insertarticle from './components/articles/Insertarticle';
import Editarticle from './components/articles/Editarticle';
import Viewarticle from './components/articles/Viewarticle';

import Menu from "./compenents/Menu"
import Listcategories from './components/categories/Listcategories';
import Insertcategorie from './components/categories/Insertcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Viewcategorie from './components/categories/Viewcategorie';
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Menu>

        </Menu>

        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/articles/add/" element ={<Insertarticle/>}></Route>
        <Route path="/articles/edit/:id" element={<Editarticle/>}></Route>
        <Route path="/articles/view/:id" element={<Viewarticle/>}></Route>

        <Route path="/categories" element={<Listcategories/>}></Route>
        <Route path="/categories/add/" element ={<Insertcategorie/>}></Route>
        <Route path="/categories/edit/:id" element={<Editcategorie/>}></Route>
        <Route path="/categories/view/:id" element={<Viewcategorie/>}></Route>

        <Route path="/scategories" element={<Listscategories/>}></Route>
        <Route path="/scategories/add/" element ={<Insertscategorie/>}></Route>
        <Route path="/scategories/edit/:id" element={<Editscategorie/>}></Route>
        <Route path="/scategories/view/:id" element={<Viewscategorie/>}></Route>
      </Routes>
    </Router>
      <h1>bienvenue dans notre  site</h1>
    </>
  )
}

export default App
