import { NetInfo } from 'react-native';

const handleFirstConnectivityChange = () => {
  NetInfo.removeEventListener(
    'connectionChange',
    handleFirstConnectivityChange,
  );
};

const watchNetStatusChange = () => {
  NetInfo.getConnectionInfo().done(() => {
    NetInfo.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange,
    );
  });
};

export default function* () {
  yield watchNetStatusChange();
}
