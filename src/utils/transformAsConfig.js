import _ from 'lodash';

export default (sourceList, mapConfig) => (
  _.map(sourceList, (sourceObject) => {
    const newObject = {};

    _.mapKeys(mapConfig, (value, key) => {
      newObject[value] = sourceObject[key];
    });

    return newObject;
  })
);

export const reduceArrayFromObject = (sourceObject, defaultIndex = 0) => {
  const newObject = {};

  _.mapKeys(sourceObject, (value, key) => {
    newObject[key] = _.isArray(value) ? value[defaultIndex] : value;
  });

  return newObject;
};

export const reduceArrayFromList = (sourceList, defaultIndex = 0) => {
  const list = [];

  _.map(sourceList, (sourceObject) => {
    list.push(reduceArrayFromObject(sourceObject, defaultIndex));
  });

  return list;
};

export const arrayWithKey = (array, key) => (
  _.map(array, item => item[key])
);
