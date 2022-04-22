const btnMenuSecundary = document.querySelector('.menu-aboutList');
const btnsMenuSecundary = document.querySelectorAll('.menu-aboutList-itemBtn');
const header = document.querySelector('#header');

btnMenuSecundary.addEventListener('click', e => {
    
    btnsMenuSecundary.forEach( item => {
        item.classList.remove('is-active');
    });
    
    if(e.target.classList.contains('is-active')){
        e.target.classList.remove('is-active');
    }else{
        e.target.classList.add('is-active');
    }
    
});


window.onscroll = function(){

    let divBtnTop = document.querySelector('#container-btnTop');

    if(window.pageYOffset > 500){
        divBtnTop.removeAttribute('hidden');
    } else {
        divBtnTop.setAttribute('hidden', true);
    }

    if(window.pageYOffset > 0){
        header.classList.add('box-shadow');
    }else{
        header.classList.remove('box-shadow');
    }

}
