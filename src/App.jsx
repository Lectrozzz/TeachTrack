// Import react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page file
import Layout from "./layout/Layout.jsx";
import Home from "./page/Home.jsx";
import Summary from "./page/Summary.jsx";
import Tutorial from "./page/Tutorial.jsx";
import About from "./page/About.jsx";
import EditGroup from "./page/EditGroup.jsx";
import NewGroup from "./page/NewGroup.jsx";
import NoPage from "./page/NoPage.jsx";

//Import assets
// import './assets/style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="summary" element={<Summary/>}/>
          <Route path="tutorial" element={<Tutorial/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="newgroup" element={<NewGroup/>}/>
          <Route path="*" element={<NoPage/>} />
          <Route path="editgroup/:selectedId" element={<EditGroup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
