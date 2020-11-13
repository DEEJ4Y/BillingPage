var cartItems = [];

var choosePaymentMethod = false;

$(".dropdown-item").click(addToCart);

function addToCart(){
    var itemName = $(this).attr("id");
    cartItems.push(itemName);
    changeNumberOfCartItems();
}

function changeNumberOfCartItems(){    
    var numberOfCartItems = cartItems.length + 1;
    $("#numberOfCartItems").html(numberOfCartItems);
}