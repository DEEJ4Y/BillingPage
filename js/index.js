var shopItems = [["fridge", "Fridge", 109000], ["desktop", "Desktop PC", 49000], ["laptop", "Laptop", 79000], ["microwave", "Microwave", 19000], ["oven", "Oven", 89000]];
var cardDiscounts = [["Axis Bank", 2], ["SBI", 4], ["HDFC Bank", 10], ["ICICI Bank", 8], ["Bank of Baroda", 6]];

var cartItems = [];
var totalCost;
var chosePaymentMethod = false;
var paymentMethod;
var choseCardType = false;
var chosenCard;

for(var i = 0; i < shopItems.length; i++){
    $(".chooseAppliance").append("<div class='dropdown-item' id='" + shopItems[i][0] + "'><span class='appliance'>" + shopItems[i][1] + "</span><span class='price'>" + shopItems[i][2] + "</span></div>");
}

for(var i = 0; i < cardDiscounts.length; i++){
    $(".selectCardDropdownMenu").append("<span class='dropdown-item'>" + cardDiscounts[i][0] + "</span>");
}

function addToCart(){
    var itemID = $(this).attr("id");
    cartItems.push(itemID);
    updateCartDetails();
    displayAddedItem(itemID);
}

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
}

function displayAddedItem(applianceName){
    var appliance, price;
    for(var i = 0; i < shopItems.length; i++){
        if(applianceName == shopItems[i][0]){
            appliance = shopItems[i][1];
            price = shopItems[i][2];
        }
    }
    $(".cart-item-container").append("<div class='cart-item-row'><span style='float: left; margin-right= 2rem;'>" + cartItems.length + ". " + appliance + "</span><span style='float: right;'>" + price + " </span> </div>");
}

function selectCard(){
    chosenCard =  $(this).text();
    $("#selectCardMenu").text(chosenCard);
    choseCardType = true;
}

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

function checkout(){
    if(cartItems.length === 0){
        alert("There are no items in your cart!");
    }else if(chosePaymentMethod != true){
        alert("Please choose a payment method");
    }else if(paymentMethod == "Card" && choseCardType != true){
        alert("Please choose your card.");
    }else{
        sessionStorage.setItem("shopItems", JSON.stringify(shopItems));
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

$("#selectCardMenu").hide();

$(".chooseAppliance .dropdown-item").click(addToCart);

$(".selectPaymentMethodMenu .dropdown-item").click(selectPaymentMethod);

$(".selectCardDropdownMenu .dropdown-item").click(selectCard);

$(".checkout-button").click(checkout);
