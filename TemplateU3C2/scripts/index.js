async function fetchdata(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    let data = await response.json();
    console.log(data);
    showdata(data.meals);
  }
  fetchdata();

  if(localStorage.getItem("arr")=== null)
  {
    localStorage.setItem("arr",JSON.stringify([]));
  }
  let foodie = document.getElementById("menu");
  function showdata(data)
  {
    foodie.innerHTML=null;
    data.forEach((el) => {
      let div = document.createElement("div");

      let name = document.createElement("p");
      name.innerHTML = el.strMeal
     
      let image = document.createElement("img");
      image.src = el.strMealThumb;

      let price = document.createElement("p");
      price.innerHTML = "Rs "+Math.floor(Math.random() * 500);

      let cart = document.createElement("button");
      cart.innerHTML = "ADD"

      cart.addEventListener('click',()=>{
        let arr = JSON.parse(localStorage.getItem("arr"));
        arr.push(el);
        localStorage.setItem("arr",JSON.stringify(arr));
        window.location.href = "cart.html";
      });
       
      div.append(image,name,price,cart);
      foodie.append(div);
    });
  }