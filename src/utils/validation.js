/**
 *
 * @param {string} email
 * @returns {boolean}
 */

export const isEmailValid = (email) => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailPattern.test(email)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {string} password
 * @returns {boolean}
 */
export const isPasswordValid = (password) => {
  const passwordPattern = /^[a-zA-Z0-9]\w{5,}$/;
  if (passwordPattern.test(password)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {string} displayName
 * @returns {boolean}
 */
export const isDisplayNameValid = (displayName) => {
  const displayNamePattern = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,2}$/;
  if (displayNamePattern.test(displayName)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {number} pincode
 * @returns {boolean}
 */
export const isPincodeValid = (pincode) => {
  const pincodePattern = /^[1-9][0-9]{5}$/;
  if (pincodePattern.test(pincode)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {number} mobile
 * @returns {boolean}
 */
export const isPhoneValid = (mobile) => {
  const mobilePattern = /^[1-9][0-9]{10}$/;
  if (mobilePattern.test(mobile)) {
    return true;
  }
  return false;
};

/**
 *
 * @param {string} address
 * @returns {boolean}
 */
export const isAddressValid = (address) => {
  const addressPattern = /^[a-zA-Z0-9]\w{1,}$/;
  if (addressPattern.test(address)) {
    return true;
  }
  return false;
};
