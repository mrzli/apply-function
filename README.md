# Apply function

This project contains a single simple function `applyFn`, which applies one or more transformations to a value.

This same functionality can be achieved by a normal function call. The reason this exists is to make certain transformations more readable. If a transformation is a composite of several function, that expression can be very long and very often takes multiple lines. Having the value that is being transformed at the begginging, and the transformation after that is more natural, as if the value is being pushed though a pipe.

## Installation

```bash
npm install --save @gmjs/apply-function
```

## API

#### `applyFn`

This function applies one or more transformations to a single value.

The `value` is passed in as the first parameter, and the transformations are passed in as subsequent parameters.

The `value` can be anything, including simple value such as a number or a string, or a complex value such as an object or an array.

Each transformation is a function that accepts a single parameter, and returns a value. The return value of the previous transformation is passed in as the parameter to the next transformation.

An arbitrary number of transformations can be passed in, but there is good type inference support for up to 8 transformations.

```ts
import { applyFn } from '@gmjs/apply-function';

const input = 1;
const output = applyFn(
  input,
  (x) => x + 1,
  (x) => x * 2,
);
console.log(output);
// 4
```

```ts
import { applyFn } from '@gmjs/apply-function';

const input = [1, 2, 3, 4, 5];
const output = applyFn(
  input,
  (a) => a.map((item) => item + 1),
  (a) => a.filter((item) => item % 2 === 0),
);
console.log(output);
// [2, 4, 6]
```

Instead of writing all your own transformations from scratch, you can use libraries that provide ready-made transformations:

```ts
import { applyFn } from '@gmjs/apply-function';
import { map, filter } from '@gmjs/value-transformers';

const input = [1, 2, 3, 4, 5];
const output = applyFn(
  input,
  map((v: number) => v + 1),
  filter((v: number) => v % 2 === 0),
  toArray(), // 'map' and 'filter' return iterators, this converts the result back to an array
);
console.log(output);
// [2, 4, 6]
```
