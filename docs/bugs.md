# Bug Tracking

This document will hold all the bugs and solutions that I encounter during the development of the this project. Some of them will be small while others might affect the whole project.

***
#### Creating to wrong controllers
**Issue:** While creating controllers from the command line I mistakenly added one that wasn't under API and one that wasn't plural.

**Correction:** I deleted the files, then committed. After committing I realized that I had missed some files. Four or five times of that process and now I am pretty sure there are no extra files.

***
#### Wrong version of react-router
**Issue:** The react-router module updated and changed a bunch of things and how they work.

**Correction:** Removed all the modules, changed the version on react-router then reinstalled.

***
#### Set the rootReducer differently than expected
**Issue:** When creating the rootReducer I set the sessionReducer to sessionReducer instead of session.

**Correction:** Tried removing a bunch of different things until I could log what was the issue. Corrected the assignment.

***
#### Not rendering errors when trying to login or signup
**Issue:** When trying to login or signup with in correct credentials no errors were being rendered.

**Correction:** Working my way backwards through the redux cycle I found that in the session reducer I was not correctly setting the errors. I needed to get the responseJSON from the errors.

***
#### Header elements did not want to stay in the header box
**Issue:** Elements in the header were jumping out of the div that was containing them.

**Correction:** I gave every tag it's own class name then used display flex on the containing box. Everything worked after that.

***
#### Heroku showed that my app was down
**Issue:** When you would go to Heroku the app was not there. All that showed up was a message that said the app had gone down and to look at the log for more information.

**Correction:** The issue was from me trying out new ways to format the date on each note. How I had left it threw an error which cased the whole thing to be down.

***
#### Adding notes would not cause a render
**Issue:** When spamming the add button only one note would appear until the page was refreshed.

**Correction:** I needed to add a new action to when the api call was making a new note so that it would update the state.

***
#### Deleting notes would not cause a render
**Issue:** When spamming the delete button no note would disappear until the page was refreshed.

**Correction:** Pretty much needed to do the same thing as with the add button.

***
#### Note index some times shows another users notes
**Issue:** When logging out and then in to another account sometimes in the index list there are notes from the previous user listed.

**Correction:**

***
#### Title
**Issue:**

**Correction:**
