import * as Colors from './colors';

export const containerStyles = {
  rowCenteredContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultContainer: {
    alignSelf: 'stretch',
    backgroundColor: Colors.defaultBgColor,
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
};

export const labelStyles = {
  primaryButtonLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  cancelButtonLabel: {
    color: 'white',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  linkLabelStyle: {
    color: Colors.placeholderTxtColor,
    fontSize: 17,
    paddingHorizontal: 5,
    textDecorationLine: 'underline',
  },
  linkLabelWhiteStyle: {
    color: Colors.whiteIconColor,
    fontSize: 18,
    paddingHorizontal: 5,
    textDecorationLine: 'underline',
  },
  whiteSmallLabel: {
    fontSize: 14,
    color: Colors.whiteLabelColor,
  },
  whiteMediumLabel: {
    fontSize: 16,
    color: Colors.whiteLabelColor,
  },
  whiteLargeLabel: {
    fontSize: 18,
    color: Colors.whiteLabelColor,
  },
  whiteXtraLargeLabel: {
    fontSize: 20,
    color: Colors.whiteLabelColor,
  },
  blackSmallLabel: {
    color: Colors.defaultLabelColor,
    fontSize: 14,
  },
  blackMediumLabel: {
    color: Colors.defaultLabelColor,
    fontSize: 16,
  },
  blackLargeLabel: {
    color: Colors.defaultLabelColor,
    fontSize: 18,
  },
  blackXtraLargeLabel: {
    color: Colors.defaultLabelColor,
    fontSize: 20,
  },
};

export const buttonStyles = {
  smallButtonContainer: {
    backgroundColor: Colors.primaryBgColor,
    alignSelf: 'flex-end',
    borderRadius: 5,
    margin: 5,
  },
  smallButtonText: {
    ...labelStyles.cancelButtonLabel,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
};
