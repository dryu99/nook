# Nook

[Check it out here!](https://infinite-ac-lofi.firebaseapp.com/)

# Devpost - RookieHacks 2020
## Inspiration
Ever just feel like being even further immersed in Tom Nook's frabricated reality? 'cause me too! Introducing, Nook: a webpage that lets you stream hourly Animal Crossing themes and their lofi variations -- with cool visuals and rain sounds!

## What it does
When you press the play button, Nook will play lo-fi Animal Crossing songs infinitely based on your current browser time, with different music every hour. A bonus is that if you allow Nook access to your location, it will play soft rain sounds in the background of your music if it is raining at your current location. The drop down menu allows users to select whether they want particle effects on the background, and also has a button to manually start or stop the background rain sounds. There are different gradients depending on the 

## How we built it
Our techstack consisted of vanilla JavaScript, HTML, CSS, Firebase, and Node.js. We used Firebase to host our project and Node.js to install Webpack so we could bundle our scripts and have access to ES6 modules.

## Challenges we ran into
* Division of labour: Since our group consisted of developers at varying experience levels, we wanted to make sure that everyone had tasks to work on and was able to contribute. We decided on specific issues appropriate for each developer and made sure to support each other throughout the project.
* Fatigue :<
* Figuring out which songs to download

## Accomplishments that we're proud of
* Learning Javascript, HTML, CSS at the same time.
* Being able to teach and explain concepts of varying difficulties such as id tags and APIs.
* Daniel being awake at 3:30am to do a pull request. 

## What we learned
* Learning JavaScript
* Learning about APIs
* Learning about asynchronous code
* Learning about Git and Version Control
* Learning about Code developer tools (e.g. vsCode Live Share)

## What's next for Nook
* add the ability to add custom songs
* more visualizations

![Screen Shot 2020-05-31 at 1 21 11 AM](https://user-images.githubusercontent.com/23178940/83348009-ef086b80-a2dd-11ea-8f1f-4eaf111ff693.png)
![Screen Shot 2020-05-31 at 1 22 40 AM](https://user-images.githubusercontent.com/23178940/83348011-f16ac580-a2dd-11ea-8346-092c845502a8.png)
![Screen Shot 2020-05-31 at 1 25 40 AM](https://user-images.githubusercontent.com/23178940/83348013-f2035c00-a2dd-11ea-8e32-92b5d8df984b.png)
![Screen Shot 2020-05-31 at 1 26 06 AM](https://user-images.githubusercontent.com/23178940/83348014-f2035c00-a2dd-11ea-9022-1b479a1378fb.png)

### git workflow
1. (first time setup) pull the repository `git clone https://github.com/dryu99/infinite-animal-crossing-lofi.git`
2. checkout into a new branch `git checkout -b NAME-OF-BRANCH`
3. make your changes, go wild!
4. tell git to track your changes by doing `git add .`
5. save your changes and give it a meaningful name by doing `git commit -m "describe your changes here"`
6. double check to see what git is keeping track of by doing `git status`
7. push those changes up to github `git push origin NAME-OF-BRANCH`
8. go to github and make a pull request!
9. merge it into master

### common pitfalls
1. help! what do i do if my git says "failed to push some refs to origin"
    1. you wanna pull your changes and do `git pull origin master`
2. help! i wanna revert to an earlier version!
   1. find the last time you saved your work by doing `git log` and keep track of the hash
   2. then `git reset --hard <hash>` 
3. how do i update my local version to be up to date with github?
   1. `git pull origin master`
4. how do i switch branches?
   1. `git checkout NAME-OF-BRANCH`

