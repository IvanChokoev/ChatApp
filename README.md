# ChatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

The Angular App will connect to the backend Database from Firebase using the firebase SDK. The Firebase SDK will recognise that the app is using the realtime backend and so will automatically use WebSockets for communication between the Angular app and the Firebase backend.

I have left the APIKeys so that anyone can download and run the code. Obviously if it was in production those keys would be strictly confidential. I would advise you to play around and use your own firebase APIKeys for the App and replace them with the ones already in the project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
