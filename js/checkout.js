function getVal()
{
  
    let data=` 
      Use SBI 
      <br>
      HDFC
      <br>
      ICICI
      <br>
      Axis Online
    `;
    document.getElementById("paymethod").innerHTML=data;
}

function payComplete()
{
    let msg="<h1> <font color='green'> You Order Succefully Placed <br> You will Receive Your Item Within 4 to 5 working Days! Thanks...</font></h1>";
    document.getElementById("msg").innerHTML=msg;
}

function getVal1()
{
  let data=`
    <img src="r1.jpg" style="width:70px; height:30px"> SBI Card
    <img src="r2.jpg" style="width:70px; height:30px"> Rupay Card
    <img src="r3.jpg" style="width:70px; height:30px"> VISA Card
    <img src="r4.jpg" style="width:70px; height:30px"> Master Card
    <br>
    Enter Card No : <input type="text" > / CVV <input type="text">
    <button onclick="payComplete()"> Pay Now</button>
  `
  document.getElementById("paymethod").innerHTML=data;
}




function checkOut()
{
    let totalPrice=window.localStorage.getItem("totalPrice");
    // let totalPrice=document.getElementById("totalprice").value;
    let scharge=totalPrice*20/100;
    let grandTotal=totalPrice+scharge;

    document.getElementById("tprice").innerHTML=totalPrice;
    document.getElementById("scharge").innerHTML=scharge;
    document.getElementById("gtotal").innerHTML=grandTotal;
}
checkOut();