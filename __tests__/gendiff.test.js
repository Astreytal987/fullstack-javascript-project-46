<<<<<<< HEAD
import gendiff from './Most.js';
describe('gendiff', () => {

test('differencesJSHard-JSHard', () => {
  expect(gendiff('fileHard1.json', 'fileHard2.json', "stylish")).toEqual(`{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`);
});

=======
import gendiff from '../Most.js'
import { JSONResult } from '../fixtures/result/test3-4.js';
import { stylishResult } from '../fixtures/result/test5-6.js';
import { plainResult } from '../fixtures/result/test1-2.js';

describe('gendiff', () => {

  test('PlainDiffJS-YML', () => {
    expect(gendiff('file1.json', 'file2.yml', 'plain')).toEqual(plainResult);
});

test('jsonDiffYAML-JS', () => {
  expect(gendiff('file3.yaml', 'file4.json', 'json')).toEqual(JSONResult);
});

test('stylishDiffJS-JS', () => {
  expect(gendiff('file5.json', 'file6.json', 'stylish')).toEqual(stylishResult);
});
>>>>>>> 144f7b8 (end tests)

});
