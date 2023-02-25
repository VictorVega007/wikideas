import Background from "../../assets/img2.jpg";
import { HomeTitle } from "../HomeTitle/HomeTitle"
import { NavBar } from "../NavBar/NavBar";
import "./Banner.css";
import { SearchInput } from "../SearchInput/SearchInput";

export const Banner = () => {
  return (
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
       height: '700px',
       backgroundSize: 'cover'
       }} className="containeImg">
         <NavBar />
          <HomeTitle />
          <div className="searchInputContainer">
            <SearchInput />
          </div>
    </div>
  )
}
