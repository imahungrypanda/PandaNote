# PandaNote
[PandaNote Live (TBD)][heroku]

[Trello Link][trello]

[heroku]: https://pandanote.herokuapp.com/
[trello]: https://trello.com/b/BcGDAmMQ/fullstack-project


## Minimum Viable Product
PandaNote is a note taking app that is inspired by EverNote built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Production README
- [x] New account creation, login, and guest/demo login
- [x] Hosting on Heroku
- [ ] Notes
- [ ] Notebooks for organizing notes
- [ ] Tags
- [ ] Rich Text Editing


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1D2-3)

**Main Objective:** Functioning rails project with front-end Authentication
* Back-end Authentication with Rails
* Front-end Authentication with React
* Users
  * Table
  * Model validations and associations
  * Controller (Session Controller too)
  * React components
  * CSS Styling

### Phase 2: Notes Model, API, and components (2 days, W1D4-5)

**Main Objective:** Notes can be created, read, edited and destroyed through the API.
* Notes
  * Table
  * Model validations and associations
  * Controller
  * React components
  * CSS Styling

### Phase 3: Notebooks (2 days, W2D1-2)

**Main Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.
* Notebooks
  * Table
  * Model validations and associations (update Notes model)
  * Controller
  * React components
  * CSS Styling

### Phase 4: Tags (1 day, W2D3)

**Main Objective:** Notes can be tagged with multiple tags.
* Tags
  * Table
  * Model validations and associations (update Notes model)
  * Controller
  * React components
  * CSS Styling
* Tag Search
  * Filter notes using React

### Phase 5: Allow Complex Styling in Notes (1 day, W2D4)

**Main Objective:** Allow rich text editing of notes.

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2D5)

**Main Objective:** Add infinite scroll to Notes Index

### Bonus Features (TBD)
- [ ] AutoSave
- [ ] Search notes by content
- [ ] Code snippets
- [ ] Set reminders on notes
- [ ] Change-logs for Notes
- [ ] Multiple sessions
