# 🎬 CSS Transitions & Animations – Quick Reference Guide

This guide covers the **most common CSS transition and animation properties** and explains what they do in simple terms.

---

## 🔁 CSS TRANSITIONS

Transitions let you **smoothly change styles when something happens** (like hover).

### Common Transition Properties

- **`transition-property`**
  - Defines **what CSS property will animate**
  - Example: `background-color`, `width`, `transform`

- **`transition-duration`**
  - Defines **how long the transition takes**
  - Example: `1s`, `300ms`

- **`transition-timing-function`**
  - Controls **speed of the animation over time**
  - Common values:
    - `linear` → constant speed
    - `ease` → slow start, fast middle, slow end
    - `ease-in` → slow start
    - `ease-out` → slow end
    - `ease-in-out` → slow start and end

- **`transition-delay`**
  - Adds a **wait time before the transition starts**
  - Example: `0.5s`

- **Shorthand: `transition`**
  - Combines all properties into one line
  - Example:
    ```css
    transition: background-color 1s ease;
    ```

---

## 🎞️ CSS ANIMATIONS

Animations allow elements to **move or change continuously**, not just on hover.

### Common Animation Properties

- **`@keyframes`**
  - Defines the **steps of the animation**
  - Example:
    ```css
    @keyframes move {
      0% { left: 0; }
      100% { left: 100px; }
    }
    ```

- **`animation-name`**
  - Links the element to the keyframes

- **`animation-duration`**
  - How long one full animation cycle takes

- **`animation-timing-function`**
  - Controls the speed of the animation
  - Same values as transitions (`linear`, `ease`, etc.)

- **`animation-iteration-count`**
  - How many times the animation runs
  - Example:
    - `1` → runs once
    - `infinite` → loops forever

- **`animation-direction`**
  - Controls direction of animation
  - Values:
    - `normal`
    - `reverse`
    - `alternate` (goes back and forth)

- **`animation-delay`**
  - Wait time before animation starts

- **`animation-fill-mode`**
  - Controls what styles apply **before/after animation**
  - Values:
    - `forwards` → keeps final state
    - `backwards` → applies starting state early

- **Shorthand: `animation`**
  - Combines multiple properties
  - Example:
    ```css
    animation: move 2s ease infinite;
    ```

---

## 🔧 COMMONLY USED TRANSFORM FUNCTIONS

Transforms are often used with transitions and animations.

- **`transform: translate(x, y)`**
  - Moves an element

- **`transform: scale(n)`**
  - Resizes an element

- **`transform: rotate(deg)`**
  - Rotates an element

- **`transform: skew(x, y)`**
  - Tilts an element

---

## 🧠 QUICK REMINDER

| Feature | Transition | Animation |
|--------|-----------|-----------|
| Trigger | Needs interaction (hover) | Runs automatically |
| Steps | 2 states | Multiple steps |
| Looping | No | Yes (optional) |

---

## ✅ STUDENT TIP

Break every animation/transition into:
1. What is changing?
2. How long does it take?
3. What triggers it?

---

## 🚀 GOAL

By learning these properties, you can:
- Add interactivity to your UI
- Create smooth user experiences
- Build modern, professional-looking websites
