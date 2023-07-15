import { Fn1 } from '@gmjs/generic-types';

export function applyFn<TInput, TOutput>(
  value: TInput,
  fn: Fn1<TInput, TOutput>
): TOutput {
  return fn(value);
}
