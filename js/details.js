// for target a btn size

const btns = document.querySelectorAll(".btn-choix");

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        // Reset all buttons

        btns.forEach(reset => {
            reset.style.backgroundColor = "";
            const size = reset.querySelector(".size-food");
            const priceSize = reset.querySelector(".price-size");
            size.style.color = "";
            priceSize.style.backgroundColor = "";
        });

        // Activate the clicked one

        btn.style.backgroundColor = "#181818";
        const size = btn.querySelector(".size-food");
        size.style.color = "white";
        const priceSize = btn.querySelector(".price-size");
        priceSize.style.backgroundColor = "#860000";
    });
});

const plusPriceValue = document.querySelector('.btn-plus');
// console.log(aMed);

plusPriceValue.addEventListener('click', () => {
    const pluS = document.querySelector('#number-total-food');
    let valuePlus = parseInt(pluS.textContent);
    valuePlus++;
    pluS.textContent = valuePlus;

    const totalPrice = document.querySelector('#total-price');
    let valuePrice = parseInt(totalPrice.textContent);
    valuePrice += 50;
    totalPrice.textContent = valuePrice;
})

const minusPriceValue = document.querySelector('.btn-minus')

minusPriceValue.addEventListener('click', () => {
    const minuS = document.querySelector('#number-total-food');
    let valueMinus = parseInt(minuS.textContent);
    if (valueMinus > 1) {
        valueMinus--;
        minuS.textContent = valueMinus;
    }

    const totalPrice = document.querySelector('#total-price');
    let valuePrice = parseInt(totalPrice.textContent);
    if (valuePrice > 50) {
        valuePrice -= 50;
        totalPrice.textContent = valuePrice;
    }
});


function includHTML(id,file){
    fetch(file)
    .then(response => response.text())
    .then(data=>{
        document.getElementById(id).innerHTML = data ; 
    })
    .catch(err => console.log("erreur include file ", err))
}
includHTML("brands" , "../compenents/brands.html")
includHTML("footer" , "../compenents/footer.html")