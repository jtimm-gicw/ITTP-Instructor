'use strict';

/* =====================================================
   CONSTRUCTOR FUNCTION
   This is a BLUEPRINT for creating kittens.
   We are NOT creating a kitten yet.
   ===================================================== */

function Kitten(name, interests, goodWithDogs, goodWithKids, goodWithCats, imageFilename) {
  // "this" refers to the NEW object being created by `new`
  this.name = name;
  this.interests = interests;
  this.isGoodWithDogs = goodWithDogs;
  this.isGoodWithKids = goodWithKids;
  this.isGoodWithCats = goodWithCats;

  // Build the image path from data
  this.imageUrl = 'images/' + imageFilename;

  // Call a prototype method to generate age
  this.age = this.generateAge();
}

/* =====================================================
   PROTOTYPE METHODS
   These methods are SHARED by all kittens.
   ===================================================== */

// Generates a random age for a kitten
Kitten.prototype.generateAge = function () {
  return randomInRange(3, 12) + ' months';
};

// Just for demo purposes — shared behavior
Kitten.prototype.meow = function () {
  console.log('Meow from ' + this.name);
};

/* =====================================================
   RENDER METHOD
   This method turns kitten DATA into HTML.
   Rendering is BEHAVIOR, so it lives on the prototype.
   ===================================================== */

Kitten.prototype.render = function () {

  /* ---- STEP 1: GET THE PARENT CONTAINER ---- */
  const container = document.getElementById('kittenProfiles');

  /* ---- STEP 2: CREATE AN ARTICLE ---- */
  const article = document.createElement('article');
  container.appendChild(article);

  /* ---- STEP 3: ADD KITTEN NAME ---- */
  const heading = document.createElement('h3');
  heading.textContent = this.name;
  article.appendChild(heading);

  /* ---- STEP 4: ADD DESCRIPTION ---- */
  const description = document.createElement('p');
  description.textContent = `${this.name} is ${this.age} old and ready for adoption.`;
  article.appendChild(description);

  /* ---- STEP 5: INTERESTS LIST ---- */
  const ul = document.createElement('ul');
  article.appendChild(ul);

  // Loop through interests array
  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement('li');
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }

  /* =================================================
     STEP 6: BUILD A SEMANTIC TABLE
     Tables are good for structured, comparable data.
     ================================================= */

  const table = document.createElement('table');
  article.appendChild(table);

  /* ---- HEADER ROW ---- */
  const headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  // Table headers describe the columns
  ['Kids', 'Dogs', 'Other Cats'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  /* ---- DATA ROW ---- */
  const dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  // Each cell lines up with a header
  const kidsCell = document.createElement('td');
  kidsCell.textContent = this.isGoodWithKids;
  dataRow.appendChild(kidsCell);

  const dogsCell = document.createElement('td');
  dogsCell.textContent = this.isGoodWithDogs;
  dataRow.appendChild(dogsCell);

  const catsCell = document.createElement('td');
  catsCell.textContent = this.isGoodWithCats;
  dataRow.appendChild(catsCell);

  /* ---- STEP 7: IMAGE ---- */
  const img = document.createElement('img');
  img.src = this.imageUrl;
  img.alt = 'Picture of ' + this.name;
  article.appendChild(img);
};

/* =====================================================
   HELPER FUNCTION
   Not part of the constructor — shared utility.
   ===================================================== */

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* =====================================================
   INSTANTIATE KITTENS
   Now we use `new` to create real objects.
   ===================================================== */

const frankie = new Kitten(
  'Frankie',
  ['cuddling', 'chasing string', 'catnip'],
  true,
  true,
  true,
  'frankie.jpeg'
);

const serena = new Kitten(
  'Serena',
  ['sitting in laps', 'climbing curtains', 'treats'],
  false,
  true,
  false,
  'serena.jpeg'
);

const jumper = new Kitten(
  'Jumper',
  ['sunbeams', 'yarn', 'paper bags'],
  true,
  false,
  true,
  'jumper.jpeg'
);

/* ---- DEMO SHARED BEHAVIOR ---- */
frankie.meow();
serena.meow();
jumper.meow();

/* ---- RENDER TO THE DOM ---- */
frankie.render();
serena.render();
jumper.render();
