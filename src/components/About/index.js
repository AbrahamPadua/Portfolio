import "../../styles/panel.scss";

const About = () => {
  return (
    <section className="panel about">
      <div className="wrapper">
        <div className="panel_gui">
          <h1>Lore</h1>
          <div></div>
        </div>
        <div
          onClick={() =>
            document.querySelector(".panel.show").classList.remove("show")
          }
          className="close_btn"
        >
          X
        </div>
      </div>
    </section>
  );
};

export default About;
