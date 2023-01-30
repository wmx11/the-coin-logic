declare const getChangesPartial: (currentSet: any, previousSet: any) => <T extends string>(value: T) => {
    [x: string]: {
        change: number;
        percentage: number;
    };
};
export default getChangesPartial;
//# sourceMappingURL=getChangesPartial.d.ts.map