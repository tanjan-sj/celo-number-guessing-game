const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const privateKeyToAddress = require('@celo/utils/lib/address').privateKeyToAddress
const kit = ContractKit.newKitFromWeb3(web3)
require('dotenv').config()
const fs = require('fs');
//const NumberGuessingBasicLevel = require('./NumberGuessingBasicLevel.json')
const { userInteraction,encryptText, decryptText } = require('./utils')
require('./test.abi');

const jsonFile = "NumberGuessingBasicLevel.json";
const parsed = JSON.parse(fs.readFileSync(jsonFile));
const abi = parsed.abi;

let account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
kit.connection.addAccount(account.privateKey)

let instance = new kit.web3.eth.Contract(
    abi,
    "0x29E002513F7c15D33EE0463f2b4d6974F2f3a49A"
)

console.log("methods: ", instance.methods);

const setNumber = async (number) => {
    let result = await instance.methods.setNumber(43).send({from: account.address});
    console.log(result)
}

const main = async () => {
    const playerObject = await userInteraction();
    console.log("player object: ", playerObject);

    //console.log("encrypted numebr: ", encryptText(playerObject.number));
    if(playerObject.playerType === "admin"){
        await setNumber(parseInt(playerObject.number));
    }
}

main()


