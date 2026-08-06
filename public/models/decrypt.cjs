const crypto = require("crypto");
const fs = require("fs");

const password = "Character3D#@";
const hash = crypto.createHash("sha256").update(password).digest();
const key = hash.slice(0, 32);

const encryptedData = fs.readFileSync("public/models/character.enc");
const iv = encryptedData.subarray(0, 16);
const encrypted = encryptedData.subarray(16);

const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

fs.writeFileSync("public/models/character_decrypted.glb", decrypted);
console.log("Decrypted to public/models/character_decrypted.glb, size:", decrypted.length);
