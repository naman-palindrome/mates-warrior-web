import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import firebase from 'firebase'
import { useHistory } from 'react-router';

const AuthContext = createContext();

auth.settings.isAppVerificationDisabledForTesting = true

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [curUser, setCurUser] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState(null)

  const history = useHistory()


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authData => {
      setCurUser(authData);
      console.log('stateChange', authData);
      setOtpSent(false);
    })
    return unsubscribe;
  }, [])

  const submitOtp = (payload) => {
    setOtpInput(payload)
  }

  const login = (payload) => {
    setOtpSent(false);
    let number = payload.trim()

    const signInWithOtp = (codeId, otp) => {
      let credential = firebase.auth.PhoneAuthProvider.credential(codeId, otp);
      auth.signInWithCredential(credential)
        .then((res) => {
          history.push('/')
          console.log(history);
          setOtpSent(false);
        }).catch((e) => {
          console.log(e);
          alert("Invalid OTP")
          setOtpSent(false);
        })
    }

    const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-verifier-container', {
      'size': 'invisible',
      'callback': () => {
        setOtpSent(true);
      }
    });

    auth.signInWithPhoneNumber(number, recaptcha)
      .then((confirmationResult) => {
        const code = prompt("enter otp")
        const codeId = confirmationResult.verificationId;

        signInWithOtp(codeId, code)

      }).catch((e) => {
        // Error; SMS not sent
        console.log(e);
        alert("SMS not sent, try again later")
        history.go(0)
      });
  }


  const logout = () => {
    setCurUser(null);
  }

  const value = { curUser, otpSent, login, submitOtp, logout };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
