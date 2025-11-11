const cs = require ('cs');

const data = cs.readFileSync(
    'book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

console.log(data.replaceAll(" ", "Dozhdzhanyk Vladyslav"));