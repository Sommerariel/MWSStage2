# Mobile Web Specialist Certification Course

---
## Restaurant Stage 2
*My Project Thus Far*
I have expanded on the app from the first section of the course and added a few key features. The data now pulls in from a server and populates the page. The data from the server is then put into a database using the indexedDB Promise Library from Jake Archibald which can be found [here](https://github.com/jakearchibald/idb). The data is then cached using the service worker.
All content is still responsive with some added improvements on accessibility.
The following are my lighthouse scores that I get running my project locally with Simulated Fast 3G, 4x CPU Slowdown on Mobile and Clearing Storage.
![lighthouse Scores: Performance is 96, Progressive Web App is 91, Accessibility is 94, Best Practices is 94, and SEO is 89](https://github.com/Sommerariel/MWSStage2/blob/master/Lighthouse-score.png)

---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 2
In order to get started you need to go here and fork the [server repository](https://github.com/udacity/mws-restaurant-stage-2) and then place both this and the server repository in one master folder side by side. The server repository is not mine and was written for this course, by the lovely @forbiddenvoid @richardkalehoff @asparr. All credit goes to them.

### Local Development API Server
### Usage
#### Get Restaurants
```
curl "http://localhost:1337/restaurants"
```
#### Get Restaurants by id
````
curl "http://localhost:1337/restaurants/{3}"
````

## Architecture
Local server
- Node.js
- Sails.js

## Contributors

- [Brandy Lee Camacho - Technical Project Manager](mailto:brandy.camacho@udacity.com)
- [David Harris - Web Services Lead](mailto:david.harris@udacity.com)
- [Omar Albeik - Frontend engineer](mailto:omaralbeik@gmail.com)

## Getting Started

### Development local API Server
_Location of server = /server_
Server depends on [node.js LTS Version: v6.11.2 ](https://nodejs.org/en/download/), [npm](https://www.npmjs.com/get-npm), and [sails.js](http://sailsjs.com/)
Please make sure you have these installed before proceeding forward.

Great, you are ready to proceed forward; awesome!

Let's start with running commands in your terminal, known as command line interface (CLI)

###### Install project dependancies
```Install project dependancies
# npm i
```
###### Install Sails.js globally
```Install sails global
# npm i sails -g
```
###### Start the server
```Start server
# node server
```
### You should now have access to your API server environment
debug: Environment : development
debug: Port        : 1337


If you find a bug in the source code or a mistake in the documentation, you can help us by
submitting an issue to our [Waffle Dashboard](https://waffle.io/udacity/mwnd-issues). Even better you can submit a Pull Request with a fix :)

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
## Project ADDENDUM:
 This repository is using [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/) jpg tiles optimized with quality:70.
You need to replace <your MAPBOX API KEY HERE> with token from [Mapbox](https://www.mapbox.com/), and you can check the [pricing](https://www.mapbox.com/pricing/): free and no credit card required.
