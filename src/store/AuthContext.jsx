import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import firebase from 'firebase';

import { auth } from '../firebase';

const AuthContext = createContext();

auth.settings.isAppVerificationDisabledForTesting = true


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [curUser, setCurUser] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null)

  const [codeId, setCodeId] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authData => {
      setCurUser(authData);
    })
    return unsubscribe;
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setFirebaseError(null), 2000)
    return clearInterval(interval)
  }, [firebaseError])

  const login = (payload) => {
    setOtpSent(false);
    setIsLoading(true);
    let number = payload.trim()

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-verifier-container', {
      'size': 'invisible',
      'callback': () => {
        setIsLoading(false);
      }
    });

    const appVerifier = window.recaptchaVerifier;
    return auth.signInWithPhoneNumber(number, appVerifier)
      .then((confirmationResult) => {
        setOtpSent(true);
        setCodeId(confirmationResult.verificationId)
      }).catch((e) => {
        // Error; SMS not sent
        setFirebaseError(e.message)
        setOtpSent(false);
      }).finally(() => {
        setIsLoading(false);
      })
  }

  const signInWithOtp = (codeId, otp) => {
    let credential = firebase.auth.PhoneAuthProvider.credential(codeId, otp);
    setIsLoading(true)
    auth.signInWithCredential(credential)
      .then((res) => {
        history.push('/')
      }).catch((e) => {
        setFirebaseError(e.message)
      }).finally(() => setIsLoading(false))
  }

  const submitOtp = (otp) => {
    signInWithOtp(codeId, otp)
  }

  const logout = () => {
    auth.signOut()
    setCurUser(null);
  }

  const value = { curUser, otpSent, isLoading, firebaseError, login, submitOtp, logout };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
