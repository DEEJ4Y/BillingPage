// 2D Array storing the items for sale              [id, Name, Price]
var shopItems = [["fridge", "Fridge", 109000], ["desktop", "Desktop PC", 49000], ["laptop", "Laptop", 79000], ["microwave", "Microwave", 19000], ["oven", "Oven", 89000]];

// 2D Array storing the different cards that can be used        [Card Name, Discount percentage]
var cardDiscounts = [["Axis Bank", 2], ["SBI", 4], ["HDFC Bank", 10], ["ICICI Bank", 8], ["Bank of Baroda", 6]];

// Array to store the items in the cart
var cartItems = [];
var totalCost;      // To store the total cost
var chosePaymentMethod = false;     // To check if the user has selected a payment method.
var paymentMethod;      // To store the payment method
var choseCardType = false;      // To check if the user has chosen a card in the case of the card payment method.
var chosenCard;     // To store the chosen card in the case of card payment method.

// Dynamically adding the elements in the shopItems array to the dropdown button
for(var i = 0; i < shopItems.length; i++){
    $(".chooseAppliance").append("<div class='dropdown-item' id='" + shopItems[i][0] + "'><span class='appliance'>" + shopItems[i][1] + "</span><span class='price'>" + shopItems[i][2] + "</span></div>");
}

// Dynamically adding the different card types to the card type dropdown button
for(var i = 0; i < cardDiscounts.length; i++){
    $(".selectCardDropdownMenu").append("<span class='dropdown-item'>" + cardDiscounts[i][0] + "</span>");
}

// function to add an appliance to the cart
function addToCart(){
    var itemID = $(this).attr("id");
    cartItems.push(itemID);
    updateCartDetails();
}

// function to update the cart details
function updateCartDetails(){    
    var numberOfCartItems = cartItems.length;
    $("#numberOfCartItems").text(numberOfCartItems);
    totalCost = 0;    
    for(var i = 0; i < numberOfCartItems; i++){
        for(var j = 0; j < shopItems.length; j++){
            if(cartItems[i] == shopItems[j][0]){
                totalCost = totalCost + shopItems[j][2];
            }
        }
    }
    $("#cartItemTotal").text(totalCost);
    if(numberOfCartItems > 3){
        $(".cart-item-container").addClass("scrollable-menu");
    }else{
        $(".cart-item-container").removeClass("scrollable-menu");
    }
    
    displayCartItems();
}

// function to display the items in the cart
function displayCartItems(){
    $(".cart-item-container").html("");
    var appliance, price;
    for(var h = 0; h < cartItems.length; h++){
        applianceID = cartItems[h];
        for(var i = 0; i < shopItems.length; i++){
            if(applianceID == shopItems[i][0]){
                appliance = shopItems[i][1];
                price = shopItems[i][2];
                $(".cart-item-container").append("<div class='cart-item-row'><span style='float: left; margin-right= 2rem;'>" + (h+1) + ". " + appliance + "</span><span style='float: right;'>Rs. " + price + " <button class='btn btn-sm btn-outline-danger remove-button' style='float: right;z-index=-10' id='remove-button-" + h + "'>Remove</button></span> </div>");
            }
        }
    }
    addRemoveButtonListener();
}

// Adds event listener to dynamically added remove buttons.
function addRemoveButtonListener(){
    $(".remove-button").click(removeItemFromCart);
}

// Removes the unwanted item from the array.
function removeItemFromCart(){
    var itemID = $(this).attr("id");
    var positionInCart = itemID.slice(14, itemID.length);
    cartItems.splice(positionInCart, 1);
    updateCartDetails();
}

// function to set the payment method chosen by the user
function selectPaymentMethod(){
    paymentMethod = $(this).text();
    chosePaymentMethod = true;
    $("#paymentMethodMenuButton").text(paymentMethod);
    if(paymentMethod == "Card"){
        $("#selectCardMenu").show();
    }else{
        $("#selectCardMenu").hide();
    }
}

// function to set the card type chosen by the user
function selectCard(){
    chosenCard =  $(this).text();
    $("#selectCardMenu").text(chosenCard);
    choseCardType = true;
}

// function to checkout. Checks if all values have been filled correctly and if so, temporarily stores the details.
function checkout(){
    if(cartItems.length === 0){
        alert("There are no items in your cart!");
    }else if(chosePaymentMethod != true){
        alert("Please choose a payment method");
    }else if(paymentMethod == "Card" && choseCardType != true){
        alert("Please choose your card.");
    }else{
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        sessionStorage.setItem("totalCost", totalCost);
        sessionStorage.setItem("paymentMethod", paymentMethod);
        if(paymentMethod == "Card"){
            sessionStorage.setItem("chosenCard", chosenCard);
            sessionStorage.setItem("cardDiscounts", JSON.stringify(cardDiscounts));
        }
        window.location.href = "../billingPage.html";
    }    
}

// Hiding the select cart type dropdown button till the user chooses card as a payment method
$("#selectCardMenu").hide();

// Event listener for all items that can be added to the cart i.e. Appliances
$(".chooseAppliance .dropdown-item").click(addToCart);

// Event listener for selecting the payment method
$(".selectPaymentMethodMenu .dropdown-item").click(selectPaymentMethod);

// Event listener for selecting the card type in the case of card payment
$(".selectCardDropdownMenu .dropdown-item").click(selectCard);

// Event listener to trigger the checkout procedure
$(".checkout-button").click(checkout);
