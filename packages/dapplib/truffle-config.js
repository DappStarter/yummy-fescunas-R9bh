require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stool crawl snow huge hover argue slot gas'; 
let testAccounts = [
"0xf4a76d66ce594452ff5d7d260c10fee09fe789e736355482e818463a3fd58f70",
"0x9796afb35a52b7c9c0434e3bd8b1cd600a2f1f8b3b084e3b09f58ee0bf888843",
"0x22853e68487e628a31cef10bd7a5d5cb2c3623d0a753ba95dc841422d58b7140",
"0x7685838c81ba6f3606c3ac854d41418ceb812bdff52e8f8ad1b4e261f0ea5e65",
"0x573770295ca95183ff50a2697ef27b345644fa0a3703f82aeb5437ec7bb3acab",
"0xb892ccfd2db0083dc6a24e083240281d94de27f316c48daee253b72b135dcc09",
"0xd676b15201089a65cae1058ff83801bac61bcbf5195901acc5873f00dfc59602",
"0x3f6a4c5740b03549b0f56ee00085bdcea5a58309accb9cc16398a444863bf045",
"0x860236491c4d2893e732222b376430aba911729225aa537461a9b63785dc27fa",
"0x1c42ea73343c605ccd1598aac0cf964384b6e4a28489f22b52fb2795eecb1ca5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

