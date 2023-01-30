export declare type Context = {
    iterations: number;
    iteration: number;
};
declare type Callback<T> = (context: Context & T) => Promise<(Context & T) | null>;
declare const iterateWithContext: <T>(context: Context & T, cb: Callback<T>) => Promise<void | null>;
export default iterateWithContext;
//# sourceMappingURL=iterateWithContext.d.ts.map