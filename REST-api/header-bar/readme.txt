This folder contains the 3 qstn solution. It does not have any dependencies.
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
The header-server.js file contains the server side logic of the functionality present in our application.
