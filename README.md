# Native Landing App

Simple application for getting feedbacks or questions from people and store it in Google Sheets. This project consist of [NativeScript app](http://www.nativescript.org/) for Android and server side on [Express.js](http://expressjs.com/). The server side has deployed on [Heroku](https://devcenter.heroku.com/start). Looks like these:

![Start Page](https://github.com/PlusOneGeneration/native-landing-app/blob/master/presentation_screen/%2B1g-app.png)
![Registration Page](https://github.com/PlusOneGeneration/native-landing-app/blob/master/presentation_screen/%2B1g-app-forma-i.png)
![Finish Page](https://github.com/PlusOneGeneration/native-landing-app/blob/master/presentation_screen/%2B1g-app-finish.png)
![Result in Google Sheet](https://github.com/PlusOneGeneration/native-landing-app/blob/master/presentation_screen/landing-sheet.png)


This project has written with:
* [NativeScript](http://www.nativescript.org/)
* [NativeScriptUI](https://docs.nativescript.org/angular/ui/components.html)
* [Angular.io](https://angular.io/)
* Integration with [Google Sheets](https://developers.google.com/sheets/)
* [Heroku](https://devcenter.heroku.com/start) 
* [Supported CSS properties in NativeScript](https://docs.nativescript.org/ui/styling#supported-css-properties) 

## Getting Started

Follow step by step and you will be run this project on your machine.

* Set up your system for NativeScript. On the [NativeScript](http://www.nativescript.org/) side you can find [hands-on tutorials](http://docs.nativescript.org/angular/start/quick-setup) that walk you set up your system.
* Clone project from GitHub by SSH link ```git@github.com:PlusOneGeneration/native-landing-app.git``` or HTTPS```https://github.com/PlusOneGeneration/native-landing-app.git```

After those steps you can see a project structure as proposed below
![Project Structure](https://github.com/PlusOneGeneration/native-landing-app/blob/master/presentation_screen/app-sctructure.png)

For usage project as local you need two terminal tap
* Server side [S] - > ```cd server/```
* NativeSrcipt side [N] - > ```cd landing-app/```


* Setup server side:
  * Run ```npm install ```
  * Run ```npm start```

* Setup NativeScript side:
  * Check a ```registration-resource.ts``` that URL for registration looks like ```'http://10.0.2.2:3000/registration'```
  * Run ```tns install```
  * Run ```tns run android```

## Built application for mobile

For testing application on mobile you need to follow by next steps:
* you must be on the tab for NativeScript app or just go to ```cd landing-app/``` 
* run ```tns build android```
* go to ```platforms/android/build/outputs/apk``` and you have a ```landingapp-debug.apk``` file and you just need to download it on your mobile and run
* run and install ```landingapp-debug.apk```. Voila! You have landing-app on your phone

## Authors
* **_Irina Drozdova (feya)_** - developer



_Wish inspiration all_
