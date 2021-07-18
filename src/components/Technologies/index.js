import "../../styles/panel.scss"

const Technologies = () => {
  return (
    <section className="panel techs">
      <div className="wrapper">
        <div className="panel_gui">
          <h1>Items</h1>
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
  )
}

export default Technologies
