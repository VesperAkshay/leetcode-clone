
import './App.css'
import { Landing } from './components/Landing'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';


const firebaseConfig = {
  apiKey: "AIzaSyCid9Upk3t3GvOC4E8QEeWrAktWLdgGs90",
  authDomain: "leetcode-clone-45b08.firebaseapp.com",
  projectId: "leetcode-clone-45b08",
  storageBucket: "leetcode-clone-45b08.appspot.com",
  messagingSenderId: "194098766506",
  appId: "1:194098766506:web:fcfdf5a381fa433b6be6d3",
  measurementId: "G-G4GKWWQJ6J"
};


const app = initializeApp(firebaseConfig);

function App() {


  return (
    <>
      <div>
        <Signin/>
      </div>
    </>
  )
}

export default App
