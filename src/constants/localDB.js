/* List to use filter accounts */
export const getFilterList = () => ([
  {
    key: 'app_name',
    label: 'By application name',
    value: 'APPLICATION',
    icon: 'th',
  },
  {
    key: 'web_url',
    label: 'By url',
    value: 'URL',
    icon: 'chrome',
  },
  {
    key: 'username',
    label: 'By username',
    value: 'USERNAME',
    icon: 'user-secret',
  },
  {
    key: 'password',
    label: 'By password',
    value: 'PASSWORD',
    icon: 'lock',
  },
]);
