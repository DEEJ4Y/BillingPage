var shopItems = [["fridge", "Fridge", 109000], ["desktop", "Desktop PC", 49000], ["laptop", "Laptop", 79000], ["microwave", "Microwave", 19000], ["oven", "Oven", 89000]];

for(var i = 0; i < shopItems.length; i++){
    $(".dropdownItems").before("<div class='dropdown-item'><span class='appliance' id=" + shopItems[i][0] + ">" + shopItems[i][1] + "</span><span class='price'>" + shopItems[i][2] + "</span></div>");
}

var cartItems = [];

$(".dropdown-item").click(addToCart);

function addToCart(){
    var itemName = $(this).attr("id");
    cartItems.push(itemName);
    changeNumberOfCartItems();
}

function changeNumberOfCartItems(){    
    var numberOfCartItems = cartItems.length;
    $("#numberOfCartItems").text(numberOfCartItems);
}