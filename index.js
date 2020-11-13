$(".dropdown-item").click(function(){
    var itemName = $(this).attr("id");
    alert("You chose a " + itemName);
});