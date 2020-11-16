var shopItems = [["fridge", "Fridge", 109000], ["desktop", "Desktop PC", 49000], ["laptop", "Laptop", 79000], ["microwave", "Microwave", 19000], ["oven", "Oven", 89000]];
cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
totalCost = sessionStorage.getItem("totalCost");
paymentMethod = sessionStorage.getItem("paymentMethod");
var costAfterDiscount = totalCost;


if(paymentMethod == "Card"){
    chosenCard = sessionStorage.getItem("chosenCard");
    cardDiscounts = JSON.parse(sessionStorage.getItem("cardDiscounts"));
    
    var chosenCardDiscountPercentage;
    for(var i = 0; i < cardDiscounts.length; i++){
        if(chosenCard == cardDiscounts[i][0]){
            chosenCardDiscountPercentage = cardDiscounts[i][1];
        }        
    }
    var chosenCardDiscount = (chosenCardDiscountPercentage * totalCost)/100;
    costAfterDiscount = totalCost - chosenCardDiscount;
}else if(paymentMethod == "Cash"){  
    $(".onlyCard").hide();  
    costAfterDiscount = totalCost;
    $("#netAmount").text(costAfterDiscount);   
}

for(var i = 0; i < cartItems.length; i++){
    for(var j = 0; j < shopItems.length; j++){
        if(cartItems[i] == shopItems[j][0]){
            $(".total").before("<tr><td>" + (i+1) + ".</td><td>" + shopItems[j][1] + "</td><td class='price'>" + shopItems[j][2] + "/-</td></tr>");
        }
    }
}

$("#totalNumberOfCartItems").text(cartItems.length);
$("#cartItemTotal").text(totalCost);
$("#paymentMethod").text(paymentMethod);
$("#cardName").text(chosenCard);
$("#discountPercentage").text(chosenCardDiscountPercentage);
$("#discountAmount").text(chosenCardDiscount);
$("#netAmount").text(costAfterDiscount); 





