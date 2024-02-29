import _ from 'lodash';

<<<<<<< HEAD
const loadDiff = (data1, data2) => {
  const data1Keys = _.keys(data1);
  const data2Keys = _.keys(data2);
  const sortedKeys = _.sortBy(_.union(data1Keys, data2Keys));

  const children = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value: data2[key],
      };
    }
    if (!_.has(data2, key)) {
      return {
        type: 'removed',
        key,
        value: data1[key],
      };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        type: 'nested',
        key,
        children: loadDiff(data1[key], data2[key]),
      };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return {
        type: 'unchanged',
        key,
        value: data1[key],
=======
const loadDiff = (file1, file2) => {
  const file1Keys = _.keys(file1);
  const file2Keys = _.keys(file2);
  const sortedKeys = _.sortBy(_.union(file1Keys, file2Keys));

  const children = sortedKeys.map((key) => {
    if (!_.has(file1, key)) {
      return {
        type: 'added',
        key,
        value: file2[key],
      };
    }
    if (!_.has(file2, key)) {
      return {
        type: 'removed',
        key,
        value: file1[key],
      };
    }
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return {
        type: 'nested',
        key,
        children: loadDiff(file1[key], file2[key]),
      };
    }
    if (_.isEqual(file1[key], file2[key])) {
      return {
        type: 'unchanged',
        key,
        value: file1[key],
>>>>>>> 144f7b8 (end tests)
      };
    }
    return {
      type: 'changed',
      key,
<<<<<<< HEAD
      oldValue: data1[key],
      newValue: data2[key],
=======
      oldValue: file1[key],
      newValue: file2[key],
>>>>>>> 144f7b8 (end tests)
    };
  });
  return children;
};

<<<<<<< HEAD
export default (data1, data2) => ({
  type: 'root',
  children: loadDiff(data1, data2),
=======
export default (file1, file2) => ({
  type: 'root',
  children: loadDiff(file1, file2),
>>>>>>> 144f7b8 (end tests)
});