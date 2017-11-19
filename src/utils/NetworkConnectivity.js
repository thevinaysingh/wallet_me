import { NetInfo } from 'react-native';

export default function networkConnectivity() {
  return new Promise((resolve, reject) => {
    NetInfo.fetch().done((reach) => {
      let returnValue;
      if (reach === 'none' || reach === 'NONE' || reach === 'unknown' || reach === 'UNKNOWN') {
        returnValue = reject(new Error('Network Status Error'));
      } else {
        returnValue = resolve();
      }
      return returnValue;
    });
  });
}
