# PandaNote
[PandaNote Live][heroku]

![PandaNote-logo][logo]

PandaNote is a full-stack single page web application inspired by Evernote. It implements the main features of Evernote. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

![splash]

![home]

## Features & Implementation

### Notes and Rich Text Editing

When a user first logs in a call is made to the database to fetch all the notes that that user has made from the Note table. In the return a jbuilder view formats the response into a array of objects where the key is the the `id` of the note. At that key the `title`, `body`, `user_id`, `notebook_id`, `created_at` and most importantly an array of all the `tags` that the note has.

When a React component wants the array of `tags` there is a selector that remaps the tags to just an array of objects where the index is a note. By default the first note in this array is selected for editing.

The Rich Text Editing is `react-rte` which is based upon Draft.js. The interface has been simplified to make Draft more user friendly.

### Notebooks

![Notebooks][notebooks]

Notes are organized into notebooks that a user can create. By default a notebook with the user's username is created when a new account is made.

When a notebook is selected the note index changes to only display notes that are in that notebook. Notebooks can also be deleted which also deletes all notes that are associated with that notebook.

### Tags

![Tags][tags]

Tags on the backend are stored in one table while another table joins the relationships between notes. Having this join table helped to prevent having extra copies of a tag in the list of all the tags in the store.

Deleting a tab proved to be one of the most difficult parts of the project. There were many ways that it could be done. I decided on just having one delete route for tags to keep things simple. The destroy controller took a `note_id` and a `tag_id`. It first finds a tag with the `tag_id` then finds all the tagging's that the tag has. If the tagging has more than just one tagging it only deletes the tagging otherwise it deletes the tagging and tag.

```Ruby
 def destroy
    if tag.taggings.length > 1
      tag.taggings.where(note_id: tag_params[:note_id].to_i).first.destroy
      render json: [ "keep" ]
    elsif @tag
      @tag.destroy
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end


  private

  def tag
    @tag ||= Tag.find(params[:id])
  end
```

## Future Directions for the Project

No project is ever really finished. These are some of the things that I would like to implement in the future:

- [ ] Full implementation of a raw Draft.js editor
- [ ] Auto saving every few seconds
- [ ] Search through title's, notebooks, and tags
- [ ] Sharing
- [ ] Multi-user editing in real time
- [ ] Edit history

[heroku]:    http://pandanote.herokuapp.com/
[logo]:      /docs/logos/panda_icon_1.png
[splash]:    /docs/screen_shots/splash.png
[home]:      /docs/screen_shots/home.png
[tags]:      /docs/screen_shots/tags.png
[notebooks]: /docs/screen_shots/notebooks.png
