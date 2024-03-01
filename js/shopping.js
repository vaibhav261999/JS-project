document.getElementById("add_cart").addEventListener("click", cartItemAdd);

var item_no=0;

function cartItemAdd()
{
  var item_name="Henrix 38C guitar";
  var item_price= 4849 ;
  item_no++;

  window.localStorage.setItem("item_name",item_name);
  window.localStorage.setItem("item_price", item_price);
  window.localStorage.setItem("item_no", item_no);

  document.getElementById("show").innerHTML=item_no;
}