import "jest";

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeHint(want: any, hint: string): T;
    }
  }
}

export const toBeHint = (received: any, actual: any[], hint: string) => {
  if (received === actual) {
    return {
      pass: true,
      message: () => ""
    };
  }

  return {
    pass: false,
    message: () => hint
  };
};
