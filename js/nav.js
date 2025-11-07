document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("btn_burger")
  const mobileMenu = document.getElementById("mobileMenu")

  // Toggle mobile menu visibility
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll("a")
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })
})
