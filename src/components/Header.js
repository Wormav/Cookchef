import styles from "./Header.module.scss";
import coockchef from "../assets/images/cookchef.png";

function Hearder() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i class="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={coockchef} alt="logo coockchef"></img>
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-solid fa-basket-shopping mr-5"></i>
          <span>pannier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Hearder;
