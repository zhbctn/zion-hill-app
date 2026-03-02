// Firebase Setup

const firebaseConfig = {
  apiKey: "AIzaSyBqh41cdqBmjmLpfjblYNbJG0X8O6dAa2s",
  authDomain: "zion-hill-church.firebaseapp.com",
  projectId: "zion-hill-church",
  storageBucket: "zion-hill-church.firebasestorage.app",
  messagingSenderId: "368020179937",
  appId: "1:368020179937:web:83b338ceb55663ddb920a0",
  measurementId: "G-226ZL7KV9Z"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

function enableNotifications() {

Notification.requestPermission().then(function(permission) {

if(permission === "granted") {

alert("Notifications Enabled");

}

});

}
