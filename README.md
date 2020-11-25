**BUG TRACKER**


## Table of contents
* [General info](#general-info)
* [How to set it up](#How-to-set-it-up)
* [Technologies used](#Technologies-used)
* [Example usage](#Example-usage)
* [Changelog](#Changelog)
* [Roadmap](#Roadmap)
* [Author](#Author)


## General info

This Application was created for academic purposes
The application manage issues of projects.
Can add more projects, issues, users and comments of each issue.
Also can be update the status of each BUG.

## How to set it up

- javascript
- npm install nodejs
- npm install express
- npm install -- save mongodb
- npm install heroku
- npm install dotenv
- set env variable of mongodb "MONGO_URI"
- npm install nodemailer
- npm install docker
- npm install nodemon
- npm install ejs

App Demo:
Heroku link: https://evening-cove-69899.herokuapp.com/

## Technologies used
- javascript
- mongodb
- nodejs
- expess
- nodemon
- ejs
- heroku
- github
- visual studio
- Robo 3T
- Postman

## Example usage

[![ruta.jpg](https://github.com/victornavam/CA1/blob/master/ruta.JPG?raw=true "ruta.jpg")](https://github.com/victornavam/CA1/blob/master/ruta.JPG "ruta.jpg")

## Changelog
- 03/11/2020 Begin Project
- 12/11/2020 Error Control
- 14/11/2020 Readme
- 24/11/2020 Mail Notification
- 25/11/2020 Docker

## Roadmap
### Flowchart

[![Flowchart.JPG](https://github.com/victornavam/CA1/blob/master/Flowchart.JPG?raw=true "Flowchart.JPG")](https://github.com/victornavam/CA1/blob/master/ "Flowchart.JPG")

`flow
st=>start: User Login
op=>operation: Login Operation
cond=>condition: Yes or No?
op1=>subroutine: welcome
op4=>operation: Users Oper
op2=>end: end
cond2=>condition: Projects and Issues
op3=>operation: Project Operations
op5=>operation: Integration proj, issues, user
para=>parallel: parallel tasks
st->op
st->op->cond
cond(no)->op2
cond(yes)->op1
op4(right)->op1
cond(yes)->op1(bottom)->cond2
cond2(yes)->op3->op5
cond2(no)->op2
op5(right)->op4

`
## Author
- **Ing. Victor Nava**




