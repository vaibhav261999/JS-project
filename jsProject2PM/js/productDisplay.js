

async function proDisplay()
{
    let url="http://localhost:3000/productsa";
   
    let proList="";

    let Obj=await fetch(url);
    let Data=await Obj.json();

    let idno=0;
    Data.map((key)=>{
        idno++;
        proList+=`
        
        <div class="item" id="pro${idno}">
        <div class="watchphoto">
            <img src="images/${key.photo}">
        </div>
        <div class="desc">
           <h2>${key.name}</h2>
           <h1> ${key.designation}</h1>
           <h1> ${key.department}</h1>
           <h1> ${key.basic_salary}</h1>
            <button>Add To Cart</button>
        </div>
      </div>
        
        `;
    });

    document.getElementById("pruductlist").innerHTML=proList;
}


proDisplay();