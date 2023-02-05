import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';

import "@fontsource/ubuntu";

import Home from "./pages/home/Home";
import Feed from "./pages/feed/Feed";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path = "/">
            <Route index element = {<Home/>}/>
            <Route path = "/feed" element={<Feed/>}/>
            <Route path = "/notif" element={<Notification/>}/>
            <Route path = "/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
