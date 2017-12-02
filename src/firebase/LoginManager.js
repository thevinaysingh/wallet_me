import React, { Component } from 'react';
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
    
  };

  /* TODO: */
  static changePassword = (oldPassword, newPassword) => {
    
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