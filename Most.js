import fs from 'node:fs';
<<<<<<< HEAD
import path from 'path';
import parse from './functions/parse.js';
import formatter from './functions/formatter.js';
import getDiff from './functions/getDiff.js';
=======
import path from 'node:path';
import parser from './functions/parser.js';
import getDiff from './functions/getDiff.js';
import formatter from './functions/formatter.js';
>>>>>>> 144f7b8 (end tests)

const resolvePath = (filePath) => path.resolve('fixtures', filePath);

const getExtension = (filename) => path.extname(filename).slice(1);

<<<<<<< HEAD
const getData = (filePath) => parse({
=======
const getData = (filePath) => parser({
>>>>>>> 144f7b8 (end tests)
  data: fs.readFileSync(filePath, 'utf-8'),
  format: getExtension(filePath),
});

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const path1 = resolvePath(filePath1);
  const path2 = resolvePath(filePath2);

  const data1 = getData(path1);
  const data2 = getData(path2);

  return formatter(getDiff(data1, data2), format);
};

export default gendiff;