var input = document.querySelector('#url');
console.log(1,2,3)

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});