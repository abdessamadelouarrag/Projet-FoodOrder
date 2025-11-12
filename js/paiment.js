import { CardPaiment } from "../js/fetchComponents.js";

const btnLivraison = document.getElementById('livraison');
const btnNow = document.getElementById('now');
const bgPaiment = document.getElementById('bg-Paiment');
const sectionHeader = document.getElementById('section-header');
const titlePaiment = document.getElementById('titlePaiment');
const total = document.getElementById('total');
const containerCards = document.getElementById('cards-Paiment');
btnNow.addEventListener('click', () => {
    bgPaiment.style.transform = "translateX(100%)"
    bgPaiment.style.transition = "transform 1s ease"
})
btnLivraison.addEventListener('click', () => {
    bgPaiment.style.transform = "translateX(0%)"
})
sectionHeader.addEventListener('mouseenter', () => {
    titlePaiment.classList.remove('hidden');
    titlePaiment.style.transition = 'opacity 0.8s ease';
    titlePaiment.style.opacity = 1;
});

sectionHeader.addEventListener('mouseleave', () => {
    titlePaiment.style.opacity = 0;
    setTimeout(() => titlePaiment.classList.add('hidden'), 500);
}); 
let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
listProduit.forEach(e=>{
    let card = document.createElement("div")
    card.innerHTML = CardPaiment(e);
    containerCards.append(card);
})

function updateTotal() {
    let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
    let totalPay = 0;

    listProduit.forEach(p => {
        totalPay += Number(p.price) * Number(p.quantity);
    });

    total.textContent = totalPay.toFixed(2) + " MAD";
}


function initQuantityEvents() {
    const cards = document.querySelectorAll("#CardPaiement");

    cards.forEach((card, index) => {
        const minusBtn = card.querySelector("img[alt='icon minus']");
        const plusBtn = card.querySelector("img[alt='icon plus']");
        const quantityInput = card.querySelector("input");

        minusBtn.addEventListener("click", () => changeQuantity(index, -1, quantityInput));
        plusBtn.addEventListener("click", () => changeQuantity(index, +1, quantityInput));
    });
}

function changeQuantity(index, change, quantityInput) {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];

    let newQuantity = produits[index].quantity + change;

    if (newQuantity < 1) {
        newQuantity = 1;
    }

    produits[index].quantity = newQuantity;

    localStorage.setItem("produits", JSON.stringify(produits));

    quantityInput.value = newQuantity;

    updateTotal();
}


initQuantityEvents();
updateTotal();
