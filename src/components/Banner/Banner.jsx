import { HomeTitle } from "../HomeTitle/HomeTitle"
import { NavBar } from "../NavBar/NavBar";
import "./Banner.css";
import { SearchInput } from "../SearchInput/SearchInput";
import {} from '../../styles/navbar.scss';
import { StaticImg } from "../../atoms/static-img/StaticImg";

export const Banner = () => {
  return (
    <div style={{height: "750px"}}>
         <NavBar />
          <HomeTitle />
          <div className="searchInputContainer">
            <SearchInput />
          </div>
          <StaticImg />
    </div>
  )
}
