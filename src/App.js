import Header from "./component/header";
import Jumbotron from "./component/jumbotron";
import Login from "./component/Login";
import TvMovie from "./component/TvMovie";
import Home from "./pages/home"
import TvShows from "./pages/TvShows"
import { useState } from "react";
import DetailTv from "./pages/detailTv1";

// import react-router-dom
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import DetailMovies from "./pages/detailMovies";
import Profile from "./pages/profile";
import UpgradePlan from "./pages/upgradePlan";
import DropdownProfile from "./component/dropdownprofile";


function App() {
  const [getLogin, setLogin] = useState(false);

  return (
    <Router>
      <Header login={getLogin} masuk={setLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/tvshows" element={<TvShows />} />
        <Route path= "/movies" element={<Movies />} />
        <Route path= "/detailTv" element={<DetailTv />} />
        <Route path= "/detailMovie" element={<DetailMovies />} />
        <Route path= "/profile" element={<Profile />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/upgradeplan" element={<UpgradePlan />} />
        <Route path="/profile" element={<Profile />} />
        <Route path= "/dropdownprofile" element={<DropdownProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
