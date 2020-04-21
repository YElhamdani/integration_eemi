let form = document.querySelector('form');
let pseudo = document.getElementById('pseudo');

form.addEventListener('submit', (action)=>{
    
    if (pseudo.value.length < 4) 
    {
        alert('nan');
        action.preventDefault();
    }
    else if (pseudo.value == 'eemi')
    {
        alert('eemi deja pris');
        action.preventDefault();
    }
    else 
    {
        alert(pseudo.value);
    }
});