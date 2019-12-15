# Assignment 1 - Agile Software Practice.
# MCI Test
[![pipeline status](https://gitlab.com/JessieZhao/mci-test-cicd/badges/master/pipeline.svg)]
(https://gitlab.com/JessieZhao/mci-test-cicd/commits/master)

[![coverage report](https://gitlab.com/JessieZhao/mci-test-cicd/badges/master/coverage.svg)]
(https://gitlab.com/JessieZhao/mci-test-cicd/badges/master/coverage.svg?job=coverage)

## MCI Test Api.

###Name: Mingmin Zhao. Student number: 20086440

In this project there are some functions:User can do MCI Test and record their score. 

####gitHub:https://github.com/jessiezhao216/MCITest
## API endpoints.
user:

   app.post('/user',user.register);
app.post('/user/login',user.login);
app.get('/user/:id', user.userInfo);
app.put('/user/:id', user.editInfo);
app.delete('/user/:id', user.deleteUser);
  a post for register
  
  a post for login with username and password authentication
  
  a get for user to see his own information
  
  a put for user to delete the user 
 
  
test:

    app.post('/test',test.addTest)
app.get('/test', test.findAll);
app.get('/test/:id', test.findOne);
app.delete('/test/:id', test.deleteTest);
app.put('/test/:id', test.giveGrade);
    
  a post to add new test
 
  a get to get all test information
  
  a get to get a test information
  
  a delete to delete the test

  a put to give a grade to the test
  
###Introduction and Tech

A web app developed with nodejs, express and mongodb. 
NodeJS version v10.16.3 basic core development language
NNPM version 6.9.0
Express is a simple and flexible node.js Web application framework that offers a range of powerful features to help you create a variety of Web applications, as well as rich HTTP tools.
Mongo version v4.2.1

##Test results:
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    MCI Test
     POST /user
POST /user 200 24.658 ms - 43
        √ should return The username can not be empty (42ms)
POST /user 200 0.994 ms - 43
        √ should return The password can not be empty
POST /user 200 0.679 ms - 40
        √ should return The email can not be empty
POST /user 200 0.253 ms - 41
        √ should return The gender can not be empty
POST /user 200 0.251 ms - 38
        √ should return The age can not be empty
POST /user 200 2.700 ms - 211
        √ should return Username already exists
POST /user 200 3.136 ms - 202
        √ should return Successfully registered and update mongodb
GET /user/5df684a6a8e2b12788c09f05 200 8.367 ms - 358
      POST /user/login
POST /user/login 200 1.816 ms - 28
        √ should return wrong password message
POST /user/login 200 1.349 ms - 35
        √ should return username is not exist message
POST /user/login 200 1.361 ms - 210
        √ should return Successfully login and update mongodb
      GET /user/:id
        when the id is valid
GET /user/5df684a6a8e2b12788c09f13 200 1.765 ms - 367
          √ should return the matching user information
        when the id is invalid
GET /user/9999 200 1.407 ms - 232
          √ should return User not found message
      PUT /user/:id
        when the id is valid
          √ should return user updated information
GET /user/66666666666 200 2.380 ms - 253
          √ should return the User NOT Found! message
    Test
      POST /test
POST /test 200 1.310 ms - 44
        √ should return The test name can not be empty
POST /test 200 4.424 ms - 53
        √ should return The test is already exist
POST /test 200 9.660 ms - 172
        √ should return Test Successfully added and update mongodb
GET /test/5df684a8a8e2b12788c09f2e 200 4.939 ms - 284
      GET /test
GET /test 200 5.463 ms - 567
        √ should GET all the tests
      GET /test/:id
        when the id is valid
GET /test/5df684a9a8e2b12788c09f35 200 3.134 ms - 285
          √ should return the matching test
        when the id is invalid
GET /test/34565676772 200 1.102 ms - 253
          √ should return Test not found message
      PUT /test/:id
        when the id is valid
PUT /test/5df684a9a8e2b12788c09f3d 200 5.004 ms - 175
          √ should return a message and update the grade
GET /test/5df684a9a8e2b12788c09f3d 200 3.311 ms - 285
        when the id is invalid
GET /test/1000000020202 200 1.241 ms - 259
          √ should return the Test NOT Found! message
      DELETE /test/:id
        when the id is valid
          √ should return confirmation message and update database
        when the id is invalid
          √ should return the NOT found message
DELETE /test/1000000020202 200 0.962 ms - 259


  24 passing (5s)

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Data model.
    
[datamodel]: data_model.PNG
