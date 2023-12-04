import logoImage from "../assets/img/logo.svg";

export const AppHeader = () => {
  return <div className="app-header-container">
    <img src={logoImage} alt="Image Alt" loading="eager" />
  </div>;
};
