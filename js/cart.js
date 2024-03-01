document.getElementById("incbtn").addEventListener("click", itemInc);
document.getElementById("decbtn").addEventListener("click", itemDec);

function myShow()
{
    let item_name=window.localStorage.getItem("item_name");
    let item_price=window.localStorage.getItem("item_price");
    let item_no=window.localStorage.getItem("item_no");

    document.getElementById("itemname").innerHTML=item_name;
    document.getElementById("itemprice").innerHTML=item_price;
    document.getElementById("itemqty").innerHTML=item_no;

    document.getElementById("show").innerHTML=item_no;

    let totalPrice=item_price*item_no;
    window.localStorage.setItem("totalPrice", totalPrice);
    document.getElementById("totalprice").innerHTML=totalPrice;

}
myShow();

function itemInc()
{
    let myItemno=document.getElementById("itemqty").innerHTML;
        myItemno++;
        window.localStorage.setItem("item_no", myItemno);
        myShow();
}


function itemDec()
{
    let myItemno=document.getElementById("itemqty").innerHTML;
        myItemno--;
        window.localStorage.setItem("item_no", myItemno);
        myShow();
}