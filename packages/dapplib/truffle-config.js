require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember evil grid prize off gas'; 
let testAccounts = [
"0xa07d362cf25be3d207a1ee27eade9dffa50951af8ff008b4c115fa1e6496f4d8",
"0xb25933eb1a8afec4ba4caa83591629a38ac61fe8556698d7c4a2483090daffcf",
"0x00db2b0a25a8959bd49127826a5ecff7ff86a49e210b98c95bad015c1618a310",
"0x557d491740215a5991215fa101a5e96b3d55084f692e0bda6008b3b0177822e1",
"0x3696ee98489bba64d84f05da3a484dc4470d3deecd7d0bb9ab1774f9ccb7e028",
"0x207ae38c186b81ae5ecbee413ac26f611ee7b7f5a5393efa033b905ee1f9bf05",
"0xc0a5af8e89984c765a90eda806d93846059d6cdd697480e5dae99cf4a6342971",
"0xf89f44e9783bbcacb946af4e4160e4edbc6504449058a0c76f4008bfd6878e00",
"0xfc98ff78d4dd47cd02665124ef6e6ef2a02da109e48b6c96c0f586826cd7f670",
"0xe0a122ccb7a4d880067bb5f7018bd5502c577294cd7fa6a2f2bb14f748b2982b"
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

