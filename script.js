//your JS code here. If required.
 document.getElementById("submit").addEventListener("click", function() {
    let player1 = document.getElementById("player-1").value;
    let player2 = document.getElementById("player-2").value;
    if (player1 && player2) {
        document.getElementById("setup").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        startGame(player1, player2);
         }
     });
        
function startGame(player1, player2) {
    let currentPlayer = player1;
    let symbol = "X";
    document.getElementById("message").textContent = `${currentPlayer}, you're up!`;
    let board = document.getElementById("board");
    let cells = document.querySelectorAll(".cell");
    let gameState = Array(9).fill(null);
    let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
            ];

 cells.forEach((cell, index) => {
                cell.addEventListener("click", function() {
                    if (!gameState[index]) {
                        gameState[index] = symbol;
                        cell.textContent = symbol;
                        if (checkWinner()) {
                            document.getElementById("message").textContent = `${currentPlayer} congratulations you won!`;
                            disableBoard();
                        } else {
                            symbol = symbol === "X" ? "O" : "X";
                            currentPlayer = currentPlayer === player1 ? player2 : player1;
                            document.getElementById("message").textContent = `${currentPlayer}, you're up!`;
                        }
                    }
                });
            });
            
            function checkWinner() {
                return winningCombos.some(combo => {
                    let [a, b, c] = combo;
                    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
                });
            }

            function disableBoard() {
                cells.forEach(cell => cell.style.pointerEvents = "none");
            }
        }