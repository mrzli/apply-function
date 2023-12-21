import { describe, expect, it } from '@jest/globals';
import { Fn1 } from '@gmjs/generic-types';
import { applyFn } from './apply-fn';

const MULTIPLY_BY_2 = (input: number): number => input * 2;
const CONCATENATE_AAA = (input: string): string => input + 'aaa';

describe('apply-fn', () => {
  describe('applyFn()', () => {
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
});
