PHASE 2 PROJECT!

This is a presentation of selected artwork from the Metropolitan Museum of Art in New York City. This is a React app using client-side routing to present a Home page, Gallery page, and Favorites page. The app relies on a db.json server with two arrays of objects, one with content populating the Gallery page, and the other populating the Favorites page based on POST requests made via artwork on the Gallery page and DELETE requests from either the Gallery or Favorites page.

The app has various other functionality, including interstitial popup image based on click events on images in Gallery and Favorites to open and click off the interstitial image to close; audio files that autoplay if the user is on Home, Gallery, or Favorites; and an embedded video that autoplays on a loop in Home.

## Welcome to our website! Here's a brief introduction on how to navigate it and a layout of it's features.
1. Run "npm install && npm run server"
2. Open new terminal and run "npm start"
On page load you'll be greeted with our home page giving an intro to the real museum this site is based on. As well as a lovely song that was recorded inside the MET museum itself. 
Using the nav bar in three simple steps:
-Home will take you to our home page
-Gallery will take you to our main gallery
-Favorites will take you to the favorite artworks you favorite
The Gallery:
-Our main part of the site, displays a large selection of artwork. You can scroll through and click on any picture to see a larger image as well as clicking the Add/Remove favorites button to send the selected piece to the favorites page.
-Below the title of gallery is our search bar, feel free to use this tool to filter out the different artwork.
Favorites Page:
-A simple page that presents the different artwork you have favorited in the main gallery.