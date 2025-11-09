function includHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.log("erreur include file ", err))
}
includHTML("footer", "../compenents/footer.html")
includHTML("brands", "../compenents/brands.html")
includHTML("map", "../compenents/cardGoogleMap.html")

const btnLivraison = document.getElementById('livraison');
const btnNow = document.getElementById('now');
const bgPaiment = document.getElementById('bg-Paiment');
const sectionHeader = document.getElementById('section-header');
const titlePaiment = document.getElementById('titlePaiment');
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