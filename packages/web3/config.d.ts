declare const config: {
    caller: string;
    receiver: string;
    referralReceiver: string;
    initialChunks: number;
    chunks: number;
    networks: {
        name: string;
        slug: string;
        networkId: number;
        rpc: string;
        logo: string;
        acceptedCurrencies: {
            name: string;
            apiId: string;
            logo: string;
            address: string;
            decimals: number;
        }[];
    }[];
};
export default config;
//# sourceMappingURL=config.d.ts.map