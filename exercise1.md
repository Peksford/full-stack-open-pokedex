Our programming team of 6 people have developed an application coded in C++ and it is ready to be released. The application is a Graphical User Interface desktop program for users to design music album covers and posters etc.
 
Our CI setup uses cpplint as a linting static code checker. It is an open-source linting tool developed by Google, which will ensure that the code corresponds to Google's coding style guides. We will test the application using Google Test (gTest), which can be effortlessly integrated with CI tools. It provides the same functionalities as Jest in javascript, for example the ability to mock functions using the Google Mock. 

The project is built using CMake which is commonly used building tool in c++ and can be integrated with our CI system. We will build the application in Linux operating system. 

As an alternative for github actions, our CI setup uses one of the most popular CI/CD platforms in the world CircleCI. Our workflow .yml-file firstly installs dependencies and then builds the project, similarly to github actions. 

Considering our application is quite heavy and needs specific hardware resources, we have decided to use self-hosted CI setup. One programmer in our team is an expert in constructing an own CI system.
