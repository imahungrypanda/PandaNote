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
