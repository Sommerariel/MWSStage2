# Mobile Web Specialist Certification Course
---
# Restaurant Stage 1
*My Project Thus Far*
This app is meant to be a reflection of the material learned within the first 1/3 of the Mobile Web Specialist Certification Course. I have adapted the code given me to be reflect 3 core areas: responsiveness, offline availability and accessibility. The content renders across a variety of viewports and size and changes depending on screen size. The images are loaded in only at the sizes needs to. Not too much, not too little. All content is accessible offline and in lo-fi connections for when the app cannot connect properly to the network. The app is also accessible to those who use keyboard functionality as well as a screen reader with the help of ARIA.
---
# Restaurant Stage 2
*My Project Thus Far*
I have expanded on the app from the first section of the course and added a few key features. The data now pulls in from a server and populates the page. The data from the server is then put into a database using the indexedDB Promise Library from Jake Archibald which can be found [here](https://github.com/jakearchibald/idb). The data is then cached using the service worker.
All content is still responsive with some added improvements on accessibility.
The following are my lighthouse scores that I get running my project locally with Simulated Fast 3G, 4x CPU Slowdown on Mobile and Clearing Storage.
![lighthouse Scores: Performance is 96, Progressive Web App is 91, Accessibility is 94, Best Practices is 94, and SEO is 89](https://github.com/Sommerariel/MWSStage2/blob/master/Lighthouse-score.png)

---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
## Project ADDENDUM:
 This repository is using [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/) jpg tiles optimized with quality:70.
You need to replace <your MAPBOX API KEY HERE> with token from [Mapbox](https://www.mapbox.com/), and you can check the [pricing](https://www.mapbox.com/pricing/): free and no credit card required.
