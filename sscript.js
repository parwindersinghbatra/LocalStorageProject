

const txtarea = document.getElementById('txtArea');

function information  (){
    
localStorage.setItem('Text Box', txtarea.value);
}

if(localStorage.getItem('Text Box')){
    txtarea.innerHTML =localStorage.getItem('Text Box',txtarea.value);
}

txtarea.addEventListener('input',information);
