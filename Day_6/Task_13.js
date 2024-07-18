// Step 1: Initialize a 3x3 2D array
let rows = 3;
let cols = 3;
let arr = new Array(rows);

for (let i = 0; i < rows; i++) {
  arr[i] = new Array(cols).fill(0); // Initialize each row with zeros
}

// Optionally: Fill the array with some values
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    arr[i][j] = i * cols + j; // Example values: 0, 1, 2, 3, 4, 5, 6, 7, 8
  }
}

// Step 2: Access a specific element
let row = 1; // For example, the second row (index starts from 0)
let col = 2; // For example, the third column (index starts from 0)

let element = arr[row][col];
console.log('The element at row', row, 'and column', col, 'is:', element);
