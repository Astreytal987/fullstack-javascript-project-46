import _ from 'lodash'

const differences = (file1,file2) => {

const keysSortFile1 = Object.keys(file1)
const keysSortFile2 = Object.keys(file2)
const sortedKeys = _.sortBy(_.union(keysSortFile1, keysSortFile2))

const result = [];

  sortedKeys.forEach((key) => {
    if (!Object.hasOwn(file2, key)) {
      result.push(`  - ${key}: ${file1[key]}`);
    } else if (!Object.hasOwn(file1, key)) {
      result.push(`  + ${key}: ${file2[key]}`);
    } else if (file1[key] !== file2[key]) {
      result.push(`  - ${key}: ${file1[key]}`);
      result.push(`  + ${key}: ${file2[key]}`);
    } else {
      result.push(`    ${key}: ${file1[key]}`);
    }
  });


return `{\n${result.join('\n')}\n}`;
}
export default differences


// {
//   host: 'hexlet.io',
//   timeout: 50,
//   proxy: '123.234.53.22',
//   follow: false
// }
// { 
//   timeout: 20,
//   verbose: true,
//   host: 'hexlet.io' 
// }

// {
//   - follow: false
//     host: hexlet.io
//   - proxy: 123.234.53.22
//   - timeout: 50
//   + timeout: 20
//   + verbose: true
// }