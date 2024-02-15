import parse from '../functions/parserFunc.js';
import differences from '../functions/differences.js';

describe('gendiff', () => {
  test('parse', () => {
    expect(parse('file1.json')).toEqual({
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false,
    });
  });

  test('differencesJS-JS', () => {
    const res1 = parse('file1.json');
    const res2 = parse('file2.json');
    expect(differences(res1, res2)).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});

test('differencesJS-YAML', () => {
  const res1 = parse('file1.yml');
  const res2 = parse('file2.json');
  expect(differences(res1, res2)).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 110
  + timeout: 20
  + verbose: true
}`);
});



});
