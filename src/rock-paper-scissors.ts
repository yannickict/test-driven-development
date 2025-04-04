export function play(player1: string, player2: string): number {
  const normalizedPlayer1 = player1.trim().toLowerCase();
  const normalizedPlayer2 = player2.trim().toLowerCase();

  const validMoves = ["rock", "paper", "scissors"];
  
  if (!validMoves.includes(normalizedPlayer1)) {
    throw new Error(`Invalid move: ${player1}`);
  }
  if (!validMoves.includes(normalizedPlayer2)) {
    throw new Error(`Invalid move: ${player2}`);
  }

  if (normalizedPlayer1 === normalizedPlayer2) {
    return 0;
  }
  if (
    (normalizedPlayer1 === "rock" && normalizedPlayer2 === "scissors") ||
    (normalizedPlayer1 === "scissors" && normalizedPlayer2 === "paper") ||
    (normalizedPlayer1 === "paper" && normalizedPlayer2 === "rock")
  ) {
    return 1;
  }
  return 2;
}
