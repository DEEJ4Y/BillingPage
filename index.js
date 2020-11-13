var shopItems = [["fridge", "Fridge", 109000], ["desktop", "Desktop PC", 49000], ["laptop", "Laptop", 79000], ["microwave", "Microwave", 19000], ["oven", "Oven", 89000]];

for(var i = 0; i < shopItems.length; i++){
    $(".dropdownItems").before("<div class='dropdown-item' id='" + shopItems[i][0] + "'><span class='appliance'>" + shopItems[i][1] + "</span><span class='price'>" + shopItems[i][2] + "</span></div>");
}

var cartItems = [];
var totalCost;

$(".chooseAppliance .dropdown-item").click(addToCart);

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
}

function displayAddedItem(applianceName){
    var appliance, price;
    for(var i = 0; i < shopItems.length; i++){
        if(applianceName == shopItems[i][0]){
            appliance = shopItems[i][1];
            price = shopItems[i][2];
        }
    }
    $(".cartItemsBorder").before("<div class='cart-item-row'><span style='float: left;'>" + appliance + "</span><span style='float: right;'>" + price + "</span></div>");
}