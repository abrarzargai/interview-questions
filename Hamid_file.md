1. Explain Difference b/w object freeze vs const?
2. Explain NaN and its role?
3. Explain Array function?
4. Explain Js event delegation model?
5. Explain Js Cookies?
6. what is break and continue statement in Js?
7. what is the use of weakmap obj in js?
8. what is draw back of creating true private method in js?
9. why is `this ` operator inconsistent in js?
10. permitive vs non permitive
11. what is currying in js?

12. React.memo vs. useMemo: Major differences and use cases
13. Type of execution in js
14. we can use multiple store in app
15. find vs filter
16. memory heap
17. what is component and what is jsx
18. call stack , memory heap.
19. what is component , what is pure component
    15 for each vs map. find vs filter

20. primitive vs no primitive in js
    In JavaScript, data types can be broadly categorized into two main groups: primitive types and non-primitive types (also known as reference types or objects). The primary distinction between them lies in how they are stored and accessed in memory.

### Primitive Types:

1. **Number:**

   - Represents numeric values. Examples: `1`, `3.14`, `Infinity`, `NaN`.

2. **String:**

   - Represents sequences of characters. Examples: `'hello'`, `"world"`.

3. **Boolean:**

   - Represents true or false values. Examples: `true`, `false`.

4. **Null:**

   - Represents the intentional absence of any object value. Example: `null`.

5. **Undefined:**

   - Represents an uninitialized variable or missing property. Example: `undefined`.

6. **Symbol:**
   - Introduced in ECMAScript 6 (ES6), represents a unique and immutable identifier. Example: `Symbol('unique')`.

### Non-Primitive Types (Reference Types):

1. **Object:**

   - A collection of key-value pairs. Examples: `{}`, `{'name': 'John', 'age': 25}`.

2. **Array:**

   - An ordered list of values. Examples: `[1, 2, 3]`, `['apple', 'banana', 'orange']`.

3. **Function:**

   - A reusable block of code. Examples: `function add(a, b) { return a + b; }`.

4. **Date:**

   - Represents dates and times. Example: `new Date()`.

5. **RegExp:**
   - Represents regular expressions. Example: `/pattern/`.

### Key Differences:

1. **Mutability:**

   - Primitive types are immutable, meaning their values cannot be changed after creation. Operations on primitive types create new values.
   - Non-primitive types (objects, arrays) are mutable, and their contents can be modified directly.

2. **Storage:**

   - Primitive values are stored directly in the variable's memory location.
   - Non-primitive values are stored as references to memory locations. Variables hold references, not the actual values.

3. **Comparison:**
   - Primitive values are compared by value. Two primitives are equal if their values are the same.
   - Non-primitive values are compared by reference. Two references are equal only if they point to the same object in memory.

```javascript
let a = 5;
let b = a; // 'b' gets the value of 'a'

let arr1 = [1, 2, 3];
let arr2 = arr1; // Both 'arr1' and 'arr2' reference the same array in memory
```

Understanding the distinction between primitive and non-primitive types is crucial for working effectively with JavaScript, especially when dealing with concepts like variable assignment, comparison, and function parameters.

17 shallow and deep copy in term of primitive and non primitive

In JavaScript, the concepts of shallow copy and deep copy also apply, and you can achieve them in different ways. Let's discuss how these concepts apply to primitive and non-primitive data types in JavaScript.

### Shallow Copy:

1. **Primitive Data Types:**

   - Shallow copying primitive data types is straightforward. Assigning a primitive type to another variable creates a copy.

   ```javascript
   let originalInt = 42;
   let shallowCopyInt = originalInt; // Shallow copy of a primitive type
   ```

2. **Non-Primitive Data Types (e.g., Arrays, Objects):**

   - Shallow copying non-primitive data types can be done using methods like `slice()` for arrays or the spread operator (`...`) for both arrays and objects.

   ```javascript
   let originalArray = [1, 2, { a: 3, b: 4 }];
   let shallowCopyArray = originalArray.slice(); // Shallow copy of an array

   // Shallow copy of an object using the spread operator
   let originalObject = { x: 1, y: 2 };
   let shallowCopyObject = { ...originalObject };
   ```

   - Just like in Python, the inner objects in the shallow copy will still reference the same objects as in the original.

### Deep Copy:

1. **Primitive Data Types:**

   - As in Python, deep copying doesn't significantly apply to primitive data types in JavaScript due to their immutability.

2. **Non-Primitive Data Types (e.g., Arrays, Objects):**

   - Deep copying non-primitive data types can be more involved in JavaScript. Libraries like Lodash provide a `_.cloneDeep()` function, or you can create your own recursive function for deep cloning.

   Using Lodash:

   ```javascript
   const _ = require("lodash");

   let originalArray = [1, 2, { a: 3, b: 4 }];
   let deepCopyArray = _.cloneDeep(originalArray); // Deep copy of an array
   ```

   Recursive deep copy function:

   ```javascript
   function deepCopy(obj) {
     if (obj === null || typeof obj !== "object") {
       return obj;
     }

     if (Array.isArray(obj)) {
       return obj.map(deepCopy);
     }

     return Object.fromEntries(
       Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])
     );
   }

   let originalObject = { x: 1, y: 2, nested: { z: 3 } };
   let deepCopyObject = deepCopy(originalObject); // Deep copy of an object
   ```

   - These methods ensure that changes to inner objects do not affect the original.

In summary, the principles of shallow and deep copy in JavaScript are similar to those in other programming languages. For non-primitive types, you need to pay attention to whether you want a shallow or deep copy and choose the appropriate method based on your requirements.
