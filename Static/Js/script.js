let valueDisplays = document.querySelectorAll(".num");
let interval = 12000;

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function(){
    startValue += 10;
    valueDisplays.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
      setTimeout(updateCounter, 40)
    }
    }, duration);
});

// Cart

let cartBtn = document.querySelectorAll('.cart-btn')
let cartCircle = document.querySelector('.cart-circle')


let cart = [];

cartBtn.forEach((cartBtn,index)=>{
  cartBtn.addEventListener('click', function(){
    updateCart(index)
  })
})

function updateCart(item){
  let existingItem = cart.find(el=>{
    return el.count===item
  })


if(existingItem){
  ++existingItem.count;

  let total = cart.reduce((accum,curr)=>{
    return accum + curr.count
  }, 0)
  cartCircle.textContent = total;
  return;
}

let newItem = {
  count:item,
}
cart.push(newItem)

let total = cart.reduce((accum,curr)=>{
  return accum + curr.count
}, 0)

cartCircle.textContent = total;
return
}
