This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure
- public folder (Contain the css, fonts, js folder and other assets files)
 
- src folder (contain the components, routes, services, routes folders and other app scripts)

## Components

Components folder contain all the shareable components in the app (Navbar is the example component)

## Services

Services contain the js script to communicate with APIs, authenicate users, and validates data. (Authservices.js, Request.js, and Validator.js are example services)

## Routes

Contain the application routes. (Index.js is the main routes for public users and dashboard routes is for protected users which is imported and use only in index.js)

## Using Request.js

Perform Post Request.
```js
 import Request from './services/Request';

  const handleSubmit = async(e)=>{ 
    e.preventDefault();
  
      const http = new Request() 
    
      const data = {
        email: "test@email.com", // You will usually get email from form field
       
      }
     try{
      //get the response from API   
       const response = await http.post("/",data)
       if(response.status == 'true'){
       //perform success response
      
        }else{
       //perform fail response
       }
     } catch(e){
      //perform error response
     }
    
   
      return false;
 }
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
"# react-app-bootstrap" 
