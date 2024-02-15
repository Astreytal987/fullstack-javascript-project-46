import fs from 'node:fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filepath) => {
  if (filepath.includes('.yml')) {
    return yaml.load(fs.readFileSync(path.resolve('fixtures', filepath)));
  }
  return JSON.parse(fs.readFileSync(path.resolve('fixtures', filepath))); 
}
export default parse;
