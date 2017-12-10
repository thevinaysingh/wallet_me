import firebase from 'react-native-firebase';

export class FirebaseManager {
  static uid = '';
  static profile = {};
  static accounts = [];
  // push().getKey();

  static getAuthRef = () => {
    return firebase.auth();
  }
  static getDBRef = () => {
    return firebase.database();
  }
  static getStorageRef = () => {
    return firebase.storage();
  }

  static getRootRef = (uid) => {
    FirebaseManager.getDBRef().ref('users/'+ uid);
  };

  static getProfileRef = (uid) => {
    FirebaseManager.getDBRef().ref('users/'+ uid +'/profile');
  };

  static getAccountListRef = (uid) => {
    FirebaseManager.getDBRef().ref('users/'+ uid +'/accounts');
  };

  /* load accounts completed */
  static loadAccounts = () => {
    return new Promise((resolve, reject) => {
      let accounts = [];
      try {
        FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/profile').on('value', (snap) => {
          FirebaseManager.profile = snap.toJSON();
        });
        FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/accounts').on('value', (snap) => {
          snap.forEach((child) => {
            if(child.key ==='title') return;
            accounts.push({
              key: child.key,
              app_name: child.val().app_name,
              web_url: child.val().web_url,
              username: child.val().username,
              password: child.val().password,
              linked_email: child.val().linked_email,
              linked_mob: child.val().linked_mob,
              objective: child.val().objective,
              type: child.val().type,
              date: child.val().date,
            });
          });
          FirebaseManager.accounts = accounts;
          return resolve(accounts);
        });
      } catch(error) {
        reject(error);
      }
    });
  };

  /* add account completed */
  static addAccount = (account) => {
    return new Promise((resolve, reject) => {
      try {
        FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/accounts') 
        .push(account).then(() => {
          return resolve();
        });
      } catch (error) {
        reject(error);
      }
    }); 
  };

  /* update account completed */
  static updateAccount = (account, dbKey) => {
    return new Promise((resolve, reject) => {
      try {
        FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/accounts/'+ dbKey) 
        .update(account).then(() => {
          return resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  /* delete account completed */  
  static deleteAccount = (account) => {
    return new Promise((resolve, reject) => {
      try {
        FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/accounts/'+ account.key) 
        .remove().then(() => {
          return resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  /* Update profile completed */
  static updateProfile = (profile) => {
    return new Promise((resolve, reject) => {
      try {
        FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/profile/name') 
        .set(profile.name).then(() => {
          FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/profile/mobile') 
          .set(profile.mobile).then(() => {
            FirebaseManager.profile.name = profile.name;
            FirebaseManager.profile.mobile = profile.mobile;
            return resolve();
          }).catch((error) => {
            return reject(error);
          });
        }).catch((error) => {
          return reject(error);
        });        
      } catch (error) {
        reject(error);
      }
    });
  };

  /* TODO: */
  static setAvatar = (avatar) => {};

  /* TODO: */
  static updateAvatar = (avatar) => {};
}