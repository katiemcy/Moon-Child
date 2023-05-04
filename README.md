# Welcome to Moon Child!🌛 

Hi! My name is Katie and I'm the developer of Moon Child. This is my first solo project during my time at the web development immersive bootcamp in Juno College of Technology. 

Moon Child a React web application that shows users the moon phase on their selected date. In this document, I'm going to walk you through how I organized my ideas and developed this app from scratch.


## Wireframes
The minimum viable goal of this project is: 
- to allow users to select a date, which would trigger an API call from the WeatherAPI on submission.
- the API call would then return the astronomy data of the selected date, which include the desired moon phase data.

So, here are the initial wireframes that I established using Figma. You will also find how I structured the page into components. 

<img src="planning/moon-child-wireframe-01.png " alt="wireframe of moon child" title="Moon Child Wireframe (main page)">
<img src="planning/moon-child-wireframe-02.png " alt="wireframe of moon child" title="Moon Child Wireframe (result page)">

View on Figma: https://www.figma.com/file/QY9I4yqE4aqVrmnbqKocok/Moon-Child-App?node-id=0%3A1&t=u6Ls2ShE20nyC4Wl-1

### `MoonImg.js`
My plan is to have the moon image (or video on wider screens) display dynamically according to user's location within the page. Therefore I've put the moon visual into it's own component. Currently, different moon phase images are displayed based on the result. I'm working on improving the delivery of moon visual to enhance a smoother user experience.

## App Tree
Below is the component structure of Moon Child. I've also included some pseudo codes in the map for ease of referencing.

<img src="planning/moon-child-app-tree.png " alt="app tree of Moon Child" title="Moon Child App Tree">

View on Figma: https://www.figma.com/file/H54uOYPgY313tdgCO2PYF0/Moon-Child-AppTree?t=u6Ls2ShE20nyC4Wl-0


## Coming Soon
### `C-Space (name to be confirmed)`
C-space is a feature where you get to generate words of encouragement to other Moon Child of your kind. This will be done via Firebase real time database, which stores pre-generated sentences that users can choose from. User generated quotes will be saved to the database and displayed accordingly. Stay tuned!
