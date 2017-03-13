## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
  * Nav Bar
    * Logo
    * SignIn/SIgnUp
  * Footer
    * LinkedIn Profile
    * Github Repo

**UserHomeContainer**
 - UserHome
  * Side Bar
    * User info
  * NotesIndex
  * NoteEditor

**NotesContainer**
 - NoteIndex
  * NoteIndexItem

**NotebookContainer**
 - NotebookHeader
  * NoteIndex

**TagContainer**
 - TagHeader
  * TagIndex

**NoteIndex**
 - NoteIndexItem
  * NoteDetail
    * NoteTools
    - Tags
      - Tag
    * Note

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**NewNotebook**
 - NewNotebook

**NewTag**
 - NewTag

**TagsSearch**
 * AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "root/home" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
