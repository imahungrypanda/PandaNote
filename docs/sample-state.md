**Sample State**

```js
{
  currentUser: {
    id: "1",
    username: "username"
  },
  forms: {
    signIn: { errors: [] },
    signUp: { errors: [] },
    createNote: { errors: ["body can't be blank"] },
    tag: { errors: ["tag must have a name"] }
  },
  note: {
    1: {
      title: "title",
      body: "text goes in here",
      user_id: 1,
      notebook_id: 1,
      tags: {
        1: {
          id: 1,
          name: "Tagname"
        }
      }
    }
  },
  notebook: {
    1: {
      title: "Iamatitle",
      user_id: 1
    }
  },
  tags: {
    1: {
      id: 1,
      name: "tagname"
    }
  }
}
```
