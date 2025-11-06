  const burgerBtn = document.getElementById("btn_burger");
  const sidebar = document.getElementById("sidebar");
  const cover  = document.getElementById("cover");

    burgerBtn.addEventListener("click", () => {
      sidebar.classList.toggle("translate-x-full");
      cover.classList.toggle("hidden");
    });
    cover.addEventListener("click" , ()=>{
      sidebar.classList.toggle("translate-x-full");
      cover.classList.toggle("hidden");
    })
