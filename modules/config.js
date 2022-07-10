const dotenv = require('dotenv');
const path = require('path');

// dotenv.config();

dotenv.config({
    path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`)
});

console.log(`NODE_ENV=${process.env.NODE_ENV}`);
console.log(`HOST=${process.env.HOST}`);
console.log(`PORT=${process.env.PORT}`);