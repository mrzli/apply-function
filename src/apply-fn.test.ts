import { describe, expect, it } from '@jest/globals';
import { Fn1 } from '@gmjs/generic-types';
import { applyFn } from './apply-fn';

const MULTIPLY_BY_2 = (input: number): number => input * 2;
const TO_STRING_AND_CONTATENATE_AAA = (input: number): string =>
  input.toString() + 'aaa';
const CONCATENATE_AAA = (input: string): string => input + 'aaa';

describe('apply-fn', () => {
  describe('applyFn() - 1 transformation', () => {
    interface Example<T, U> {
      readonly input: {
        readonly value: T;
        readonly fn: Fn1<T, U>;
      };
      readonly expected: U;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const EXAMPLES: readonly Example<any, any>[] = [
      {
        input: {
          value: 1,
          fn: MULTIPLY_BY_2,
        },
        expected: 2,
      },
      {
        input: {
          value: '2',
          fn: CONCATENATE_AAA,
        },
        expected: '2aaa',
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        const actual = applyFn(example.input.value, example.input.fn);
        expect(actual).toEqual(example.expected);
      });
    }
  });

  describe('applyFn() - 2 transformations', () => {
    interface Example<T, U, V> {
      readonly input: {
        readonly value: T;
        readonly fn1: Fn1<T, U>;
        readonly fn2: Fn1<U, V>;
      };
      readonly expected: V;
    }

    const EXAMPLES: readonly Example<number, number, string>[] = [
      {
        input: {
          value: 1,
          fn1: MULTIPLY_BY_2,
          fn2: TO_STRING_AND_CONTATENATE_AAA,
        },
        expected: '2aaa',
      },
      {
        input: {
          value: 2,
          fn1: MULTIPLY_BY_2,
          fn2: TO_STRING_AND_CONTATENATE_AAA,
        },
        expected: '4aaa',
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        const actual = applyFn(
          example.input.value,
          example.input.fn1,
          example.input.fn2,
        );
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
