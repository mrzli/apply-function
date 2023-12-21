import { Fn1 } from '@gmjs/generic-types';
import { compose } from '@gmjs/compose-function';

export function applyFn<A>(value: A): A;
export function applyFn<A, B>(value: A, fn1: Fn1<A, B>): B;
export function applyFn<A, B, C>(value: A, fn1: Fn1<A, B>, fn2: Fn1<B, C>): C;
export function applyFn<A, B, C, D>(
  value: A,
  fn1: Fn1<A, B>,
  fn2: Fn1<B, C>,
  fn3: Fn1<C, D>,
): D;
export function applyFn<A, B, C, D, E>(
  value: A,
  fn1: Fn1<A, B>,
  fn2: Fn1<B, C>,
  fn3: Fn1<C, D>,
  fn4: Fn1<D, E>,
): E;
export function applyFn<A, B, C, D, E, F>(
  value: A,
  fn1: Fn1<A, B>,
  fn2: Fn1<B, C>,
  fn3: Fn1<C, D>,
  fn4: Fn1<D, E>,
  fn5: Fn1<E, F>,
): F;
export function applyFn<A, B, C, D, E, F, G>(
  value: A,
  fn1: Fn1<A, B>,
  fn2: Fn1<B, C>,
  fn3: Fn1<C, D>,
  fn4: Fn1<D, E>,
  fn5: Fn1<E, F>,
  fn6: Fn1<F, G>,
): G;
export function applyFn<A, B, C, D, E, F, G, H>(
  value: A,
  fn1: Fn1<A, B>,
  fn2: Fn1<B, C>,
  fn3: Fn1<C, D>,
  fn4: Fn1<D, E>,
  fn5: Fn1<E, F>,
  fn6: Fn1<F, G>,
  fn7: Fn1<G, H>,
): H;
export function applyFn<A, B, C, D, E, F, G, H, I>(
  value: A,
  fn1: Fn1<A, B>,
  fn2: Fn1<B, C>,
  fn3: Fn1<C, D>,
  fn4: Fn1<D, E>,
  fn5: Fn1<E, F>,
  fn6: Fn1<F, G>,
  fn7: Fn1<G, H>,
  fn8: Fn1<H, I>,
): I;
export function applyFn<TInput, TOutput>(
  value: TInput,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...ops: readonly Fn1<any, any>[]
): TOutput {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return compose(...ops)(value);
}
