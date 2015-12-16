class Ophidian {
      name: string;
}

class Snake extends Ophidian {
  
}

interface ISnake {
    snake<T extends Ophidian>(): T;
}

class Viper implements ISnake {
    snake<T extends Ophidian>() {
        return new Snake();
    }
}

var snake = new Viper().snake<Snake>();
snake.name = "The King";

console.log(snake);