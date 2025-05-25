import { useState, useEffect, useCallback, useRef } from 'react';
import '../Styles/SnakeGame.css';

const SnakeGame = () => {
// Tamaño del tablero
    const gridSize = 19;
    const cellSize = 12;

// Estado del juego
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [speed, setSpeed] = useState(150);
    const [isPaused, setIsPaused] = useState(false);
    const [gridCells, setGridCells] = useState([]);
    
    const gameLoopRef = useRef(null);
    const lastDirectionRef = useRef(direction);

// Generar comida en posición aleatoria
    const generateFood = useCallback(() => {
        const newFood = {
        x: Math.floor(Math.random() * (gridSize - 2)) + 1,
        y: Math.floor(Math.random() * (gridSize - 2)) + 1
    };
    
    // Evitar que la comida aparezca donde está la serpiente
    const isOnSnake = snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
    if (isOnSnake) {
        return generateFood();
    }
    
    return newFood;
    }, [snake]);

// Crear la cuadrícula de celdas
    useEffect(() => {
    const cells = [];
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            cells.push({ x, y });
        }
    }
    setGridCells(cells);
    }, [gridSize]);

// Inicializar el juego
    const startGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood(generateFood());
        setDirection('RIGHT');
        lastDirectionRef.current = 'RIGHT';
        setGameOver(false);
        setGameStarted(true);
        setIsPaused(false);
        setScore(0);
    };

// Pausar o reanudar el juego
    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    // Actualizar puntuación más alta
    useEffect(() => {
    const storedHighScore = localStorage.getItem('snakeHighScore');
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [score, highScore]);

  // Cambiar dirección con eventos de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (lastDirectionRef.current !== 'DOWN') {
            setDirection('UP');
          }
          break;
        case 'ArrowDown':
          if (lastDirectionRef.current !== 'UP') {
            setDirection('DOWN');
          }
          break;
        case 'ArrowLeft':
          if (lastDirectionRef.current !== 'RIGHT') {
            setDirection('LEFT');
          }
          break;
        case 'ArrowRight':
          if (lastDirectionRef.current !== 'LEFT') {
            setDirection('RIGHT');
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted, gameOver]);

  // Lógica principal del juego
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;
    
    const moveSnake = () => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        lastDirectionRef.current = direction;

        // Mover la cabeza según la dirección
        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
          default:
            break;
        }

        // Comprobar colisiones con paredes
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
          setGameOver(true);
          return prevSnake;
        }

        // Comprobar colisiones con el cuerpo
        if (newSnake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        // Insertar nueva cabeza al inicio
        newSnake.unshift(head);

        // Comprobar si comió la comida
        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
          setScore(prev => prev + 10);
          
          // Aumentar velocidad cada 50 puntos
          if (score > 0 && score % 50 === 0) {
            setSpeed(prevSpeed => Math.max(60, prevSpeed - 10));
          }
        } else {
          // Si no comió, eliminar la cola
          newSnake.pop();
        }

        return newSnake;
      });
    };

    gameLoopRef.current = setTimeout(moveSnake, speed);

    return () => {
      clearTimeout(gameLoopRef.current);
    };
  }, [direction, food, gameOver, gameStarted, generateFood, isPaused, score, speed]);

  // Manejar cambios de dirección en dispositivos móviles
  const handleDirectionChange = (newDirection) => {
    if (
      (newDirection === 'UP' && lastDirectionRef.current !== 'DOWN') ||
      (newDirection === 'DOWN' && lastDirectionRef.current !== 'UP') ||
      (newDirection === 'LEFT' && lastDirectionRef.current !== 'RIGHT') ||
      (newDirection === 'RIGHT' && lastDirectionRef.current !== 'LEFT')
    ) {
      setDirection(newDirection);
    }
  };

  // Comprobar si una celda es parte de la serpiente
  const isSnakeCell = (x, y) => {
    return snake.some((segment, index) => {
      if (segment.x === x && segment.y === y) {
        return index === 0 ? 'head' : 'body';
      }
      return false;
    });
  };

  // Comprobar si una celda contiene comida
  const isFoodCell = (x, y) => {
    return food.x === x && food.y === y;
  };

  return (
    <div className="gameboy-container">
      <div className="gameboy-body">
        <span className="gameboy-brand">NINTENDO</span>
        <span className="gameboy-logo">®</span>
        
        <div className="gameboy-screen-container">
          <div className="snake-game">
            <div className="game-header">
              <h1 className="game-title">SNAKE</h1>
              <div className="score-container">
                <div className="score">
                  <span>SCORE: {score}</span>
                </div>
                <div className="high-score">
                  <span>HIGH: {highScore}</span>
                </div>
              </div>
            </div>
            
            <div className="game-area">
              <div 
                className="game-board"
                style={{
                  gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                  gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
                }}
              >
                {/* Renderizar la cuadrícula con líneas visibles */}
                {gridCells.map((cell, index) => {
                  const snakeStatus = isSnakeCell(cell.x, cell.y);
                  const isFood = isFoodCell(cell.x, cell.y);
                  
                  return (
                    <div
                      key={`cell-${index}`}
                      className={`grid-cell ${snakeStatus === 'head' ? 'snake-head' : ''} ${snakeStatus ? 'snake-segment' : ''} ${isFood ? 'food' : ''}`}
                      style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        gridColumnStart: cell.x + 1,
                        gridRowStart: cell.y + 1,
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Overlay para mostrar mensajes */}
              {!gameStarted && !gameOver && (
                <div className="game-overlay">
                  <h2>SNAKE GAME</h2>
                  <p>Usa las flechas para moverte</p>
                  <button onClick={startGame} className="start-button">INICIAR</button>
                </div>
              )}
              
              {gameOver && (
                <div className="game-overlay">
                  <h2>GAME OVER</h2>
                  <p>Puntuación final: {score}</p>
                  <button onClick={startGame} className="start-button">JUGAR DE NUEVO</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* GameBoy-styled controls */}
        <div className="gameboy-controls">
          <div className="dpad-container">
            <div className="dpad">
              <button 
                className="dpad-button dpad-up" 
                onClick={() => handleDirectionChange('UP')}
              >
                ▲
              </button>
              <button 
                className="dpad-button dpad-left" 
                onClick={() => handleDirectionChange('LEFT')}
              >
                ◄
              </button>
              <div className="dpad-center"></div>
              <button 
                className="dpad-button dpad-right" 
                onClick={() => handleDirectionChange('RIGHT')}
              >
                ►
              </button>
              <button 
                className="dpad-button dpad-down" 
                onClick={() => handleDirectionChange('DOWN')}
              >
                ▼
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button className="action-button">B</button>
              <span className="gameboy-button-label">B</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button className="action-button">A</button>
              <span className="gameboy-button-label">A</span>
            </div>
          </div>

          <div className="start-select-buttons">
            <div className="container-Select-Start">
              <button className="gameboy-select-button"></button>
              <span className="gameboy-button-label">SELECT</span>
            </div>
            <div className="container-Select-Start">
              <button className="gameboy-start-button" onClick={gameStarted && !gameOver ? togglePause : startGame} ></button>
              <span className="gameboy-button-label">START</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SnakeGame };