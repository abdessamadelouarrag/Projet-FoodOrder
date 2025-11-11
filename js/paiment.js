import { CardPaiment } from "../js/fetchComponents.js";

const btnLivraison = document.getElementById('livraison');
const btnNow = document.getElementById('now');
const bgPaiment = document.getElementById('bg-Paiment');
const sectionHeader = document.getElementById('section-header');
const titlePaiment = document.getElementById('titlePaiment');
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
    containerCards.append(card)
})