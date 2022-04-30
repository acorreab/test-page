// console.log('hola');

const formularioBuscar = document.querySelector('.wp-block-search__text-button');
// console.log(formularioBuscar);
formularioBuscar.className += ' form-control mb-2';

const botonBuscar = document.querySelector('.wp-block-search__button');
// console.log(botonBuscar);
botonBuscar.className += ' btn btn-primary btn-block';

const listaWi = document.querySelector('.bluu_wi ul');
// console.log(listaWi);
listaWi.className += ' list-group';

listaWi.querySelectorAll('li').forEach(item => {
    item.className += ' list-group-item';
})
