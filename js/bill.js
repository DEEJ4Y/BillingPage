cartItems = JSON.parse(sessionStorage.getItem("cartItems"));        // Getting the items in the cart
totalCost = sessionStorage.getItem("totalCost");        // Getting the total cost
paymentMethod = sessionStorage.getItem("paymentMethod");        // Getting the payment method
var costAfterDiscount = totalCost;      // Variable to calculate the discount

// Getting payment info in case of a card payment. Hiding the details if otherwise.
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

// Adding all the items in the cart from the 
for(var i = 0; i < cartItems.length; i++){
    $(".total").before("<tr><td>" + (i+1) + ".</td><td>" + cartItems[i][1] + "</td><td style='text-align: center;'>" + cartItems[i][3] +"</td><td class='price'>" + cartItems[i][2] + "/-</td></tr>");
}

// Changing the details in the entire table.
$("#totalNumberOfCartItems").text(cartItems.length);
$("#cartItemTotal").text(totalCost);
$("#paymentMethod").text(paymentMethod);
$("#cardName").text(chosenCard);
$("#discountPercentage").text(chosenCardDiscountPercentage);
$("#discountAmount").text(chosenCardDiscount);
$("#netAmount").text(costAfterDiscount); 





