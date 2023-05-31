const scoreX = document.querySelector('.counter--current-x');
const scoreO = document.querySelector('.counter--current-o');
const gameButton = document.querySelectorAll('.game-container--button');
const counterX = document.querySelector('.counter-x');
const counterO = document.querySelector('.counter-o');

class ticTac{
    constructor(){
        this.initialSymbol = '';
        this.symbol = '';
        this.arrayX = [];
        this.arrayO = [];
        this.win = undefined
    }
    changeInitialSymbol(button){
        if(button === counterX){
            this.symbol = 'x';
            counterX.setAttribute('class', 'counter__selected');
            counterO.setAttribute('class', 'counter counter-o');
        }else{
            this.symbol = 'o';
            counterO.setAttribute('class', 'counter__selected');
            counterX.setAttribute('class', 'counter counter-x');
        }
    }
    changeSymbol(symbol){
        this.symbol = symbol
    }
    drawSymbol(button){
        if (this.symbol === '')return
        else if(this.symbol === 'x'){
            button.textContent = 'X';
            this.changeSymbol('o');
            this.storePlay(button);
        } else {
            button.textContent = 'O';
            this.changeSymbol('x');
            this.storePlay(button);
        }
        this.checkWinConditionX();
        this.checkWinConditionO();
    }
    storePlay(button){
        if(this.symbol === 'o'){
            this.arrayX.push(button.value)
        } else if(this.symbol === 'x'){
            this.arrayO.push(button.value)
        }
        console.log(this.arrayX , this.arrayO)
    }
    checkWinConditionX(){
        if (this.arrayX.includes('1') &&
        this.arrayX.includes('2') &&
        this.arrayX.includes('3')){
            this.winX();
        }
        else if (this.arrayX.includes('1') &&
        this.arrayX.includes('5') &&
        this.arrayX.includes('9')){
            this.winX();
        }
        else if (this.arrayX.includes('1') &&
        this.arrayX.includes('4') &&
        this.arrayX.includes('7')){
            this.winX();
        }
        else if (this.arrayX.includes('2') &&
        this.arrayX.includes('5') &&
        this.arrayX.includes('8')){
            this.winX();
        }
        else if (this.arrayX.includes('3') &&
        this.arrayX.includes('6') &&
        this.arrayX.includes('9')){
            this.winX();
        }
        else if (this.arrayX.includes('4') &&
        this.arrayX.includes('5') &&
        this.arrayX.includes('6')){
            this.winX();
        }
        else if (this.arrayX.includes('7') &&
        this.arrayX.includes('8') &&
        this.arrayX.includes('9')){
            this.winX();
        }
        else if (this.arrayX.includes('7') &&
        this.arrayX.includes('5') &&
        this.arrayX.includes('3')){
            this.winX();
        }
    }
    checkWinConditionO(){
        if (this.arrayO.includes('1') &&
        this.arrayO.includes('2') &&
        this.arrayO.includes('3')){
            this.winO();
        }
        else if (this.arrayO.includes('1') &&
        this.arrayO.includes('5') &&
        this.arrayO.includes('9')){
            this.winO();
        }
        else if (this.arrayO.includes('1') &&
        this.arrayO.includes('4') &&
        this.arrayO.includes('7')){
            this.winO();
        }
        else if (this.arrayO.includes('2') &&
        this.arrayO.includes('5') &&
        this.arrayO.includes('8')){
            this.winO();
        }
        else if (this.arrayO.includes('3') &&
        this.arrayO.includes('6') &&
        this.arrayO.includes('9')){
            this.winO();
        }
        else if (this.arrayO.includes('4') &&
        this.arrayO.includes('5') &&
        this.arrayO.includes('6')){
            this.winO();
        }
        else if (this.arrayO.includes('7') &&
        this.arrayO.includes('8') &&
        this.arrayO.includes('9')){
            this.winO();
        }
        else if (this.arrayO.includes('7') &&
        this.arrayO.includes('5') &&
        this.arrayO.includes('3')){
            this.winO();
        }
    }
    winO(){
        window.alert('Player O wins');
        this.clearGame()
    }
    winX(){
        window.alert('Player X wins');
        this.clearGame();
    }
    clearGame(){
            gameButton.forEach((bt) => bt.innerText = '');
            this.symbol = '';
            this.arrayO = [];
            this.arrayX = [];
            counterO.setAttribute('class', 'counter counter-o');
            counterX.setAttribute('class', 'counter counter-x');
    }
}

game = new ticTac

counterX.addEventListener('click', ()=>game.changeInitialSymbol(counterX));
counterO.addEventListener('click', ()=>game.changeInitialSymbol(counterO));

gameButton.forEach(
    (button)=>button.addEventListener('click', ()=>{
        game.drawSymbol(button)}),
)

