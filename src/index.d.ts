declare module 'jack-lib-js-simple' {
  type ConsoleFunction = (message: string) => void;

  const Console: ConsoleFunction;

  export default Console;
}
