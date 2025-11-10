export function Navbar(){
    return `<div class="fixed top-0 left-0 w-full h-[100px] z-[9999]">
    <!-- Barre principale -->
    <div class="flex justify-between items-center h-full px-8 bg-[#101018] text-white">
      <a href="../index.html"><img class="w-[150px]" src="../assets/images/Nav/logo-nar.png" alt="logo foodorder+"></a>
      <ul class="hidden md:flex gap-8">
        <li class="hover:bg-[#91011A] px-4 py-2 rounded-[10px] backdrop-blur-lg"><a href="../index.html">Home</a></li>
        <li class="hover:bg-[#91011A] px-4 py-2 rounded-[10px] backdrop-blur-lg"><a href="../Pages/menu.html">Menu</a>
        </li>
        <li class="hover:bg-[#91011A] px-4 py-2 rounded-[10px] backdrop-blur-lg"><a href="../Pages/about.html">About
            US</a></li>
      </ul>

      <div class="hidden md:flex relative" role="button" id="btnPanier">
        <div class="h-[38px] w-[47px] bg-[#91011A] rounded-[4px]"></div>
        <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="../assets/images/Nav/shopping-cart-icon.svg" alt="cart">
      </div>

      <button id="btn_burger" class="flex md:hidden text-4xl">☰</button>
    </div>

    <!-- pour hide sidebar -->
    <div id="cover" class="hidden fixed  top-0 left-0 right-0 bottom-0 bg-[#181826]/70"></div>

    <!-- Sidebar -->
    <div id="sidebar"
      class="fixed top-0 right-0 h-full w-[300px] bg-[#181826]/70 backdrop-blur-lg border-l border-white/20 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col items-center p-6 space-y-8">

      <!-- Logo -->
      <img class="w-[180px]" src="../assets/images/Nav/logo-nar.png" alt="logo foodorder+">

      <!-- Panier -->
      <div class="relative">
        <div class="h-[40px] w-[50px] bg-[#91011A] rounded-[6px] blur-[1px] border border-[#91011A]/30"></div>
        <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="../assets/images/Nav/shopping-cart-icon.svg" alt="panier">
      </div>

      <!-- Menu -->
      <ul class="flex flex-col gap-6 w-full text-center">
        <li
          class="py-2 border border-white/20 rounded-[50px] backdrop-blur-sm hover:bg-[#91011A] transition duration-300 cursor-pointer">
          <a href="../index.html">Home</a>
        </li>
        <li
          class="py-2 border border-white/20 rounded-[50px] backdrop-blur-sm hover:bg-[#91011A] transition duration-300 cursor-pointer">
          <a href="#Menu">Menu</a>
        </li>
        <li
          class="py-2 border border-white/20 rounded-[50px] backdrop-blur-sm hover:bg-[#91011A] transition duration-300 cursor-pointer">
          <a href="../Pages/about.html">About US</a>
        </li>
      </ul>
    </div>
    <div id="panier"
      class="fixed top-0 right-0 h-full w-[300px] bg-[#181826]/70 backdrop-blur-lg border-l border-white/20 transform translate-x-full transition-transform duration-500 ease-in-out">

    </div>

    <!-- Script -->
    <script type="module">
      import { Panier } from '../js/fetchComponents.js';

      document.getElementById("panier").innerHTML = Panier();

      document.addEventListener("DOMContentLoaded", () => {
        const PanierBtn = document.getElementById("btnPanier");
        const burgerBtn = document.getElementById("btn_burger");
        const sidebar = document.getElementById("sidebar");
        const cover = document.getElementById("cover");
        const panierSideBar = document.getElementById("panier");

        // Ouvrir  le sidebar
        burgerBtn.addEventListener("click", () => {
          sidebar.classList.remove("translate-x-full");
          cover.classList.remove("hidden");
        });

        // Fermer quand on clique sur le cover
        cover.addEventListener("click", () => {
          sidebar.classList.add("translate-x-full");
          panierSideBar.classList.add("translate-x-full");
          cover.classList.add("hidden");
        });

        PanierBtn.addEventListener("click", () => {
          panierSideBar.classList.remove("translate-x-full");
          cover.classList.remove("hidden");
        });
      });

    </script>
  </div>`
}
export function Panier(){
    return ` <div class="w-full max-w-sm bg-[#860000] rounded-lg shadow-2xl h-full relative">
        <!-- Header -->
        <div class="px-4 py-3 rounded-t-lg bg-black absolute top-0">
            <div class="flex items-center">
                <div class="bg-red-600 p-2 rounded">
                    <img src="/assets/images/shopping-cart.png" alt="shopping">
                </div>
                <img src="/assets/images/logo-nar.png" alt="logo" class="w-[50%] ml-16">
            </div>
        </div>

        <div id="elemnt-ajouter">
        </div>


        <!-- Subtotal -->
        <div class="px-4 pb-4 bg-[#860000] w-[300px] fixed bottom-0">
            <hr class="w-full border-black">
            <div class="flex justify-between items-center mb-3">
                <span class="text-white text-sm font-medium">Sub Total:</span>
                <span class="text-white text-xl font-bold">£127.90</span>
            </div>

            <!-- Total to Pay Button -->
            <button
                class="w-full bg-[#fc8906c7] hover:to-yellow-700 text-wh font-bold py-3 rounded-lg mb-2 shadow-lg flex items-center justify-between px-4">
                <span>Total to pay</span>
                <span class="text-xl">£127.90</span>
            </button>

            <!-- Checkout Button -->
            <button class="w-full bg-white text-[#860000] font-bold py-3 rounded-lg shadow-lg">
                Checkout!
            </button>
        </div>
    </div>
</div>`
}
export function CardMenu(){
    return `<div
    class="bg-[#222222] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
    <div class="flex-1 text-center sm:text-left">
        <h2 class="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
            Pack For Squad
        </h2>
        <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks
        </p>
        <div class="bg-red-600 text-white font-bold px-3 py-2 rounded-lg inline-block text-xs sm:text-sm">
            40 MAD
        </div>
    </div>

    <div class="relative ">
        <div class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden">
            <img src="../assets/images/home_img/menu1.jpg" alt="menu" class="w-full h-full object-cover">

            <button class="absolute bottom-0 right-0 
               bg-white text-black w-10 h-10 sm:w-12 sm:h-12 
               flex items-center justify-center shadow-lg 
               rounded-tl-2xl rounded-tr-none rounded-bl-none rounded-br-none
               hover:scale-110 transition-transform">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6v12m6-6H6" />
                </svg>
            </button>
        </div>
    </div>
</div>`
}
export function CardPanier(){
    return `<div id="cart "  class=" max-w-[350px] px-2 py-2  font-P-SemiBold BGG-red flex justify-between border-b-2 border-b-black border-opacity-60 ">
    <div class="flex items-start gap-2">
    <img id="img-cart" src="../assets/images/card_img/plat_panier.png" class="aspect-square max-w-[60px] " alt="pizza"/>
    <div class="flex flex-col py-2 ">
        <span id="title" class="text-white">17” Tandoori Pizza</span>
        <span id="price" class="text-yellow-500">£17.90</span>
    </div></div>


    <div class="flex flex-col gap-1 place-items-center justify-between">
        <svg width="25" height="31" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5962 3.84615H17.3077V2.88462C17.3077 1.29147 16.0162 0 14.4231 0H10.5769C8.98377 0 7.69231 1.29147 7.69231 2.88462V3.84615H2.40385C1.07626 3.84615 0 4.92242 0 6.25V8.17308C0 8.70415 0.430469 9.13461 0.961538 9.13461H24.0385C24.5695 9.13461 25 8.70415 25 8.17308V6.25C25 4.92242 23.9237 3.84615 22.5962 3.84615ZM9.61538 2.88462C9.61538 2.35457 10.0469 1.92308 10.5769 1.92308H14.4231C14.9531 1.92308 15.3846 2.35457 15.3846 2.88462V3.84615H9.61538V2.88462Z"
                  fill="white"/>
            <path d="M1.82391 11.0566C1.65233 11.0566 1.51561 11.2 1.52379 11.3714L2.31705 28.0206C2.39037 29.5614 3.656 30.7682 5.19806 30.7682H19.8002C21.3423 30.7682 22.6079 29.5614 22.6812 28.0206L23.4745 11.3714C23.4827 11.2 23.346 11.0566 23.1744 11.0566H1.82391ZM16.3453 13.4605C16.3453 12.9292 16.7756 12.4989 17.3068 12.4989C17.8381 12.4989 18.2684 12.9292 18.2684 13.4605V25.9605C18.2684 26.4917 17.8381 26.922 17.3068 26.922C16.7756 26.922 16.3453 26.4917 16.3453 25.9605V13.4605ZM11.5376 13.4605C11.5376 12.9292 11.9679 12.4989 12.4991 12.4989C13.0304 12.4989 13.4607 12.9292 13.4607 13.4605V25.9605C13.4607 26.4917 13.0304 26.922 12.4991 26.922C11.9679 26.922 11.5376 26.4917 11.5376 25.9605V13.4605ZM6.72992 13.4605C6.72992 12.9292 7.1602 12.4989 7.69145 12.4989C8.2227 12.4989 8.65299 12.9292 8.65299 13.4605V25.9605C8.65299 26.4917 8.2227 26.922 7.69145 26.922C7.1602 26.922 6.72992 26.4917 6.72992 25.9605V13.4605Z"
                  fill="white"/>
        </svg>
        <div class=" flex   place-items-center justify-between gap-1">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.24146" cy="7.24146" r="7.24146" fill="white"/>
                <line x1="1" y1="-1" x2="7.22201" y2="-1" transform="matrix(-0.999873 -0.0159149 0 -1 11.4629 6.48633)"
                      stroke="#91011A" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="bg-white px-3 rounded-md mx-auto "><span id="qte-text" class="">1</span></div>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.24146" cy="7.24146" r="7.24146" fill="white"/>
                <path d="M7.27734 3.37891L7.27734 11.1762" stroke="#91011A" stroke-width="2" stroke-linecap="round"/>
                <line x1="10.9648" y1="7.14648" x2="3.51947" y2="7.14648" stroke="#91011A" stroke-width="2"
                      stroke-linecap="round"/>
            </svg>
        </div>
    </div>
</div>`
}
export function Footer(){
    return `<div class="bg-black text-white font-[Inter]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center md:text-left place-items-center md:place-items-start">
    <!-- Colonne 1 -->
    <div class="flex flex-col items-center md:items-start">
      <img src="../assets/images/Footer/LOGO 2.png" alt="Logo" class="max-w-[150px] mb-4">
      <div class="flex gap-3 mb-4 justify-center md:justify-start">
        <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" class="h-10" alt="App Store"></a>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" class="h-10" alt="Play Store"></a>
      </div>
      <p class="text-gray-400 text-xs leading-relaxed">
        Company #490039-445<br>Registered with House of Companies.
      </p>
    </div>

    <!-- Colonne 2 -->
    <div class="flex flex-col items-center md:items-start lg:col-span-2">
      <h3 class="text-[#860000] text-sm font-bold mb-4">Get Exclusive Deals in your Inbox</h3>
      <div class="flex mb-3 w-full max-w-md">
        <input type="email" placeholder="youremail@gmail.com"
               class="flex-1 px-4 py-2.5 rounded-l-full bg-white text-gray-900 text-sm focus:outline-none placeholder-gray-400">
        <button class="bg-[#860000] px-6 py-2.5 rounded-r-full text-white text-sm hover:bg-red-700 transition-colors">
          Subscribe
        </button>
      </div>
      <p class="text-gray-400 text-xs mb-4">
        We won’t spam, read our <a href="#" class="underline hover:text-white">email policy</a>
      </p>

      <div class="flex gap-3 justify-center md:justify-start">
        <a href="#" class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 border border-gray-800">
          <img class="w-4 h-4" src="../assets/images/Footer/Facebook.svg">        </a>
        <a href="#" class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 border border-gray-800">
          <img class="w-4 h-4" src="../assets/images/Footer/Instagram.svg">
        </a>
        <a href="#" class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 border border-gray-800">
          <img class="w-4 h-4" src="../assets/images/Footer/TikTok.svg">
        </a>
        <a href="#" class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 border border-gray-800">
          <img class="w-4 h-4" src="../assets/images/Footer/Snapchat.svg">
        </a>
      </div>
    </div>

    <!-- Colonne 3 -->
    <div class="flex flex-col items-center md:items-start">
      <h3 class="text-[#860000] text-sm font-bold mb-4">Legal Pages</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-red-500">Terms & Conditions</a></li>
        <li><a href="#" class="hover:text-red-500">Privacy</a></li>
        <li><a href="#" class="hover:text-red-500">Cookies</a></li>
        <li><a href="#" class="hover:text-red-500">Modern Slavery Statement</a></li>
      </ul>
    </div>

    <!-- Colonne 4 -->
    <div class="flex flex-col items-center md:items-start">
      <h3 class="text-[#860000] text-sm font-bold mb-4">Important Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-red-500">Get help</a></li>
        <li><a href="#" class="hover:text-red-500">Add your restaurant</a></li>
        <li><a href="#" class="hover:text-red-500">Sign up to deliver</a></li>
        <li><a href="#" class="hover:text-red-500">Create a business account</a></li>
      </ul>
    </div>
  </div>

  <!-- Bas du footer -->
  <div class="bg-[#860000] py-4">
    <div
      class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white text-center"
    >
      <p>Order.uk © 2024. All Rights Reserved.</p>
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Terms</a>
        <a href="#" class="hover:underline">Pricing</a>
        <a href="#" class="hover:underline whitespace-nowrap">Do not sell or share my personal information</a>
      </div>
    </div>
  </div>
</div>
`
}
export function Map(){
    return `<div id="cardGoogleMap" class="lg:mx-14 lg:my-8 mx-10 my-7 ">
    <span id="m-title" class="font-sauce  text-center block lg:text-5xl md:text-4xl">Contact<span class="text-red-700">Us</span></span>

    <div id="m-mapContainer" class="rounded-2xl overflow-hidden shadow-lg aspect-video md:aspect-video my-6 max-w-1200 mx-auto relative">
        <iframe
                class="w-full h-full  "
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d379.7294076164799!2d-3.708406058434594!3d40.4125001367544!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1762456898110!5m2!1sen!2ses"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div id="m-onMap" class=" text-white bg-red-700 absolute w-[35%] h-[80%] left-[10%] top-[10%] rounded-xl px-2 lg:px-10">
            <h1 class="font-P-bold lg:text-4xl md:text-xl text-xxs lg:mt-14 mt-3 mb-3 lg:mb-6 md:mt-7 md:mb-3 ">FOOD ORDER+</h1>
            <p class="font-P-reg text-xxs lg:text-xl md:text-sm">Tooley St, London Bridge, London SE1 2TF,
                United Kingdom</p>
            <h2 class="font-P-sBold text-xxs lg:text-2xl md:text-sm md:mt-3 lg:mt-5 ">Phone number</h2>
            <p class="font-P-reg text-xxs lg:text-xl md:text-sm ">+934443-43</p>
            <h2 class="font-P-sBold text-xxs lg:text-2xl md:text-sm md:mt-3 lg:mt-5 ">Website</h2>
            <p class="font-P-reg text-xxs lg:text-xl md:text-sm">https://foodorder.plus/</p>
        </div>
    </div>
</div>`
}
export function Brands(){
    return `<div>
  <div class="title-similare-reseto text-center m-10">
    <h1 class="font-sauce text-[25px] md:text-5xl text-white">Similare <span class="text-[#91011A]">Resterant</span></h1>
  </div>
  <div
    class="all-brands_here flex gap-4 m-4 relative max-w-7xl mx-auto overflow-x-auto overflow-y-hidden pb-4 snap-x  scrollbar-hide">
    <div
      class="brand group relative bg-[#860000] text-center rounded-2xl overflow-hidden shadow-lg min-w-[200px] w-[280px] h-64 md:w-96">
      <img src="/assets/images/BRANDS/macdo.png" alt="McDonald"
        class="absolute top-0 left-0 w-full h-52 object-cover transition-transform duration-300 ease-in-out z-10 md:group-hover:translate-y-14 md:hover:scale-110">
      <h1
        class="absolute bottom-0 left-0 w-full p-4 text-white font-bold transition-all duration-300 ease-in-out z-10 md:group-hover:-translate-y-52 md:group-hover:z-0">
        McDonald's London</h1>
    </div>
    <div
      class="brand group relative bg-[#860000] text-center rounded-2xl overflow-hidden shadow-lg min-w-[200px] w-[280px] h-64 md:w-96">
      <img src="/assets/images/BRANDS/papajhons.png" alt="papajhons"
        class="absolute top-0 left-0 w-full h-52 object-cover transition-transform duration-300 ease-in-out z-10 md:group-hover:translate-y-14 md:hover:scale-110">
      <h1
        class="absolute bottom-0 left-0 w-full p-4 text-white font-bold transition-all duration-300 ease-in-out z-10 md:group-hover:-translate-y-52 md:group-hover:z-0">
        Papa Johns</h1>
    </div>
    <div
      class="brand group bg-[#860000] text-center rounded-2xl overflow-hidden shadow-lg relative min-w-[200px] w-[280px] h-64 md:w-96">
      <img src="/assets/images/BRANDS/kfc.png" alt="KFC"
        class="absolute top-0 left-0 w-full h-52 object-cover transition-transform duration-300 ease-in-out z-10 md:group-hover:translate-y-14 md:hover:scale-110">
      <h1
        class="absolute bottom-0 left-0 w-full p-4 text-white font-bold transition-all duration-300 ease-in-out z-10 md:group-hover:-translate-y-52 md:group-hover:z-0">
        KFC West London</h1>
    </div>
    <div
      class="brand group bg-[#860000] text-center rounded-2xl overflow-hidden shadow-lg relative min-w-[200px] w-[280px] h-64 md:w-96">
      <img src="/assets/images/BRANDS/texas.jpg" alt="texasChicken"
        class="absolute top-0 left-0 w-full h-52 object-cover transition-transform duration-300 ease-in-out z-10 md:group-hover:translate-y-14 md:hover:scale-110">
      <h1
        class="absolute bottom-0 left-0 w-full p-4 text-white font-bold transition-all duration-300 ease-in-out z-10 md:group-hover:-translate-y-52 md:group-hover:z-0">
        Texas Chicken</h1>
    </div>
    <div
      class="brand group bg-[#860000] text-center rounded-2xl overflow-hidden shadow-lg relative min-w-[200px] w-[280px] h-64 md:w-96">
      <img src="/assets/images/BRANDS/burgerknig.jpg" alt="burgerknig"
        class="absolute top-0 left-0 w-full h-52 object-cover transition-transform duration-300 ease-in-out z-10 md:group-hover:translate-y-14 md:hover:scale-110">
      <h1
        class="absolute bottom-0 left-0 w-full p-4 text-white font-bold transition-all duration-300 ease-in-out z-10 md:group-hover:-translate-y-52 md:group-hover:z-0">
        Burger King</h1>
    </div>
    <div
      class="brand group bg-[#860000] text-center rounded-2xl overflow-hidden shadow-lg relative min-w-[200px] w-[280px] h-64 md:w-96">
      <img src="/assets/images/BRANDS/shaurma.png" alt="Shaurma1"
        class="absolute top-0 left-0 w-full h-52 object-cover transition-transform duration-300 ease-in-out z-10 md:group-hover:translate-y-14 ">
      <h1
        class="absolute bottom-0 left-0 w-full p-4 text-white font-bold transition-all duration-300 ease-in-out z-10 md:group-hover:-translate-y-52 md:group-hover:z-0">
        Shaurma1</h1>
    </div>
  </div>
  <style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .scrollbar-hide {
      -ms-overflow-style: none;
      /* IE and Edge */
      scrollbar-width: none;
      /* Firefox */
    }
  </style>
</div>`
}
export function CardPaiment(){
    return `<div id="CardPaiement"
    class="grid grid-cols-9 gap-4 items-center bg-[#91011A] w-[100%] rounded-2xl max-w-5xl h-44 p-4 shadow-lg">

    <div class="col-span-2 flex justify-center items-center">
        <img src="../assets/images/imagesCardPaiment/imgCardPaiment.png" alt="image pizza"
            class="rounded-full object-cover w-28 h-28 max-sm:w-16 max-sm:h-16 sm:w-32 sm:h-32" id="imgCardPaiement">
    </div>

    <div class="col-span-5 flex flex-col text-white">
        <div class="flex  items-center mb-3">
            <h2 class="font-bold text-xl lg:text-2xl">Margareta</h2>
            <div class="bg-[#D02A2A] px-3 py-1 rounded-md">
                <p class="font-semibold">
                    MAD <span id="prix-initial" class="font-semibold">23.90</span>
                </p>
            </div>
        </div>

        <p id="description" class="text-sm lg:text-base leading-snug">1 McChicken™, 1 Big Mac™, 1 RoyalCheeseburger, 3 medium sized French Fries, 3 cold drinks.</p>
    </div>

    <div class="col-span-2 flex justify-center items-center gap-3">
        <button class="bg-white text-[#91011A] rounded-full flex items-center justify-center shadow hover:bg-gray-200 w-10 h-10 max-sm:w-7 max-sm:h-7">
            <img src="../assets/images/icon/-icon.svg" class="max-sm:w-3" alt="icon minus">
        </button>
        
        <input type="text" value="1" class="text-center rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D02A2A]w-12 h-10 max-sm:w-8 max-sm:h-7 max-sm:text-sm">

        <button class="bg-white text-[#91011A] rounded-full flex items-center justify-center shadow hover:bg-gray-200w-10 h-10 max-sm:w-7 max-sm:h-7">
            <img src="../assets/images/icon/+_icon.svg" class="max-sm:w-3" alt="icon plus">
        </button>
    </div>
</div>`
}

