cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
totalCost = sessionStorage.getItem("totalCost");
paymentMethod = sessionStorage.getItem("paymentMethod");
if(paymentMethod == "Card"){
    chosenCard = sessionStorage.getItem("chosenCard");
}

