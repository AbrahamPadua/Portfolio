import { useEffect } from "react"


export const Bars = () => {
  useEffect(() => {
    const burger = document.querySelector(".burger")
    burger.addEventListener("click", () => {
      // Show/Close the navbar
      burger.classList.toggle("active")
      document.querySelector(".navbar").classList.toggle("active")
      document.querySelector(".navlinks").classList.toggle("active")
    })
  }, [])

  return (
    <div className="burger">
      <span></span>
    </div>
  );
};