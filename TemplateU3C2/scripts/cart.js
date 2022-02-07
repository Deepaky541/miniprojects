let data = JSON.parse(localStorage.getItem("arr"));
console.log(data);
showdata(data);

function showdata(data)
{ let ans=0;
   cart.innerHTML=null;
   data.forEach((el) => {
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = el.strMeal
   
    let image = document.createElement("img");
    image.src = el.strMealThumb;
    let ch = Math.floor(Math.random() * 500);
    let price = document.createElement("p");
    price.innerHTML = "Rs " + ch

      ans = ans +Number(ch);
     total.innerHTML = "Total value:"+ ans;
    div.append(image,name,price);
    cart.append(div);
   });
  
}