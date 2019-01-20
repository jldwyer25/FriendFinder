# FriendFinder
FriendFinder is a survey application using the express and path npm packages for routing that will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## How it Works

Using express and path to daisy chain my routes together, I took a predefined array of objects called friendsArray, defining the names, pics, and scores. I used a get request to display my array on my Friends API page with the routes defined in the apiRoutes file. Inside of the apiRoutes file, I also have my nested for-loops, where the outer loop prepares the friendsArray to be compared with the inner loop, the comparison of the user's answers. Defining results as 0 in between these loops, lets the two arrays compare each other. This only works because of the javascript on the survey.html page, parsing the values of the questions to be stored, pushed into the api, and then compared with the inner loop.

Using the htmlRoutes file, I enable the virtual paths to be constructed for users to travel between pages without losing any of their information until the session is complete.

## Acknowledgements

Phil, for the help with his outline and instructions for two loops.
The Tues-Thurs study group bois n gurls.

