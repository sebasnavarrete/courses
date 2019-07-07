# Pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

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

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##Test push notification

curl https://fcm.googleapis.com/fcm/send \
  -H"Content-Type: application/json" \
	-H"Authorization: key=AAAAq20PIxo:APA91bHUQjXH8LcKh6ec9Htz4Ybz7IXIVvGSsU8XwsfXEeo7NeEBYq3IKB6SCHblL8JdE8doZBfL33WCZda4477XJl-k80jonXk0WJleHSVfm9osYwuLtwIgnaEFcSlzEfPD-hqLEn9T" \
-d '{ "notification": { "title": "Nueva Feature!", "body": "Hay nuevas features","icon":"https://kuery.com.co/wp-content/uploads/2017/09/Asset-5.png", "click_action": "http://www.platzi.com"}, "to" : "dXgn5RPgpFc:APA91bF51a5FU8gEatrysQm81PXFbk0L3Ce9-pslarIkBK0JfxIPeoYZqnlvS4Z9tgSUMpJyDxiuyvIlSWPjY6rV6GZpIV2nzKQJALYDuxSwX05l3gbE3KOv8PDqq2xHPrkM5jdZIoY6"
}'
