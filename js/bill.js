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


$("#totalNumberOfCartItems").text(cartItems.length);
$("#cartItemTotal").text(totalCost);
$("#paymentMethod").text(paymentMethod);
$("#cardName").text(chosenCard);
$("#discountPercentage").text(chosenCardDiscountPercentage);
$("#discountAmount").text(chosenCardDiscount);
$("#netAmount").text(costAfterDiscount); 





