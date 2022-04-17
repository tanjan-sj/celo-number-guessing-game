const CryptoJS = require("crypto-js");
const prompt = require("prompt-sync")({ sigint: true });


const encryptText = (salt, text) => {
    return CryptoJS.AES.encrypt(text, salt).toString();
}

const decryptText = (salt, encryptedText) => {
    const bytes  = CryptoJS.AES.decrypt(encryptedText, salt);
    return bytes.toString(CryptoJS.enc.Utf8);
}

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const userInteraction = async () => {
    const returnObject = {};

    console.log("Welcome to the game!");
    console.log("..............................");
    await sleep(1000);
    console.log("What type of player are you?");
    await sleep(1000);
    const playerType = prompt("Press 1 for Admin, Press 2 for Player: ");

    if(playerType == 1){
        console.log("Welcome Admin!");
        await sleep(1000);
        const setNumber = prompt("Please set a number for this round:: ");

        returnObject["playerType"] = "admin";
        returnObject["number"] = setNumber;
    }else{
        console.log("Welcome Player!");
        await sleep(1000);
        console.log("Hint: The number is within 1 to 100");
        await sleep(1000);
        const guessNumber = prompt("Guess the number for this round:: ");

        returnObject["playerType"] = "player";
        returnObject["number"] = guessNumber;
    }

    return returnObject;
}

//userInteraction();

module.exports = {
    encryptText,
    decryptText,
    userInteraction
}
