import { useState, useEffect, useRef } from "react";
import "../Styles/SnakeGame.css";

const gridSize = 20;
const initialSnake = [{ x: 10, y: 10 }];
const initialDirection = { x: 1, y: 0 };
const foodPosition = () => ({
x: Math.floor(Math.random() * gridSize),
y: Math.floor(Math.random() * gridSize),
});

function SnakeGame() {
const [snake, setSnake] = useState(initialSnake);
const [direction, setDirection] = useState(initialDirection);
const [food, setFood] = useState(foodPosition);
const [playPoints, setPlayPoints] = useState(0);
const [gameOver, setGameOver] = useState(false);
const [gameStarted, setGameStarted] = useState(false);
const gameLoop = useRef(null);

useEffect(() => {
    if (!gameStarted || gameOver) return;
    gameLoop.current = setInterval(() => {
    setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = {
        x: newSnake[0].x + direction.x,
        y: newSnake[0].y + direction.y,
        };
        
        if (
        head.x < 0 || head.x >= gridSize ||
        head.y < 0 || head.y >= gridSize ||
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
        ) {
        setGameOver(true);
        clearInterval(gameLoop.current);
        return newSnake;
        }
        
        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
        setFood(foodPosition);
        setPlayPoints((prev) => prev + 1);
        } else {
        newSnake.pop();
        }
        
        return newSnake;
    });
    }, 150);
    
    return () => clearInterval(gameLoop.current);
}, [direction, gameStarted, gameOver]);

useEffect(() => {
    const handleKeyPress = (event) => {
    const keyMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
    };
    if (keyMap[event.key]) {
        setDirection(keyMap[event.key]);
    }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
}, []);

const startGame = () => {
    setGameStarted(true);
    setPlayPoints(0);
    setGameOver(false);
    setSnake(initialSnake);
    setDirection(initialDirection);
    setFood(foodPosition);
};

return (
    <div className="game-container">
    {!gameStarted ? (
        <button onClick={startGame} className="start-button">Start Game</button>
    ) : (
        <>
        <p>Play Points: {playPoints}</p>
        <div className="grid">
            {Array.from({ length: gridSize }).map((_, row) => (
            <div key={row} className="row">
                {Array.from({ length: gridSize }).map((_, col) => {
                const isSnake = snake.some((segment) => segment.x === col && segment.y === row);
                const isFood = food.x === col && food.y === row;
                return <div key={col} className={`cell ${isSnake ? "snake" : isFood ? "food" : ""}`}></div>;
                })}
            </div>
            ))}
        </div>
        {gameOver && (
            <div>
            <button onClick={startGame} className="start-button">Play Again</button>
            </div>
        )}
        <div className="mobile-controls">
            <button className="top" onClick={() => setDirection({ x: 0, y: -1 })}>▲</button>
            <div>
                <button className="left" onClick={() => setDirection({ x: -1, y: 0 })}>◄</button>
                <button className="right" onClick={() => setDirection({ x: 1, y: 0 })}>►</button>
            </div>
            <button className="bottom" onClick={() => setDirection({ x: 0, y: 1 })}>▼</button>
        </div>
        </>
    )}
    </div>
);
}

export { SnakeGame };
