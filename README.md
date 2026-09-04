# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
.navbar{
  background:#1e3a8a;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:12px 30px;
}
.logo{ font-size:20px; font-weight:bold; }
.nav-btns button{
  margin-left:10px;
  background:transparent;
  border:1px solid #7aa0ff;
  color:white;
  padding:6px 14px;
  border-radius:6px;
  cursor:pointer;
}
.btn-active{ background:#3ac2cb!important; border:none!important; }

.hero{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:80px 60px;
}
.hero-left{ width:50%; }
.hero-left h1{ font-size:36px; font-weight:700; line-height:1.2; }
.hero-left p{ color:#666; margin-top:15px; font-size:14px; line-height:1.6; }
.hero-actions{ margin-top:25px; }
.btn-primary{ background:#3ac2cb; color:white; border:none; padding:10px 20px; border-radius:6px; margin-right:10px; cursor:pointer; }
.btn-secondary{ background:white; border:1px solid #ddd; padding:10px 20px; border-radius:20px; cursor:pointer; }

.hero-right{ width:38%; }
.card{
  border:1px solid #ddd;
  border-top:4px solid #1e3a8a;
  border-radius:16px;
  padding:30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  text-align:center;
  min-height:180px;
  box-shadow:0 4px 15px rgba(0,0,0,0.05);
}
.arrow{ background:#6ee1e8; border:none; width:32px; height:32px; border-radius:50%; cursor:pointer; font-weight:bold; }