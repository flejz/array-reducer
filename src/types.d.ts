declare module 'array-reducer' {
  export default function reducer<T>(array: T[], fn: (previousValue: T, nextValue: T) => Promise<T> | T, acc: number): Promise<T> | T;
}