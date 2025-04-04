import { play } from "./rock-paper-scissors";

describe("Rock, Paper, Scissors", () => {
  test("Player 1 wins with rock against scissors", () => {
    expect(play("rock", "scissors")).toBe(1);
  });

  test("Player 2 wins with paper against rock", () => {
    expect(play("rock", "paper")).toBe(2);
  });

  test("Player 1 wins with paper against rock", () => {
    expect(play("paper", "rock")).toBe(1);
  });

  test("Player 2 wins with scissors against paper", () => {
    expect(play("paper", "scissors")).toBe(2);
  });

  test("Draw when both players choose rock", () => {
    expect(play("rock", "rock")).toBe(0);
  });

  test("Draw when both players choose paper", () => {
    expect(play("paper", "paper")).toBe(0);
  });

  test("Draw when both players choose scissors", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });

  test("Invalid move for player 1", () => {
    expect(() => play("stone", "rock")).toThrow("Invalid move: stone");
  });

  test("Invalid move for player 2", () => {
    expect(() => play("rock", "paperclip")).toThrow("Invalid move: paperclip");
  });

  test("Invalid move for both players", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move: banana");
  });
});
