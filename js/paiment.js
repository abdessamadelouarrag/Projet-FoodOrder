import { CardPaiment } from "../js/fetchComponents.js";

const btnLivraison = document.getElementById('livraison');
const btnNow = document.getElementById('now');
const bgPaiment = document.getElementById('bg-Paiment');
const sectionHeader = document.getElementById('section-header');
const titlePaiment = document.getElementById('titlePaiment');
const total = document.getElementById('total');
const containerCards = document.getElementById('cards-Paiment');
const form = document.getElementById('orderForm');

let deliveryMethod = 'Livraison';

btnNow.addEventListener('click', () => {
    bgPaiment.style.transform = "translateX(100%)";
    bgPaiment.style.transition = "transform 1s ease";
    deliveryMethod = 'Now';
});

btnLivraison.addEventListener('click', () => {
    bgPaiment.style.transform = "translateX(0%)";
    deliveryMethod = 'Livraison';
});

sectionHeader.addEventListener('mouseenter', () => {
    titlePaiment.classList.remove('hidden');
    titlePaiment.style.transition = 'opacity 0.8s ease';
    titlePaiment.style.opacity = 1;
});

sectionHeader.addEventListener('mouseleave', () => {
    titlePaiment.style.opacity = 0;
    setTimeout(() => titlePaiment.classList.add('hidden'), 500);
}); 

const inputs = {
  firstName: document.getElementById('FirstName'),
  lastName: document.getElementById('LastName'),
  email: document.getElementById('Email'),
  phone: document.getElementById('PhoneNumber'),
  date: document.getElementById('Date'),
  time: document.getElementById('Time'),
};

const errorDivs = {
  firstName: document.getElementById('firstNameError'),
  lastName: document.getElementById('lastNameError'),
  email: document.getElementById('emailError'),
  phone: document.getElementById('phoneError'),
  date: document.getElementById('dateError'),
  time: document.getElementById('timeError'),
};

const validators = {
  firstName: (value) => {
    if (!value.trim()) return 'First Name is required';
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'First Name can only contain letters';
    return '';
  },
  lastName: (value) => {
    if (!value.trim()) return 'Last Name is required';
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Last Name can only contain letters';
    return '';
  },
  email: (value) => {
    if (!value.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
    return '';
  },
  phone: (value) => {
    if (!value.trim()) return 'Phone Number is required';
    if (!/^[\d\s\-\+()]+$/.test(value) || value.replace(/\D/g, '').length < 10) 
      return 'Please enter a valid phone number';
    return '';
  },
  date: (value) => {
    if (!value) return 'Date is required';
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) return 'Date cannot be in the past';
    return '';
  },
  time: (value) => {
    if (inputs.date.value && !value) return 'Time is required when date is selected';
    return '';
  },
};

Object.entries(inputs).forEach(([key, input]) => {
  input.addEventListener('blur', () => validateField(key));
  input.addEventListener('input', () => {
    if (errorDivs[key].textContent) validateField(key);
  });
});

function validateField(fieldName) {
  const value = inputs[fieldName].value;
  const error = validators[fieldName](value);
  
  if (error) {
    errorDivs[fieldName].textContent = error;
    errorDivs[fieldName].classList.remove('hidden');
    inputs[fieldName].classList.add('input-error');
    inputs[fieldName].classList.remove('input-valid');
    return false;
  } else {
    errorDivs[fieldName].textContent = '';
    errorDivs[fieldName].classList.add('hidden');
    inputs[fieldName].classList.remove('input-error');
    inputs[fieldName].classList.add('input-valid');
    return true;
  }
}


form.addEventListener('submit', (e) => {
  let isValid = true;
  Object.keys(validators).forEach(fieldName => {
    if (!validateField(fieldName)) {
      isValid = false;
    }
  });

  if (!isValid) {
    e.preventDefault();
    alert('Please fill in all required fields correctly.');
  }
});

let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
listProduit.forEach(e => {
    let card = document.createElement("div");
    card.innerHTML = CardPaiment(e);
    containerCards.append(card);
});

function updateTotal() {
    let listProduit = JSON.parse(localStorage.getItem("produits")) || [];
    let totalPay = 0;

    listProduit.forEach(p => {
        totalPay += Number(p.price) * Number(p.quantity);
    });

    total.textContent = totalPay.toFixed(2) + " MAD";
}

function changeQuantityCard() {
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

function generateOrderPDF(customerData) {
    const cartItems = JSON.parse(localStorage.getItem("produits")) || [];
    
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    if (window.jspdf && window.jspdf.jsPDF) {
        createPDF(cartItems, customerData);
        return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    
    script.onload = () => {
        console.log('jsPDF loaded successfully');
        createPDF(cartItems, customerData);
    };

    script.onerror = () => {
        console.error('Failed to load jsPDF');
        alert('Failed to load PDF library. Please check your internet connection.');
    };

    document.head.appendChild(script);
}

function createPDF(cartItems, customerData) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const pageWidth = doc.internal.pageSize.width;
        const margin = 20;
        let yPosition = 20;

        doc.setFillColor(145, 1, 26);
        doc.rect(0, 0, pageWidth, 40, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont(undefined, 'bold');
        doc.text('FOOD ORDER+', pageWidth / 2, 25, { align: 'center' });

        doc.setTextColor(0, 0, 0);
        yPosition = 50;

        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.text('Order Receipt', margin, yPosition);
        yPosition += 10;

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        const orderNumber = 'ORD-' + Date.now().toString().slice(-8);
        doc.text(`Order Number: ${orderNumber}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Date: ${customerData.date || new Date().toLocaleDateString()}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Time: ${customerData.time || new Date().toLocaleTimeString()}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Delivery Method: ${deliveryMethod}`, margin, yPosition);
        yPosition += 15;

        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 10;

        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('Customer Information', margin, yPosition);
        yPosition += 8;

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text(`Name: ${customerData.firstName} ${customerData.lastName}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Email: ${customerData.email}`, margin, yPosition);
        yPosition += 6;
        doc.text(`Phone: ${customerData.phone}`, margin, yPosition);
        yPosition += 15;

        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 10;

        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.text('Item', margin, yPosition);
        doc.text('Qty', pageWidth - 80, yPosition);
        doc.text('Price', pageWidth - 60, yPosition);
        doc.text('Total', pageWidth - 35, yPosition);
        yPosition += 8;

        doc.setLineWidth(0.3);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;

        doc.setFont(undefined, 'normal');
        doc.setFontSize(10);
        let subtotal = 0;

        cartItems.forEach((item) => {
            const quantity = item.quantity || 1;
            const price = parseFloat(item.price) || 0;
            const itemTotal = (price * quantity).toFixed(2);
            subtotal += parseFloat(itemTotal);

            let itemName = item.name || 'Unknown Item';
            if (itemName.length > 35) {
                itemName = itemName.substring(0, 32) + '...';
            }
            
            doc.text(itemName, margin, yPosition);
            doc.text(quantity.toString(), pageWidth - 80, yPosition);
            doc.text(`${price.toFixed(2)} MAD`, pageWidth - 60, yPosition);
            doc.text(`${itemTotal} MAD`, pageWidth - 35, yPosition);
            
            yPosition += 7;

            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
        });

        yPosition += 5;
        doc.setLineWidth(0.3);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 10;

        const tax = subtotal * 0.1;
        const deliveryFee = deliveryMethod === 'Livraison' ? 10.00 : 0.00;
        const total = subtotal + tax + deliveryFee;

        doc.setFont(undefined, 'normal');
        doc.text('Subtotal:', pageWidth - 80, yPosition);
        doc.text(`${subtotal.toFixed(2)} MAD`, pageWidth - 35, yPosition, { align: 'right' });
        yPosition += 7;

        doc.text('Tax (10%):', pageWidth - 80, yPosition);
        doc.text(`${tax.toFixed(2)} MAD`, pageWidth - 35, yPosition, { align: 'right' });
        yPosition += 7;

        doc.text('Delivery Fee:', pageWidth - 80, yPosition);
        doc.text(`${deliveryFee.toFixed(2)} MAD`, pageWidth - 35, yPosition, { align: 'right' });
        yPosition += 10;

        doc.setLineWidth(0.5);
        doc.line(pageWidth - 85, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;

        doc.setFont(undefined, 'bold');
        doc.setFontSize(12);
        doc.text('TOTAL:', pageWidth - 80, yPosition);
        doc.text(`${total.toFixed(2)} MAD`, pageWidth - 35, yPosition, { align: 'right' });

        yPosition += 20;
        if (yPosition > 260) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFont(undefined, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text('Thank you for your order!', pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 5;
        doc.text('For questions: support@foodorder.plus', pageWidth / 2, yPosition, { align: 'center' });

        const filename = `Order_${customerData.firstName}_${orderNumber}.pdf`;
        doc.save(filename);

        alert(`✓ Order receipt downloaded as ${filename}\n\nThank you for your order, ${customerData.firstName}!`);
        
        setTimeout(() => {
            localStorage.removeItem('produits');
            window.location.href = '../index.html';
        }, 2000);

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('An error occurred while generating the PDF. Please try again.');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const customerData = {
        firstName: document.getElementById('FirstName').value,
        lastName: document.getElementById('LastName').value,
        email: document.getElementById('Email').value,
        phone: document.getElementById('PhoneNumber').value,
        date: document.getElementById('Date').value,
        time: document.getElementById('Time').value
    };

    const inputs = Object.values(customerData);
    const isValid = inputs.every(value => value && value.trim() !== '');

    if (isValid) {
        let produits = JSON.parse(localStorage.getItem("produits")) || [];
        if(produits.length > 0){
            if(confirm("are you shure about commande")==true){
                let list = [];
                generateOrderPDF(customerData);
                localStorage.seItem("produits",JSON.stringify(list))
                window.location.href = "../Pages/menu.html"
            }
        }else{
            alert("please choose a produit")
            window.location.href = "../Pages/menu.html"
        }
        
        
    }
});

changeQuantityCard();
updateTotal();



//---------------------------------------------
let currentdate =new Date().toLocaleDateString("fr-FR")


 document.getElementById("curr-time-as").textContent = currentdate
