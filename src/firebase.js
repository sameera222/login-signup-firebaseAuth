import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  // apiKey: "AIzaSyBabo7XfrbgD_z4qIsf3KWHnPwwqUBM5xI",
  // authDomain: "fir-user-reg-auth.firebaseapp.com",
  // projectId: "fir-user-reg-auth",
  // storageBucket: "fir-user-reg-auth.appspot.com",
  // messagingSenderId: "720211998290",
  // appId: "1:720211998290:web:8291fab2697dbaafc2d18b"
  apiKey: "AIzaSyDefM15wZ3-gqXiEAoNnipSiqdiZ-OZroo",
  authDomain: "signin-auth-3564a.firebaseapp.com",
  projectId: "signin-auth-3564a",
  storageBucket: "signin-auth-3564a.appspot.com",
  messagingSenderId: "68709842194",
  appId: "1:68709842194:web:2dc19181139463b4b0c7cb"

}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
