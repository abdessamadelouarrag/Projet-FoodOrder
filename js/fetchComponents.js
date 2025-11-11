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

    </div>J
  </div>
  <div class="h-100"></div>
  `;
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
export function CardMenu(produit){
    return `<div
    class="bg-[#222222] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
    <div class="flex-1 text-center sm:text-left">
        <h2 class="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
            ${produit.name}
        </h2>
        <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            ${produit.description}
        </p>
        <div class="bg-red-600 text-white font-bold px-3 py-2 rounded-lg inline-block text-xs sm:text-sm">
            ${produit.price} MAD
        </div>
    </div>

    <div class="relative ">
        <div class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden">
            <img src="${produit.image}" alt="menu" class="w-full h-full object-cover" >

            <button id="btnPanier" class="absolute bottom-0 right-0 
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
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
<footer id="footer" class="bg-black text-white">
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

    body {
      font-family: "Inter", sans-serif;
    }

    .footer-heading {
      color: #860000;
      font-weight: 600;
      font-size: 14px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    .app-store-btn {
      transition: transform 0.2s;
    }

    .app-store-btn:hover {
      transform: translateY(-2px);
    }
  </style>
  <div
    class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8"
  >
    <!-- Mobile Layout -->
    <div class="lg:hidden">
      <div class="text-center mb-8">
        <div class="flex justify-center items-center gap-1 mb-6">
          <img
            src="/assets/images/Footer/logo.png"
            alt="Logo"
            class="max-w-[150px]"
          />
        </div>

        <div class="flex justify-center gap-3 mb-6">
          <a href="#" class="app-store-btn block">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              class="h-9 w-auto"
            />
          </a>

          <a href="#" class="app-store-btn block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              class="h-9 w-auto"
            />
          </a>
        </div>

        <p class="text-gray-400 text-xs leading-relaxed">
          Company # 490039-445, Registered with<br />House of companies.
        </p>
      </div>

      <div class="text-center mb-8">
        <h3 class="footer-heading text-center">
          Get Exclusive Deals in your Inbox
        </h3>

        <div class="flex mb-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="youremail@gmail.com"
            class="flex-1 px-4 py-2.5 rounded-l-full bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none"
          />
          <button
            class="bg-[#860000] px-6 py-2.5 rounded-r-full text-white font-medium text-sm hover:bg-red-700 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>

        <p class="text-gray-400 text-xs mb-6">
          we wont spam, read our
          <a href="#" class="text-gray-400 underline hover:text-white"
            >email policy</a
          >
        </p>

        <div class="flex gap-3 justify-center">
          <a
            href="#"
            class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Mobile sections for Legal Pages and Important Links -->
      <div class="text-center mb-6">
        <h3 class="footer-heading text-center">Legal Pages</h3>
        <ul class="space-y-2.5 text-sm">
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Terms and conditions</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Privacy</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Cookies</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Modern Slavery Statement</a
            >
          </li>
        </ul>
      </div>

      <div class="text-center">
        <h3 class="footer-heading text-center">Important Links</h3>
        <ul class="space-y-2.5 text-sm">
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Get help</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Add your restaurant</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Sign up to deliver</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Create a business account</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden lg:grid grid-cols-5 gap-8">
      <div>
        <div class="flex items-center gap-1 mb-6">
          <img src="/assets/images/Footer/LOGO 2.png" alt="Logo" />
        </div>

        <div class="flex gap-3 mb-6">
          <a href="#" class="app-store-btn block">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              class="h-10 w-auto"
            />
          </a>

          <a href="#" class="app-store-btn block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              class="h-10 w-auto"
            />
          </a>
        </div>

        <p class="text-gray-400 text-xs leading-relaxed">
          Company # 490039-445, Registered with<br />House of companies.
        </p>
      </div>

      <div class="col-span-2 flex flex-col justify-center">
        <h3 class="footer-heading">Get Exclusive Deals in your Inbox</h3>

        <div class="flex mb-3">
          <input
            type="email"
            placeholder="youremail@gmail.com"
            class="flex-1 px-4 py-2.5 rounded-l-full bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none"
          />
          <button
            class="bg-[#860000] px-6 py-2.5 rounded-r-full text-white font-medium text-sm hover:bg-red-700 transition-colors"
          >
            Subscribe
          </button>
        </div>
        <div class="">
          <p class="text-gray-400 text-xs mb-6">
            we wont spam, read our
            <a href="#" class="text-gray-400 underline hover:text-white"
              >email policy</a
            >
          </p>

          <div class="flex gap-3">
            <a
              href="#"
              class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 class="footer-heading">Legal Pages</h3>
        <ul class="space-y-2.5 text-sm">
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Terms and conditions</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Privacy</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Cookies</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Modern Slavery Statement</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h3 class="footer-heading">Important Links</h3>
        <ul class="space-y-2.5 text-sm">
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Get help</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Add your restaurant</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Sign up to deliver</a
            >
          </li>
          <li>
            <a href="#" class="text-white hover:text-red-500 transition-colors"
              >Create a business account</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="bg-[#860000] py-4">
    <div
      class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white"
    >
      <p class="text-center md:text-left">
        Order.uk Copyright 2024, All Rights Reserved.
      </p>
      <div class="flex flex-wrap gap-4 sm:gap-6 justify-center text-center">
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Terms</a>
        <a href="#" class="hover:underline">Pricing</a>
        <a href="#" class="hover:underline whitespace-nowrap"
          >Do not sell or share my personal information</a
        >
      </div>
    </div>
  </div>
</footer>


</body>
</html>
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












if(document.getElementById("navbar")!== null){
    document.getElementById("navbar").innerHTML = Navbar();
}
if(document.getElementById("panier")!== null){
    document.getElementById("panier").innerHTML = Panier();
}
if(document.getElementById("footer")!== null){
    document.getElementById("footer").innerHTML = Footer();
}
if(document.getElementById("map")!== null){
    document.getElementById("map").innerHTML = Map();
}
if(document.getElementById("brands")!== null){
    document.getElementById("brands").innerHTML = Brands();
}


//code js Navbar
document.addEventListener("DOMContentLoaded", () => {
  const PanierBtn = document.getElementById("btnPanier");
  const burgerBtn = document.getElementById("btn_burger");
  const sidebar = document.getElementById("sidebar");
  const cover = document.getElementById("cover");
  const panierSideBar = document.getElementById("panier");

  if (!PanierBtn || !burgerBtn || !sidebar || !cover || !panierSideBar) {
    console.error(" Un des éléments du DOM est introuvable !");
    return;
  }

  burgerBtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
    cover.classList.remove("hidden");
  });

  cover.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    panierSideBar.classList.add("translate-x-full");
    cover.classList.add("hidden");
  });

  PanierBtn.addEventListener("click", () => {
    console.log("🛒 Bouton panier cliqué !");
    panierSideBar.classList.remove("translate-x-full");
    cover.classList.remove("hidden");
  });
});


