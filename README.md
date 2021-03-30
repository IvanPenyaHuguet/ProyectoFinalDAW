<!--
repo name: ProyectoFinalDAW
description: Final project for my Web Development Course, a laboratory applicatin
github name:  IvanPenyaHuguet
link: [LINK](https://github.com/IvanPenyaHuguet)

-->


<!-- PROJECT LOGO -->
<br />
<p align="center">    
    <h3 align="center">Laboratory Application for Reagents and Standards (LARS)</h3>
    <p align="center">       
        <br />       
        <a href="https://github.com/IvanPenyaHuguet/ProyectoFinalDAW/issues">Report Bug</a>
        <br />
        <a href="https://github.com/IvanPenyaHuguet/ProyectoFinalDAW/issues">Request Feature</a>
    </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project


${I needed to do a Web Application to finish my Web Development course at IES Camp de Morvedre, I have decided to do an application for
laboratories called LARS that helps to organize and search for reagents.}

Here's why:
* Normally you have a lot on reagents on laboratory, you need an easy way of keeping them update.
* Take less time searching for a reagent if you need it.
* Easy integration with another applications like an application to demand new reagents to buy


### Built With

* [React](https://es.reactjs.org)
* [Spring](https://spring.io)
  



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* NPM
You need npm and node last version and then execute.
```sh
npm install
```
* Maven
Install all the repositories on pom.xml

* You need a MySQL database accesible and then on resources add the file application.properties with a code like this:
```sh
server.port=8090
spring.session.jdbc.initialize-schema=always
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/finaldaw
spring.datasource.username=finaldaw
spring.datasource.password=finaldaw

```

### Installation


1. Clone the repo
```sh
git clone https://github.com/IvanPenyaHuguet/ProyectoFinalDAW
```
2. Install NPM packages
```sh
npm install
```
3. Install Maven dependencies
4. Add the file src/java/resources/application.properties, with this fields:
```sh
server.port=8090
spring.session.jdbc.initialize-schema=always
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/finaldaw
spring.datasource.username=finaldaw
spring.datasource.password=finaldaw

```
5. Initialize the spring boot server
6. Run npm build or npm run watch


<!-- CONTACT -->
## Contact

Iván Peña Huguet - ivanpenyahuguet@gmail.com

Project Link: [LINK](https://github.com/IvanPenyaHuguet/ProyectoFinalDAW)



