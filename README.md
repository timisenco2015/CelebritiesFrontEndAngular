# LimbikCodeChallengeFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Description

A simple web page that fectches list of all celebrities from the database and display them to users using pagination. Users are allow to search by Firstname, Lastname and profession. The images for the celebrities are stored on AWS S3Bucket. It also implemented caching using rxjs mehthods. It is a well tested web application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build Code Structure
```bash
| -- src
  |
  | -- app 
  |
    | -- celebrity
    | 
      | -- celebrity.component.css
      |
      | -- celebrity.component.html
      |
      | -- celebrity.component
    |
    | -- entity
    |
      | -- celebrity
      |
    |
    | -- service
    |
      | -- apiService
      |
      | -- celebrity.Service
    |  
    | -- test
    |
      |-- celebrityTest
      |
        |-- celebrityComponent.spec.ts
        |
        | -- mockCelebrityService
      |
      | -- entityTest 
      |
        | --  celebrityTest.spec.ts
      |
      | -- serviceTest
      |
        |-- apiServiceTest.spec.ts
        |
        | -- celebrityServiceTest.spec.ts
        |
        | -- inMemCelebrityMockService.ts
        |
        | -- mockAPIService
      |
    |
  ```

## Code details
```bash
  - apiService (service folder): has a method called getAllCelebrities() with parameter. This method calls http get         method. API Url is passed to the http get method from app.config.ts using @Inject(). http get method fecthes data       from the server and return an Observable
  - CelebrityService (service folder) 
      -- methods are:
          -- getCelebrities(): this method get all celebrities from the databse by calling  getAllCelebrities in API                  Service. It returns Observable
          -- 
  

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
