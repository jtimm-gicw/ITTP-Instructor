# Array Method Warm-Up Worksheet
## Answer Key

---

# 1. Movies

Starting Array:

```js
[
  'Jaws',
  'Star Wars',
  'Toy Story',
  'Frozen',
  'Avatar'
]
```

Operations:

1. push('Shrek')
2. pop()
3. unshift('Moana')
4. push('Cars')
5. shift()

### Final Array

```js
[
  'Jaws',
  'Star Wars',
  'Toy Story',
  'Frozen',
  'Avatar',
  'Cars'
]
```

### Explanation

- Added Shrek to the end.
- Removed Shrek.
- Added Moana to the beginning.
- Added Cars to the end.
- Removed Moana.

---

# 2. Countries

Starting Array:

```js
[
  'Canada',
  'Mexico',
  'Brazil',
  'Japan',
  'France'
]
```

Operations:

1. shift()
2. push('Italy')
3. push('Spain')
4. unshift('USA')
5. pop()

### Final Array

```js
[
  'USA',
  'Mexico',
  'Brazil',
  'Japan',
  'France',
  'Italy'
]
```

### Explanation

- Removed Canada.
- Added Italy.
- Added Spain.
- Added USA to front.
- Removed Spain.

---

# 3. Planets

Starting Array:

```js
[
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter'
]
```

Operations:

1. push('Saturn')
2. push('Uranus')
3. shift()
4. pop()
5. unshift('Pluto')

### Final Array

```js
[
  'Pluto',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn'
]
```

### Explanation

- Added Saturn.
- Added Uranus.
- Removed Mercury.
- Removed Uranus.
- Added Pluto to front.

---

# 4. Numbers

Starting Array:

```js
[
  10,
  20,
  30,
  40,
  50
]
```

Operations:

1. push(60)
2. shift()
3. unshift(5)
4. pop()
5. push(100)
6. push(200)

### Final Array

```js
[
  5,
  20,
  30,
  40,
  50,
  100,
  200
]
```

### Explanation

- Added 60.
- Removed 10.
- Added 5 to front.
- Removed 60.
- Added 100.
- Added 200.

---

# 5. Past U.S. Presidents

Starting Array:

```js
[
  'Washington',
  'Adams',
  'Jefferson',
  'Madison',
  'Monroe'
]
```

Operations:

1. push('Lincoln')
2. push('Grant')
3. shift()
4. pop()
5. unshift('Kennedy')
6. push('Roosevelt')

### Final Array

```js
[
  'Kennedy',
  'Adams',
  'Jefferson',
  'Madison',
  'Monroe',
  'Lincoln',
  'Roosevelt'
]
```

### Explanation

- Added Lincoln.
- Added Grant.
- Removed Washington.
- Removed Grant.
- Added Kennedy to front.
- Added Roosevelt.

---

# 6. Minecraft Blocks

Starting Array:

```js
[
  'Stone',
  'Dirt',
  'Wood',
  'Coal',
  'Iron'
]
```

Operations:

1. push('Diamond')
2. shift()
3. unshift('Grass')
4. push('Gold')
5. pop()
6. push('Obsidian')

### Final Array

```js
[
  'Grass',
  'Dirt',
  'Wood',
  'Coal',
  'Iron',
  'Diamond',
  'Obsidian'
]
```

### Explanation

- Added Diamond.
- Removed Stone.
- Added Grass.
- Added Gold.
- Removed Gold.
- Added Obsidian.

---

# 7. Superheroes

Starting Array:

```js
[
  'Batman',
  'Superman',
  'Wonder Woman',
  'Flash',
  'Aquaman'
]
```

Operations:

1. shift()
2. push('Green Lantern')
3. push('Spider-Man')
4. unshift('Iron Man')
5. pop()
6. push('Hulk')

### Final Array

```js
[
  'Iron Man',
  'Superman',
  'Wonder Woman',
  'Flash',
  'Aquaman',
  'Green Lantern',
  'Hulk'
]
```

### Explanation

- Removed Batman.
- Added Green Lantern.
- Added Spider-Man.
- Added Iron Man to front.
- Removed Spider-Man.
- Added Hulk.

---

# 8. Animals

Starting Array:

```js
[
  'Lion',
  'Tiger',
  'Bear',
  'Wolf',
  'Fox'
]
```

Operations:

1. pop()
2. shift()
3. push('Giraffe')
4. unshift('Elephant')
5. push('Zebra')
6. pop()
7. push('Monkey')

### Final Array

```js
[
  'Elephant',
  'Tiger',
  'Bear',
  'Wolf',
  'Giraffe',
  'Monkey'
]
```

### Explanation

- Removed Fox.
- Removed Lion.
- Added Giraffe.
- Added Elephant.
- Added Zebra.
- Removed Zebra.
- Added Monkey.

---

# 9. Video Games

Starting Array:

```js
[
  'Minecraft',
  'Mario Kart',
  'Zelda',
  'Fortnite',
  'Pokemon'
]
```

Operations:

1. push('Tetris')
2. shift()
3. push('Pac-Man')
4. unshift('Halo')
5. pop()
6. push('Roblox')
7. shift()
8. push('Among Us')

### Final Array

```js
[
  'Mario Kart',
  'Zelda',
  'Fortnite',
  'Pokemon',
  'Tetris',
  'Roblox',
  'Among Us'
]
```

### Explanation

- Added Tetris.
- Removed Minecraft.
- Added Pac-Man.
- Added Halo.
- Removed Pac-Man.
- Added Roblox.
- Removed Halo.
- Added Among Us.

---

# 10. Challenge Round

Starting Array:

```js
[
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus'
]
```

Operations:

1. push('Neptune')
2. shift()
3. unshift('Mercury')
4. push('Pluto')
5. pop()
6. push('Venus')
7. shift()
8. push('Earth')
9. pop()
10. unshift('Moon')
11. shift()
12. push('Sun')

### Final Array

```js
[
  'Venus',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
  'Sun'
]
```

### Step-by-Step Breakdown

```js
['Earth','Mars','Jupiter','Saturn','Uranus']
```

push Neptune

```js
['Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
```

shift

```js
['Mars','Jupiter','Saturn','Uranus','Neptune']
```

unshift Mercury

```js
['Mercury','Mars','Jupiter','Saturn','Uranus','Neptune']
```

push Pluto

```js
['Mercury','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']
```

pop

```js
['Mercury','Mars','Jupiter','Saturn','Uranus','Neptune']
```

push Venus

```js
['Mercury','Mars','Jupiter','Saturn','Uranus','Neptune','Venus']
```

shift

```js
['Mars','Jupiter','Saturn','Uranus','Neptune','Venus']
```

push Earth

```js
['Mars','Jupiter','Saturn','Uranus','Neptune','Venus','Earth']
```

pop

```js
['Mars','Jupiter','Saturn','Uranus','Neptune','Venus']
```

unshift Moon

```js
['Moon','Mars','Jupiter','Saturn','Uranus','Neptune','Venus']
```

shift

```js
['Mars','Jupiter','Saturn','Uranus','Neptune','Venus']
```

push Sun

```js
['Mars','Jupiter','Saturn','Uranus','Neptune','Venus','Sun']
```

### IMPORTANT

This challenge is intentionally longer so students must carefully track:

- Beginning of the array
- End of the array
- What gets removed
- What gets added
- The order of operations

Many students will make mistakes if they try to skip steps.