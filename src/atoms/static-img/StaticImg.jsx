import {} from "../../styles/navbar.scss";
import staticImg from "../../assets/W.png";

export const StaticImg = () => {
  return (
    <div className="static-img-container">
      <img src={staticImg} alt="static-img" className="static-img"/>
    </div>
  )
}
