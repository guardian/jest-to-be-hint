declare global {
    namespace jest {
        interface Matchers<R, T> {
            toBeHint(want: any, hint: string): T;
        }
    }
}
export declare const toBeHint: (received: any, actual: any[], hint: string) => {
    pass: boolean;
    message: () => string;
};
