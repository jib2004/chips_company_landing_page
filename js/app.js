let plus = document.getElementById('plus');
let minus = document.getElementById('minus')
let p = document.querySelector('.p_tag')
let amt = Number(p.innerText)


plus.addEventListener('click', ()=>{
    amt+=1
    p.innerHTML= amt;
})

minus.addEventListener('click', ()=>{
    amt-=1
    p.innerHTML= amt;
    if(amt <= -1){
        alert("Cannot be less than Zero!!!")  
        amt = 0;
        p.innerHTML= amt;
        return false;  
    }
})
