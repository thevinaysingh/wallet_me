import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import {
  Alert,
} from 'react-native';
import { FirebaseManager } from './FirebaseManager';

export class LoginManager {

  /* Not needed right now */
  static isUserLoggedIn = () => {};

  /* Login request flow completed */
  static loginRequest = (email, password) => {
    return FirebaseManager.getAuthRef().signInWithEmailAndPassword(email, password)
    .then((response) => {
      FirebaseManager.getDBRef().ref('users/'+ response.uid + '/profile/password').set(password);
      FirebaseManager.profile.password = password;
      FirebaseManager.uid = response.uid;
      return Promise.resolve();
    }).catch((error) => {
      return Promise.reject(error);
    });  
  };

  /* Signup request flow completed */
  static signUpRequest = (name, email, mob, password) => {
    return FirebaseManager.getAuthRef().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const newUser = {
        profile: {
          name: name,
          email: email,
          mobile: mob,
          password: password,
        },
        accounts: {
          title: 'user_accounts',
        }
      }
      FirebaseManager.getDBRef().ref('users/'+ response.uid).set(newUser);
      return Promise.resolve(response);
    }).catch((error) => {
      return Promise.reject(error);
    });
  };

  /* TODO: */
  static resetPassword = (email) => {
    return new Promise((resolve, reject) => {
      try {
        FirebaseManager.getAuthRef().sendPasswordResetEmail(email)
        .then(() => {
          return resolve('A reset password link is sent to your email!');
        }).catch((error) => {
          return reject(error);
        });        
      } catch (error) {
        reject(error);
      }
    });    
  };

  /* TODO: */
  static changePassword = (oldPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      if(oldPassword !== FirebaseManager.profile.password) {
        return reject('Error: Your current password is incorrect!');
      }
      try {
        FirebaseManager.getAuthRef().currentUser.updatePassword(newPassword)
        .then(() => {
          FirebaseManager.getDBRef().ref('users/'+ FirebaseManager.uid + '/profile/password').set(newPassword);
          FirebaseManager.profile.password = newPassword;
          return resolve();
        }).catch((error) => {
          return reject(error);
        });        
      } catch (error) {
        reject(error);
      }
    });
  };

  /* Signout flow completed */
  static logout = () => {
    return FirebaseManager.getAuthRef().signOut()
    .then(() => {
      FirebaseManager.uid = '';
      FirebaseManager.profile = {};
      FirebaseManager.accounts = [];
      return Promise.resolve();
    }).catch((error) => {
      return Promise.reject(error);
    });  
  };
}