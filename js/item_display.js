async function display(){
    let url="http://localhost:3000/products";
    let proList="";
    let obj=await fetch(url);
    let data=await obj.json();

    let id_no=0;
    data.map((key)=>{
        id_no++;
        proList+=`  
        <div class="item" id="pro${id_no}">
            <img src="./pro/accguitar/${key.image}" alt="#">
                <h2>${key.price}</h2>
                <p>${key.name} </p>

                <button>BUY NOW</button>
                <button id="add_cart">ADD TO CART</button>
        </div>`;
    })
    document.getElementById("gui").innerHTML=proList;
}

display();