function createCarouselCard(item) {
  return `
    <div class="flex-shrink-0 w-[calc(50%-0.75rem)] sm:w-[calc(50%-1rem)]">
      <div class="bg-[#222222] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 h-full">
        <div class="flex-1 text-center sm:text-left">
          <h2 class="text-white text-base sm:text-lg md:text-xl font-bold mb-2">
            ${item.name}
          </h2>
          <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-3">
            ${item.description}
          </p>
          <div class="bg-red-600 text-white font-bold px-3 py-1.5 rounded-lg inline-block text-xs sm:text-sm">
            MAD ${item.price}
          </div>
        </div>
        <div class="relative flex-shrink-0">
          <div class="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-gradient-to-br from-red-900 to-orange-800">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='./assets/images/home_img/carousel1.png'">
            <button onclick="addToCart(${item.id})" class="absolute bottom-0 right-0 
              bg-white text-black w-8 h-8 sm:w-10 sm:h-10 
              flex items-center justify-center shadow-lg 
              rounded-tl-2xl
              hover:scale-110 transition-transform z-10">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6v12m6-6H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initCarousel(containerId, items, title, titleColor) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }
  
  const carouselHTML = `
    <div class="mb-12 sm:mb-16">
      <div class="flex items-center justify-between mb-6 sm:mb-8 px-4">
        <h1 class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
          ${title} <span class="text-[${titleColor}]">${title === "Today's" ? "menu" : "Sells"}</span>
        </h1>
        <button class="carousel-nav-btn ${containerId}-next bg-white hover:bg-gray-100 text-black rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
      
      <div class="relative overflow-hidden px-4">
        <div class="${containerId}-track flex gap-3 sm:gap-4 transition-transform duration-500 ease-in-out">
          ${items.map(item => createCarouselCard(item)).join('')}
        </div>
      </div>
    </div>
  `;
  
  container.innerHTML = carouselHTML;
  
  let currentPosition = 0;
  const track = container.querySelector(`.${containerId}-track`);
  const nextBtn = container.querySelector(`.${containerId}-next`);
  const totalItems = items.length;
  const itemsToShow = 2; 
  const maxPosition = Math.ceil(totalItems / itemsToShow) - 1;
  
  function updateCarousel() {
    if (!track.children[0]) return;
    
    const cardWidth = track.children[0].offsetWidth;
    const gap = 16; 
    const moveAmount = (cardWidth + gap) * itemsToShow;
    track.style.transform = `translateX(-${currentPosition * moveAmount}px)`;
  }
  
  nextBtn.addEventListener('click', () => {
    if (currentPosition < maxPosition) {
      currentPosition++;
    } else {
      currentPosition = 0; 
    }
    updateCarousel();
  });
  
  window.addEventListener('resize', updateCarousel);
  
  setTimeout(updateCarousel, 100);
}

function createMenuCard(item) {
  return `
    <div class="bg-[#222222] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <div class="flex-1 text-center sm:text-left">
        <h2 class="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
          ${item.name}
        </h2>
        <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
          ${item.description}
        </p>
        <div class="bg-red-600 text-white font-bold px-3 py-2 rounded-lg inline-block text-xs sm:text-sm">
          MAD ${item.price}
        </div>
      </div>
      <div class="relative">
        <div class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-red-900 to-orange-800">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" onerror="this.src='./assets/images/home_img/carousel1.png'">
          <button onclick="addToCart(${item.id})" class="absolute bottom-0 right-0 
            bg-white text-black w-10 h-10 sm:w-12 sm:h-12 
            flex items-center justify-center shadow-lg 
            rounded-tl-2xl
            hover:scale-110 transition-transform">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6v12m6-6H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}


function initializeCarousels() {
  const possiblePaths = [
    './data/data.json',
    '../data/data.json',
    '/data/data.json'
  ];
  
  fetch(possiblePaths[0])
    .then(res => {
      if (!res.ok) throw new Error('First path failed');
      return res.json();
    })
    .catch(() => {
      return fetch(possiblePaths[1]).then(res => res.json());
    })
    .then(data => {
      console.log('Data loaded successfully:', data);
      
      const todaysMenu = data.filter(item => item.category === "Burger" || item.category === "Pizza").slice(0, 8);
      
      const bestSells = data
        .filter(item => item.category === "Burger" || item.category === "Pizza" || item.category === "Drink")
        .sort((a, b) => b.price - a.price)
        .slice(0, 8);
      
      initCarousel('todays-menu-carousel', todaysMenu, "Today's", "#860000");
      initCarousel('best-sells-carousel', bestSells, "Best", "#860000");
      
     
    })
    .catch(err => console.error('Error loading carousels:', err));
}

// function addToCart(id) {
//   fetch('./data/data.json')
//     .then(res => res.json())
//     .then(data => {
//       const item = data.find(e => e.id === id);
//       let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
      
//       const exist = listProduit.some(p => p.id === id);
      
//       if (exist) {
//         alert("Produit déjà dans le panier");
//       } else {
//         listProduit.push(item);
//         localStorage.setItem("produits", JSON.stringify(listProduit));
//         alert("Produit ajouté au panier");
//       }
//     })
//     .catch(err => console.error('Error:', err));
// }

const burgerImages = [
  "./assets/images/home_img/carousel1.png",  
  "./assets/images/home_img/carousel2.png",  
  "./assets/images/home_img/carousel3.png"   
];

let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const burgerImage = document.getElementById("burger-image");
  
  if (burgerImage && typeof gsap !== 'undefined') {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(burgerImage, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      onComplete: () => {
        currentImageIndex = (currentImageIndex + 1) % burgerImages.length;
        burgerImage.src = burgerImages[currentImageIndex];
      }
    })
    .to(burgerImage, {
      opacity: 1,
      scale: 1,
      duration: 0.5
    })
    .to({}, { duration: 2 });
  }
  
  initializeCarousels();
});

window.addToCart = addToCart;