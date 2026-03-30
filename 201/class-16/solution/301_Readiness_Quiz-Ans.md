# JavaScript 201 → 301 Readiness Quiz (With Answers)

## Questions & Answers

### 1. D. ReferenceError  
Accessing a `let` variable before initialization causes a temporal dead zone error.

### 2. C. '52'  
String + number results in string concatenation.

### 3. B. undefined  
Function loses its `this` context when detached from the object.

### 4. A. true  
Prototype methods are shared references across instances.

### 5. C. Ford Honda  
Changing one instance does not affect another.

### 6. D. 0,1,2 then 3  
The loop logs 0,1,2; after it ends, `i` is 3.

### 7. B. 1,3  
`continue` skips the iteration when `i === 2`.

### 8. B. [undefined, undefined, undefined]  
Arrow function uses `{}` without `return`, so it returns undefined.

### 9. B. [1,3]  
Filter keeps values where `n % 2` is truthy (odd numbers).

### 10. A. [1]  
Two `pop()` calls remove the last two elements.

### 11. B. 1,2  
Closure preserves and updates `count` across calls.

### 12. B. Sam  
`JSON.parse` converts the stored string back into an object.

---

## Concept Questions

### 13. A. Uses default value  
Passing `undefined` triggers the default parameter.

### 14. B. Shared reference  
Prototype methods are stored once and shared.

### 15. B. Skips iteration  
`continue` skips the current loop iteration.

### 16. B. Skips iteration  
Same concept—`continue` skips to the next iteration.

### 17. C. Throws ReferenceError  
`let` variables are not accessible before declaration (TDZ).

### 18. A. Uses default value  
`undefined` activates the default parameter.

### 19. C. '52'  
String + number results in concatenation.

### 20. B. Only strings allowed  
`localStorage` only stores strings.

### 21. A. Converts back to object  
`JSON.parse` restores the string into a JavaScript object.
