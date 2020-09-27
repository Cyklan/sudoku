export default class Sudoku {
  missingFields: number;
  field: Array<Array<number>>;
  solvedField: Array<Array<number>>;
  size: number;
  sizeSqrt: number

  constructor(size: number, missingFields: number) {
    this.missingFields = missingFields;
    this.field = [];
    this.solvedField = [];
    this.size = size;
    this.sizeSqrt = Math.sqrt(size)
    for (let i = 0; i < size; i++) {
      this.field.push(new Array(size).fill(0));
    }
    this.generate();
  }

  private unusedInBox = (x: number, y: number, num: number) => {
    for (let i = 0; i < this.sizeSqrt; i++) {
      for (let j = 0; j < this.sizeSqrt; j++) {
        if (!this.unusedInTile(x + i, y + j, num)) return false;
      }
    }

    return true;
  };

  private unusedInCol = (y: number, num: number) => {
    for (let x = 0; x < this.size; x++) {
      if (!this.unusedInTile(x, y, num)) return false;
    }

    return true;
  };

  private unusedInRow = (x: number, num: number) => {
    for (let y = 0; y < this.size; y++) {
      if (!this.unusedInTile(x, y, num)) return false;
    }

    return true;
  };

  private unusedInTile = (x: number, y: number, num: number) =>
    this.field[x][y] !== num;

  private checkIsSafe = (x: number, y: number, num: number) =>
    this.unusedInRow(x, num) && this.unusedInCol(y, num) &&
    this.unusedInBox(x - x % this.sizeSqrt, y - y % this.sizeSqrt, num);

  private copyField = (field: Array<Array<number>>) => {
    const copy: Array<Array<number>> = [];
    field.forEach((row) => {
      copy.push(Array.from(row));
    });

    return copy;
  };

  private generate = () => {
    this.fillDiagonal();
    this.fillRemaining(0, this.sizeSqrt);
    this.solvedField = this.copyField(this.field);
    this.removeNumbers();
  };

  // fills top left to bottom right
  private fillDiagonal = () => {
    for (let i = 0; i < this.size; i += this.sizeSqrt) {
      this.fillBox(i, i);
    }
  };

  private fillRemaining = (i: number, j: number): boolean => {
    if (j >= this.size && i < this.size - 1) {
      i = i + 1;
      j = 0;
    }

    if (i >= this.size && j >= this.size) return true;

    if (i < this.sizeSqrt) {
      if (j < this.sizeSqrt) {
        j = this.sizeSqrt;
      }
    } else if (i < this.size - this.sizeSqrt) {
      if (j === Math.floor(i / this.sizeSqrt) * this.sizeSqrt) {
        j = j + this.sizeSqrt;
      }
    } else {
      if (j === this.size - this.sizeSqrt) {
        i++;
        j = 0;
        if (i >= this.size) return true;
      }
    }

    for (let num = 1; num <= this.size; num++) {
      if (this.checkIsSafe(i, j, num)) {
        this.field[i][j] = num;
        if (this.fillRemaining(i, j + 1)) return true;

        this.field[i][j] = 0;
      }
    }

    return false;
  };

  private fillBox = (x: number, y: number) => {
    for (let i = 0; i < this.sizeSqrt; i++) {
      for (let j = 0; j < this.sizeSqrt; j++) {
        let num;
        do {
          num = this.randomNumber(this.size);
        } while (!this.unusedInBox(x, y, num));

        this.field[x + i][y + j] = num;
      }
    }
  };

  private removeNumbers = () => {
    let count = this.missingFields;
    while (count > 0) {
      const cell = this.randomNumber(this.size ** 2 - 1);

      let x = Math.floor((cell / this.size));
      let y = Math.floor(cell % 9);

      if (this.field[x][y] !== 0) {
        count--;
        this.field[x][y] = 0;
      }
    }
  };

  private randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max + 1);
  };

  getRow = (n: number) => {
    return this.field[n];
  };

  getColumn = (n: number) => {
    const col: Array<number> = [];
    this.field.forEach((row) => {
      col.push(row[n]);
    });

    return col;
  };

  getSquare = (n: number) => {
    let startX = (n % this.sizeSqrt) * this.sizeSqrt;
    let startY = (n % this.sizeSqrt) + this.sizeSqrt;

    const square: Array<number> = [];
    for (let y = startY; y <= startY + 2; y++) {
      for (let x = startX; x <= startX + 2; x++) {
        square.push(this.field[x][y]);
      }
    }

    return square;
  };

  isSolved = () => {
    this.field === this.solvedField;
  };

  nextEmptySpot = (field: Array<Array<number>>): ICoordinate | null => {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (field[x][y] === 0) {
          return { x, y };
        }
      }
    }

    return null;
  };

  solve = (field: Array<Array<number>>): Array<Array<number>> => {
    let nextEmptySpot = this.nextEmptySpot(field);
    if (nextEmptySpot == null) {
      return field;
    }
    const { x, y } = nextEmptySpot;

    for (let i = 1; i <= 9; i++) {
      if (this.checkIsSafe(x, y, i)) {
        field[x][y] = i;
        this.solve(field);
      }
    }

    if (this.nextEmptySpot(field) !== null) {
      field[x][y] = 0;
    }

    return field;
  };
}

interface ICoordinate {
  x: number;
  y: number;
}
