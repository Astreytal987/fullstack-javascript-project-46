import fs from 'node:fs';
import path from 'path';

const parse = (filepath) => JSON.parse(fs.readFileSync(path.resolve('fixtures', filepath)));
export default parse;
