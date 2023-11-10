# Bar-Game-Shop
Final FullStack Project - INT Collage AUG 2022

### important to note
* there is a hidden 'Login' Route for the admin,
just enter the path '/login' inside the URL.

# Installation steps:
1) `cd client`, then - `npm i`
2) run `npm start`

# If you chose to use my own google firebase:
* Login details:
Email: admin@gmail.com 
Password: admin1234

# How To Create your own google firebase:
1) sign up or sign in with google account to firebase https://firebase.google.com/ 
2) create your own firebase project.
3) create a web app inside your project, get your SDK and copie your own 'firebaseConfig' data into the file 'client/firebase.js' and replace it with my firebaseConfig.
4) add 'Cloud Firestore' and 'Storage' to your project, on both choose 'test mode'.
5) add 'Authentication' to your project, in 'sign-in method' choose the 'Email/Password' Provider, then in 'Users' click the blue button 'Add user' and create your own admin user.
* now you can login and use the admin dashboard to add games to the store!