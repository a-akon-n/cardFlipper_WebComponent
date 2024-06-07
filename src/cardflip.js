let template = document.createElement('template');
template.innerHTML = `
<div class="message-board"><h1 id="message_txt">Congrats you won</h1></div>
<div class="board">
    <div class="card-container"> <img class="card" data-index="0"></img> </div>
    <div class="card-container"> <img class="card" data-index="1"></img> </div>
    <div class="card-container"> <img class="card" data-index="2"></img> </div>
    <div class="card-container"> <img class="card" data-index="3"></img> </div>
    <div class="card-container"> <img class="card" data-index="4"></img> </div>
    <div class="card-container"> <img class="card" data-index="5"></img> </div>
    <div class="card-container"> <img class="card" data-index="6"></img> </div>
    <div class="card-container"> <img class="card" data-index="7"></img> </div>
    <div class="card-container"> <img class="card" data-index="8"></img> </div>
    <div class="card-container"> <img class="card" data-index="9"></img> </div>
    <div class="card-container"> <img class="card" data-index="10"></img> </div>
    <div class="card-container"> <img class="card" data-index="11"></img> </div>
    <div class="card-container"> <img class="card" data-index="12"></img> </div>
    <div class="card-container"> <img class="card" data-index="13"></img> </div>
    <div class="card-container"> <img class="card" data-index="14"></img> </div>
    <div class="card-container"> <img class="card" data-index="15"></img> </div>
</div>
`;

class CardFlip extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        this.appendChild(template.content.cloneNode(true));
        this.allEqual = arr => arr.every(v => v === arr[0]);

        this.cards = [1, 2, 3, 4, 5, 6, 7, 8];
        this.board = [...this.cards, ...this.cards];
        this.shuffle_cards(this.board);


        this.choice = null;
        this.handleClick = this.handleClick.bind(this);
        this.querySelector(".board").addEventListener('click', this.handleClick);
        const cards = this.querySelectorAll(".card")
        for (var i = 0; i < cards.length; i++){
            this.assignImage(cards[i]);
        }
    }

    handleClick(event) {
        if(event.target.className == "card"){
            const index = event.target.getAttribute("data-index");
            const target = event.target;
            this.Flip(event.target);
            if (this.choice == null){
                this.choice = target;
            }
            else {
                const index_choice = this.choice.getAttribute("data-index");
                if ( index != index_choice){
                    if (this.board[index] == this.board[index_choice]){
                        this.board[index] = 0;
                        this.board[index_choice] = 0;
                        this.choice = null;
                        if (this.checkWin()){
                            document.getElementById("message_txt").style.visibility = 'visible';
                            console.log("You win");
                        }
                    }
                    else {
                        setTimeout(() => {
                            this.Flip(target);
                            this.Flip(this.choice);
                            this.choice = null;
                        }, 500);
                    }
                }
            }
        }
    }

    shuffle_cards(array) {
        let currentIndex = array.length;
        while (currentIndex != 0){
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }

    assignImage(card){
        const index = card.getAttribute("data-index");
        if (this.board[index] == 1) {card.setAttribute('src','./images/cat.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 2) {card.setAttribute('src','./images/dog.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 3) {card.setAttribute('src','./images/dolphin.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 4) {card.setAttribute('src','./images/fish.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 5) {card.setAttribute('src','./images/frog.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 6) {card.setAttribute('src','./images/goat.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 7) {card.setAttribute('src','./images/lion.jpeg'); card.style.opacity = '0';}
        if (this.board[index] == 8) {card.setAttribute('src','./images/parrot.jpeg'); card.style.opacity = '0';}
    }

    Flip(target) {

        if (target.style.opacity == '100') target.style.opacity = '0';
        else target.style.opacity = '100';
    }

    checkWin(){
        let condition = true;
        this.board.forEach(element => {
            if (element != 0) condition = false;
        });
        return condition;
    }
}

customElements.define("card-flip", CardFlip);