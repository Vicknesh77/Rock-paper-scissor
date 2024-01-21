        let score = JSON.parse(localStorage.getItem('score')) ||
        {
            win :0,
            Lose :0,
            Tie :0
        };

        updatescoreElement();

        /*
        if (!score){
        score ={
            Win :0,
            Lose :0,
            Tie :0
        };
        
        }*/

        document.querySelector('.js-rock-btn')
        .addEventListener('click', () => {
            playGame('rock');

        });

        document.querySelector('.js-paper-btn')
        .addEventListener('click', () =>{
            playGame('paper');
        });

        document.querySelector('.js-sissor-btn')
        .addEventListener('click', () =>{
            playGame('scissor');
        });

        document.body.addEventListener('keydown',(event) => {
            if(event.key === 'r'){
                playGame('rock');
            }
            else if( event.key === 'p'){
                playGame('paper');
            }
            else if(event.key === 's'){
                playGame('scissor');
            }
        });

        function playGame(playerMove){
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissor'){
            if(computerMove === 'rock'){
                result = 'Lose';
            }else if(computerMove === 'Paper'){
                result = 'win';
            }else  {
                result = 'Tie';
            }
        }



        else if(playerMove === 'paper'){
            if ( computerMove === 'rock'){
            result = 'win';
            }
            else if( computerMove === 'Paper'){
                result = 'Tie';
            }
            else if(computerMove === 'scissor'){
                result = 'Lose';
            }
        }

        
        else if(playerMove === 'rock')
        {
            if(computerMove === 'rock'){
                result = 'Tie';
            }else if(computerMove === 'Paper'){
                result = 'Lose';
            }else if (computerMove === 'scissor'){
                result = 'win';
            }
        }

        if (result === 'Tie'){
            score.Tie += 1;
        }
        else if(result === 'Lose'){
            score.Lose += 1;
        }
        else if(result === 'win')
        {
            score.win +=1;
        }

        localStorage.setItem( score, JSON.stringify(score));
        
        updatescoreElement();

        document.querySelector('.js-result')
        .innerHTML = result;

        document.querySelector('.js-moves')
        .innerHTML = 


        `You
        <img src="img/${playerMove}-emoji.png" class="icon"> 
        <img src="img/${computerMove}-emoji.png" class="icon">
        Computer`;


        
        /*  alert(`You picked ${playerMove} . computer picked ${computerMove}. ${result}
        win : ${score.win}, lose : ${score.lose}, Tie : ${score.Tie}`);*/
        }

        function updatescoreElement(){
        document.querySelector('.js-score')
        .innerHTML= ` win: ${score.win}, lose : ${score.Lose}, Tie : ${score.Tie}` ;

        }


        function pickComputerMove(){
        
        const randomNumber = Math.random();

        let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1 / 3){
            computerMove = 'rock';
        }
        else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
            computerMove ='Paper';
        }
        else if(randomNumber >= 2 / 3 && randomNumber < 1){
            computerMove ='scissor';
            }
            return computerMove;
                    }