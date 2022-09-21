$ yarn create react-app 
$ git remote add origin "github"
$ git checkout -b main
$ initial commit to repo

$When the driver is up next which is me just clone and run yarn start

Frontend Structure
-$ git checkout-b frontend-structure
-$ yarn add react-router-dom
-created folders for components,pages, assets
Create component files
-Header.js (add basic code)
-Footer.js (add basic code)
$yarn add reactstrap
-add to src/index.js: imprt 'bootstrap/dist/css....
-added mock cats
-added routes to each page
-styled Header, footer, Notfound page

Step One:
Create a new branch called - Frontend structure

Step Two:
Create Directories/Folders
-Assets
-Pages
-Components

Step Three:
Create component files
-Header.js (add basic code)
-Footer.js (add basic code)

Step Four:
Create page files
-Home.js (add basic code)
-CatIndex.js (add basic code)
-Catshow.js (add basic code)
-CatNew.js (add basic code)
-CatEdit.js (add basic code)
-NotFound.js (add basic code_

Basic Code Format:
//Imports
Import React from 'react'
//Component declaration
const App = () => {
//JSX Return
 return (
<div>CatIndex</div>
)
}
export default CatIndex

Step Five:
Installs
-Reactstrap( Component library for Bootstrap)
Use this command: yarn add bootstrap
-ReactRouter(
react-router-dom@6 or yarn bootstrap

Step Six:
Create a routes for bootstarp  index js
Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
add this command in index as an inport

Step Seven:
Create your routes in app.js
Should look like this...
<Route path="/catindex" element={<Home/>}/>

Step eight :
Create a file in the src called MockCats.js
Create an array of Mythical creatures objects
-should look like this:
const mythicalCreatures = [{
    id:
  name:
   age:
 enjoys:
image:
 id:
  name:
   age:
 enjoys:
image:
}]

Step Nine:
Push Up Notes:
Hey charlene and austin this is our PR for Frontend-structure branch
17/20 items are complete. would really like you to take a look and give some feed back
Github link:
trello: link:

% Come back to this step...
Step Ten
add UI Features
-Style Header Component
 <nav>
  <a href="#"> add creature</a>
   <a href="#"> find creature</a>
    <a href="#"> find creature</a>
    <a href="#"> className="reister btn">Register</a>
    </nav>

Query: Does every color have to be placed in a listing file?
If you have a navigation bar do you need to add all colors to thr listing file?
If so it should look  like this $color: colornumber;


 Style in the Header main css..
 * Dont forget to import listing in you main css

 This is how you would style your listings in css

 header {
color: #gradient
overflow: auto;
}
nav {
position: center;
font size: 30px;

 a {
   color: white;

&hover {
 color: blue;

&.register-btn {
    background: $pink;
    padding: 10px 15px;
    text-align: center
    color: white;
    border-radius; 5px;

-Style Footer Component
 made by us
 
-style Notfound page (edited) 
 -add a not found pic with a background 


HEADER TEST:
Step One:
Create a test coverage branch
Step Two:
Create your describe and an it statement

Passed Tests for four pages:

 PASS  src/pages/NotFound.test.js
 PASS  src/components/Footer.test.js
 PASS  src/pages/Home.test.js
 PASS  src/components/Header.test.js

Test Suites: 4 passed, 4 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        6.698 s
Ran all test suites.

Watch Usage: Press w to show more.