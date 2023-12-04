import loaderImg from "../assets/img/meteor.gif";

export const AppLoader = () => {
  return (
    <section className="app-loader-container">
      <img src={loaderImg} alt="Image Alt" loading="eager" />
    </section>
  );
};
