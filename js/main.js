const ParalelsBlock = function(qty,cont){
    const renderButtons = () => {
        let html = '';
        for(i = 1; i <= qty.value; i++){
            html += `<div class="square" data-id="${i}">${i}</div>\n`;
        }
        cont.innerHTML = html;
    };
    
    this.setQtyButtons = () => {
        let btnGo = document.querySelector('.go-btn');
        btnGo.addEventListener('click', renderButtons);

        cont.addEventListener('click', (ev) => {
            if(ev.target.classList.contains('square')){
                ev.target.classList.toggle('show');
            }
        });
    }

}
let qty = document.querySelector('input[name=qty]');
let content = document.querySelector('.content');
const test = new ParalelsBlock(qty, content);
test.setQtyButtons();


    





