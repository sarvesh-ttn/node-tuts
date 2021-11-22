This is a readme file for qstns 1,2 & 3 related to exercise of 16Nov. It does not have any dependency
You need to have nodejs installed on your system.
after cloning the repo
cd REST-api

For 1 qstn 
server.js contains rest-api logic and users.js contains dummy data of users.
1)on the terminal, run node server.js and open http://localhost:8080/ in your browser.
2) enter http://localhost:8080/user and it will load user data
3)enter http://localhost:8080/user?name="" will return data of that user if found else returns not found

For 2 qstn 
student-server.js contains rest api logic and student-list.js contains dummy data of students.
1)on the terminal, run node student-server.js and open http://localhost:8080/ in your browser.
2)http://localhost:8080/students will give all students data
3) http://localhost:8080/students?branch=CSE will give all CSE students data. 

For qstn 3 ,
header-bar folder contains the 3 qstn solution. It does not have any dependencies.
You need to have nodejs installed on your system.
1.cd to REST-api/header-bar.
2.on terminal write the command
    node header-server.js
    server will be started on port 8080.
3. open http://localhost:8080/ in address bar of your url, it'll load the default homepage.
  i) clicking about will load about-page and url will change to http://localhost:8080/about
  ii) clicking contact us will load contact us page and url will change to http://localhost:8080/contactus
  iii) any other address manually entered will open a  error page.

Description:
The header-server.js file contains the server side logic of the functionality present in our application , about-page.html contains about page details , contact-us.html contains contact page details and error-page.html will show any wrong url is passed and by default index.html will load.
