document.getElementById("btn").addEventListener("click",(e)=>{
   e.preventDefault();
    alert(" Your order is accepted");

    setTimeout(() => {
        alert("your order is being cooked")
    },3000);
    setTimeout(() => {
        alert("your order is ready")
    },8000);
    setTimeout(() => {
        alert("your order is out for delivery")
    },10000);
    setTimeout(() => {
        alert("Order delivered")
        setTimeout(()=>{
           window.location.href = "index.html"
        },2000)
    },12000);
})
