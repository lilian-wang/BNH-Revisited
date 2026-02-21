let computerWins = 0;
let playerWins = 0;

function setupChoiceButtons(selector, onSelect) {
    const Container = document.querySelector(selector);
    
    Container.addEventListener('click', e => {
        if (!e.target.classList.contains('choice')) {
            return;
        }

        const Value = e.target.dataset.value;
        onSelect(Value);
        
        // Disable all buttons with class "choice" inside the container
        Container.querySelectorAll('.choice').forEach(btn => {
            btn.disabled = true;
        })
    })
}

function handleChoice(value) {
    // Staging Area: declare all variables first
    let winner = '';
    let gameResultMessage = '';

    const Choices = ['Bear', 'Ninja', 'Hunter'];

    // Random computer choice
    const computerChoice = Choices[Math.floor(Math.random() * Choices.length)];

    // Determine winner using switch + if/else
    switch (value) {
        case 'Bear':
            if (computerChoice === 'Bear') {
                winner = 'Tie!';
            } else if (computerChoice === 'Ninja') {
                winner = "You win!";
                playerWins++;
            } else {
                winner = "The computer wins!";
                computerWins++;
            }
            break;

        case 'Ninja':
            if (computerChoice === 'Ninja') {
                winner = 'Tie!';
            } else if (computerChoice === 'Hunter') {
                winner = 'You win!';
                playerWins++;
            } else {
                winner = "The computer wins!";
                computerWins++;
            }
            break;

        case 'Hunter':
            if (computerChoice === 'Hunter') {
                winner = 'Tie!';
            } else if (computerChoice === 'Bear') {
                winner = 'You win!';
                playerWins++;
            } else {
                winner = "The computer wins!";
                computerWins++;
            }
            break;

        default:
            throw new Error('Invalid input sent to switch.');
    }

    // Display results of each play
    gameResultMessage  = `
        <div class=\"box\">
            You chose ${value}.<br>
            The computer chose ${computerChoice}<br>
            ${winner}
        </div>
        Your Wins: ${playerWins}<br>
        Computer Wins: ${computerWins}
    `;
    
    document.getElementById('gameOutput').innerHTML = gameResultMessage;
    document.getElementById('gameResults').hidden = false;
}

setupChoiceButtons('.choices', handleChoice);

function playAgain() {
    const Container = document.querySelector('.choices');

    // Enable all buttons with class "choice" inside the contianer
    Container.querySelectorAll('.choice').forEach(btn => {
        btn.disabled = false;
    })

    document.getElementById('gameResults').hidden = true;
}
