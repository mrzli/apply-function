# Apply function

This project contains a single simple function, which applies a transformation (again a function) to a single value.

This same functionality can be achieved by a normal function call. The reason this exists is to make certain transsformations more readable. If a transformation is a composite of several function, that expression can be very long and very often takes multiple lines. Having the value that is being transformed at the begginging, and the transformation after that is more natural, as if it is being pushed though a pipe.

## Installation

```bash
npm install --save @gmjs/apply-function
```

## API

- `applyFn<TInput, TOutput>(value: TInput, fn: Fn1<TInput, TOutput>): TOutput`
  - Description - Applies a transformation to a value.
  - Parameters
    - `value` - The value to be transformed.
    - `fn`
      - Description
        - The transformation to apply to the value.
        - This parameter accepts a single function with one input parameter, which returns the transformed value.
        - By design, it does not accept an array of functions. If you want to apply multiple function(transformations), you need to compose them into a single function (transformation).
