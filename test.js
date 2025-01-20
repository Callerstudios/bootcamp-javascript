import PromptSync from "prompt-sync";
const prompt = PromptSync();

const encryptData = (data) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let count;
  let encrypted = "";
  for (let i = 0; i < data.length; i++) {
    let wat = alphabet.indexOf(data[i].toUpperCase());
    count = wat + 1;
    if (count === 26) count = 0;
    encrypted += alphabet[count];
  }
  
  console.log(`Your Encrypted Text is ${encrypted}`);
};
let names = prompt("Enter input>>>").split(",");
for (let _name of names) {
    encryptData(_name);
}
let uncount;
let discrypted = "";
uncount = count - 1
discrypted += alphabet[uncount]
