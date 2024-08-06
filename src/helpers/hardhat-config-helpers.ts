// TODO: Add Glue mainnet config after deploying Gnosis Singleton Factory.
export const DETERMINISTIC_FACTORIES: Record<
    number, // Chain Id
    { gasPrice: number; gasLimit: number; signerAddress: `0x${string}`; transaction: `0x${string}`; address: `0x${string}` }
> = {
    1300: {
        gasPrice: 1250000000000,
        gasLimit: 100000,
        signerAddress: "0x20323e31970547B07B07A0132D1B718454120616",
        transaction:
            "0xf8a88086012309ce5400830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3820a4ba03f0258b5e08e13deb3c96c26fd52939bb9cac658b2d5382d61a5b0ec8ac69411a07b1fa55cc78129542af907bd0cba46ca6601494858074f78c2c57a6a38fc4987",
        address: "0x90a9552b412d56C0723dCe59746D5a4A33542904",
    },
};
