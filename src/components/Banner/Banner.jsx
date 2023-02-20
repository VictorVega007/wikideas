import Background from "../../assets/img2.jpg";
import { NavBar } from "../NavBar/NavBar";
import "./Banner.css";
import "../NavBar/NavBar.css";
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
          <div className="searchInputContainer">
            <SearchInput />
          </div>
          
      </div>
    
  )
}
