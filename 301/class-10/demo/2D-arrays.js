'use strict';

/*
====================================================
MINECRAFT NESTED FOR LOOPS & 2D ARRAYS DEMO
====================================================

/eli10 Explanation:

Imagine Minecraft blocks arranged in rows and columns.

A normal array is like one row of blocks:

["Stone", "Dirt", "Wood"]

A 2D array is like multiple rows stacked together:

[
  ["Stone", "Dirt", "Wood"],
  ["Coal", "Iron", "Gold"],
  ["Sand", "Water", "Lava"]
]

Think of it like a Minecraft map.

Rows go left-to-right.
Columns go up-and-down.

Nested loops help us visit EVERY block on the map.
*/


console.log('===================================');
console.log('PART 1: SIMPLE NESTED FOR LOOP');
console.log('===================================');

/*
Imagine every Minecraft player says hello
to every other player.

Outer loop:
- Chooses ONE player

Inner loop:
- Goes through EVERY player
*/

const players = [
  'Steve',
  'Alex',
  'Villager'
];

for (let i = 0; i < players.length; i++) { // Outer Loop

  console.log(`\n${players[i]}'s turn:`);

  for (let j = 0; j < players.length; j++) { // Inner Loop

    // Skip saying hello to yourself
    if (i !== j) {

      console.log(
        `${players[i]} says hello to ${players[j]}`
      );

    }
  }
}

/*
OUTPUT:

Steve says hello to Alex
Steve says hello to Villager

Alex says hello to Steve
Alex says hello to Villager

Villager says hello to Steve
Villager says hello to Alex
*/


console.log('\n===================================');
console.log('PART 2: HOW NESTED LOOPS WORK');
console.log('===================================');

/*
Outer Loop = Rows

Inner Loop = Columns

Think:

Row 1:
  Column 1
  Column 2
  Column 3

Row 2:
  Column 1
  Column 2
  Column 3

etc...
*/

for (let row = 1; row <= 3; row++) {

  console.log(`\nStarting Row ${row}`);

  for (let column = 1; column <= 3; column++) {

    console.log(
      `Visiting Row ${row}, Column ${column}`
    );

  }
}


console.log('\n===================================');
console.log('PART 3: CREATING A 2D ARRAY');
console.log('===================================');

/*
This is a Minecraft world map.

Each small array is a ROW.

Visual:

[
 [Stone, Dirt, Wood],
 [Coal, Iron, Gold],
 [Sand, Water, Lava]
]
*/

const minecraftMap = [

  ['Stone', 'Dirt', 'Wood'],

  ['Coal', 'Iron', 'Gold'],

  ['Sand', 'Water', 'Lava']

];

console.log(minecraftMap);


console.log('\n===================================');
console.log('PART 4: ACCESSING SPECIFIC BLOCKS');
console.log('===================================');

/*
Remember:

[row][column]

Row starts first.

Column starts second.
*/

console.log(
  'Top-left block:',
  minecraftMap[0][0]
);

console.log(
  'Middle block:',
  minecraftMap[1][1]
);

console.log(
  'Bottom-right block:',
  minecraftMap[2][2]
);

/*
OUTPUT:

Stone
Iron
Lava
*/


console.log('\n===================================');
console.log('PART 5: LOOP THROUGH A 2D ARRAY');
console.log('===================================');

/*
Outer loop:
  Visits each row

Inner loop:
  Visits each item inside the row
*/

for (let row = 0; row < minecraftMap.length; row++) {

  console.log(`\nROW ${row}`);

  for (
    let column = 0;
    column < minecraftMap[row].length;
    column++
  ) {

    console.log(
      `Block at [${row}][${column}] = ${minecraftMap[row][column]}`
    );

  }
}


console.log('\n===================================');
console.log('PART 6: DRAW THE MINECRAFT MAP');
console.log('===================================');

/*
Let's print the map like a grid.

join(' | ')

takes:

['Stone', 'Dirt', 'Wood']

and turns it into:

Stone | Dirt | Wood
*/

for (let row = 0; row < minecraftMap.length; row++) {

  console.log(
    minecraftMap[row].join(' | ')
  );

}


console.log('\n===================================');
console.log('PART 7: FIND EVERY GOLD BLOCK');
console.log('===================================');

/*
Nested loops are useful for searching.

Let's find where Gold is located.
*/

/*
=========================================
FINDING GOLD IN A MAP
=========================================

Our map might look like this:

[
  ['Stone', 'Dirt', 'Wood'],
  ['Coal', 'Iron', 'Gold'],
  ['Sand', 'Water', 'Lava']
]

Visualized as a grid:

Row 0: Stone  Dirt   Wood
Row 1: Coal   Iron   Gold
Row 2: Sand   Water  Lava

Goal:

Search EVERY block and find where Gold is located.
*/


/*
OUTER LOOP

The outer loop moves through each ROW.

Think:

"Which row am I currently standing on?"

First:
  row = 0

Then:
  row = 1

Then:
  row = 2
*/

for (let row = 0; row < minecraftMap.length; row++) {

  console.log(`\nChecking Row ${row}`);

  /*
  INNER LOOP

  The inner loop moves through each COLUMN
  inside the current row.

  Think:

  "Which block in this row am I checking?"
  */

  for (
    let column = 0;
    column < minecraftMap[row].length;
    column++
  ) {

    /*
    minecraftMap[row][column]

    Means:

    Go to a specific row
    Then go to a specific column

    Example:

    minecraftMap[1][2]

    Row 1 = ['Coal', 'Iron', 'Gold']

    Column 2 = 'Gold'
    */

    console.log(
      `Checking block: ${minecraftMap[row][column]}`
    );

    /*
    Ask a question:

    Is the current block equal to "Gold"?
    */

    if (
      minecraftMap[row][column] === 'Gold'
    ) {

      /*
      If the answer is YES:

      Print where Gold was found.
      */

      console.log(
        `🎉 Found Gold at Row ${row}, Column ${column}`
      );

    }

  }

}

console.log('\n===================================');
console.log('PART 8: BUILDING A MAP WITH LOOPS');
console.log('===================================');

/*
We can CREATE a 2D array using nested loops.

Let's build a 3x3 grass field.
*/

/*
=========================================
BUILDING A 3x3 MINECRAFT GRASS FIELD
=========================================

Goal:

Create a 2D array that looks like this:

[
  ['🌱', '🌱', '🌱'],
  ['🌱', '🌱', '🌱'],
  ['🌱', '🌱', '🌱']
]

Think of it as a Minecraft field with:

3 rows
3 columns

Each 🌱 represents a grass block.
*/

// This will eventually hold ALL of our rows.
const grassField = [];

/*
Outer Loop = Builds Rows

Imagine we are creating one horizontal row
of grass blocks at a time.
*/

for (let row = 0; row < 3; row++) {

  console.log(`Creating Row ${row}`);

  /*
  Create a brand new empty row.

  IMPORTANT:

  We create a NEW array each time the outer loop runs.

  Example:

  Row 0 → []
  Row 1 → []
  Row 2 → []

  This row will be filled by the inner loop.
  */
  const currentRow = [];

  /*
  Inner Loop = Builds Columns

  For each row, add 3 grass blocks.
  */

  for (let column = 0; column < 3; column++) {

    console.log(
      `Adding grass block at Row ${row}, Column ${column}`
    );

    // Add one grass block to the current row.
    currentRow.push('🌱');

    console.log(currentRow);
  }

  /*
  After the inner loop finishes:

  currentRow now looks like:

  ['🌱', '🌱', '🌱']

  We add that completed row into grassField.
  */

  grassField.push(currentRow);

  console.log(
    'Finished Row:',
    currentRow
  );

  console.log(
    'Current Field:',
    grassField
  );
}

/*
Final Result:

grassField becomes:

[
  ['🌱', '🌱', '🌱'],
  ['🌱', '🌱', '🌱'],
  ['🌱', '🌱', '🌱']
]
*/

console.log('\nFinal 2D Array:');
console.log(grassField);


/*
=========================================
DISPLAY THE FIELD
=========================================

Now we want to PRINT each row.

The outer loop visits each row one at a time.
*/

console.log('\nGrass Field:');

for (let row = 0; row < grassField.length; row++) {

  /*
  grassField[row]

  Row 0 → ['🌱', '🌱', '🌱']
  Row 1 → ['🌱', '🌱', '🌱']
  Row 2 → ['🌱', '🌱', '🌱']
  */

  console.log(
    grassField[row].join(' ')
  );

  /*
  join(' ')

  Changes:

  ['🌱', '🌱', '🌱']

  Into:

  🌱 🌱 🌱

  This makes the field easier to read.
  */
}

/*
OUTPUT:

🌱 🌱 🌱
🌱 🌱 🌱
🌱 🌱 🌱

=========================================
ELI10 SUMMARY
=========================================

Outer Loop:
  Builds each ROW

Inner Loop:
  Builds each COLUMN

Visual:

Row 0: 🌱 🌱 🌱
Row 1: 🌱 🌱 🌱
Row 2: 🌱 🌱 🌱

The outer loop creates rows.

The inner loop fills those rows with blocks.

Together, they build a complete
Minecraft grass field!
*/


/*
OUTPUT:

🌱 🌱 🌱
🌱 🌱 🌱
🌱 🌱 🌱
*/


console.log('\n===================================');
console.log('PART 9: BIG IDEA');
console.log('===================================');

/*

Outer Loop
↓
Chooses a ROW

Inner Loop
↓
Chooses a COLUMN

Together they visit every position.

Visual:

[0][0] [0][1] [0][2]

[1][0] [1][1] [1][2]

[2][0] [2][1] [2][2]

This is why nested loops are perfect
for Minecraft maps, game boards,
spreadsheets, and 2D arrays.

*/