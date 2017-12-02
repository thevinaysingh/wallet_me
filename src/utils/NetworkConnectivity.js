import { NetInfo } from 'react-native';

export function networkConnectivity() {
  return new Promise((resolve, reject) => {
    NetInfo.getConnectionInfo().done((reach) => {
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

