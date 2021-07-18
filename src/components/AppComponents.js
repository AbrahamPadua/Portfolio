export const Profile = () => (
  <section className="profile">
    <div
      className="dp"
      onClick={() => document.querySelector(".about").classList.add("show")}
    ></div>
    <div className="details">
      <div className="bars">
        <div className="health_bar"></div>
        <div className="mana_bar"></div>
      </div>
      <p>Web Developer</p>
    </div>
  </section>
);

export const Skills = () => (
  <section className="skills">
    <div className="skill" onClick={() => document.querySelector(".techs").classList.add("show")}></div>
    <div className="skill" onClick={() => document.querySelector(".techs").classList.add("show")}></div>
    <div className="skill" onClick={() => document.querySelector(".techs").classList.add("show")}></div>
    <div className="skill" onClick={() => document.querySelector(".techs").classList.add("show")}></div>
    <div className="skill" onClick={() => document.querySelector(".techs").classList.add("show")}></div>
  </section>
);

export const Items = () => (
  <section className="items">
    <div className="item"></div>
    <div className="item"></div>
  </section>
);
