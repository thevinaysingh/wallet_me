import { Platform } from 'react-native';

export default function (base, androidSpecific) {
  if (Platform.OS === 'ios') {
    return base;
  }

  return Object.assign({}, base, androidSpecific);
}
