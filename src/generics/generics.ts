 class Ophidian {
    
}

class Snake extends Ophidian {
    name: string;
}

interface ISnake {
    snake<T extends Ophidian>(): T;
}

class Viper implements ISnake {
    snake<T extends Ophidian>(): T {
        return new Snake();
    }
}

var snake = new Viper().snake<Snake>();
snake.name = "The King";

console.log(snake);