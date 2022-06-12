/* INICIO ========================================== JS MENU */
let listElements = document.querySelectorAll ('.list__button--click'); // variable
let listShow = document.querySelector ('.list__show'); // variable

listElements.forEach(listElement => { // recorro los elementos en 'listElements'
    listElement.addEventListener('click', ()=> { // cada vez que se ejecute un elento que esta siendo revisado en 'listElement' se ejecutara esta funcion, si se cumple la condicional 'click'
        listElement.classList.toggle('arrow'); // esto agrega al primer click y quieta la clase 'arrow' al segundo click
        listShow.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling; // declaro que la variable menu sera igual al hermano adyasente de 'listElement' o en otras palabras el hermano adyasente de la clase 'list__button--click'

        if(menu.clientHeight == '0') { // con 'clientHeight' identifico el alto actual y lo condiciono a que si es igual a '0' pase algo
            height = menu.scrollHeight; // se dice que el height sea igual al height minimo para no desvordarse
        }

    })
});
/* FINAL ========================================== JS MENU */

/* INICIO ========================================== JS SELECTBOX */
const select = document.querySelector('#select'); // variable
const opciones = document.querySelector('#opciones'); // variable

const contenidoSelect = document.querySelector('#select .contenido-select'); // variable
const hiddenInput = document.querySelector('#inputSelect'); // variable

document.querySelectorAll('#opciones > .opcion').forEach((opcion)=> { // aqui llamamos a todas las #opciones y a cada .opcion hacer un evento cumpliendo con colocar una opcion en la funcion '(opcion)=>'
    
    opcion.addEventListener('click' , (e)=> {
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active'); // luego de ejecutada la seleccion y mostrada con toggle eliminas la clase ACTIVE de SELECT eliminando el marco y triangulo
        opciones.classList.toggle('active'); // aca escondo las demas opciones luego de la seleccion, eliminando la clase ACTIVE de OPCIONES 
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText

    })
}); 

select.addEventListener('click', () => { // con esta parte de codigo hago aparecer los ACTIVE
    select.classList.toggle('active');
    opciones.classList.toggle('active');
})

/* FINAL ========================================== JS SELECTBOX */

/* INICIO ========================================== JS BUTTON */
const toggle = document.getElementById("toggle") // variable

toggle.addEventListener ("click", () => {
    
    toggle.classList.toggle ("active");

});
/* FINAL ========================================== JS BUTTON */