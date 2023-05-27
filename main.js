const scoreX = document.querySelector('.counter--current-x');
const scoreO = document.querySelector('.counter--current-o');
const gameButton = document.querySelectorAll('.game-container--button');
const counterX = document.querySelector('.counter-x');
const counterO = document.querySelector('.counter-o');

class ticTac{
    constructor(){
        this.symbol = '';
        this.arrayX = [];
        this.arrayO = [];
    }
    changeInitialSymbol(button){
        if(button === counterX){
            this.symbol = 'x';
            counterX.setAttribute('class', 'counter__selected');
            counterO.setAttribute('class', 'counter counter-o');
        }else{
            this.symbol = 'o';
            counterO.setAttribute('class', 'counter__selected');
            counterX.setAttribute('class', 'counter counter-');
        }
    }
    drawSymbol(button){
        if (this.symbol === '') return
        else if(this.symbol === 'x'){
            button.textContent = 'X';
            this.symbol = 'o';
            this.changeInitialSymbol(counterO);
            this.storePlay(button);
            this. winCondition()
        } else {
            button.textContent = 'O';
            this.symbol = 'x';
            this.changeInitialSymbol(counterX);
            this.storePlay(button);
            this. winCondition()
        }
    }
    storePlay(button){
        if(this.symbol === 'o'){
            this.arrayX.push(button.value)
        } else if(this.symbol === 'x'){
            this.arrayO.push(button.value)
        }
        console.log(this.arrayX , this.arrayO)
    }
    winCondition(){
        if(this.arrayX.includes('1' && '2' && '3' || '3' && '6' && '9' || '1' && '4' && '7' || '7' && '8' && '9' || '7' && '5' && '3' || '1' && '5' && '9')){
            scoreX.textContent += '1'
        }
    }
}

game = new ticTac

counterX.addEventListener('click', ()=>game.changeInitialSymbol(counterX));
counterO.addEventListener('click', ()=>game.changeInitialSymbol(counterO));

gameButton.forEach(
    (button)=>button.addEventListener('click', ()=>{
        game.drawSymbol(button);
})
)
