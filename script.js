let kg = document.getElementById('kg');
let pound = document.getElementById('pound');
let ounce = document.getElementById('ounce');
let mg = document.getElementById('mg');

kg.addEventListener('input', ()=>{
  pound.value = kg.value * 2.20462
  ounce.value = kg.value * 35.274
  mg.value    = kg.value * 1000000
  if(kg.value == ''){
    pound.value = '';
    ounce.value = '';
    mg.value    = '';
  }

})







