import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const NavBarHeight = isIOS ? 64 : 54;

export const statusBarHeight = isIOS ? 20 : 0;
