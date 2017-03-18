export const fetchNotes = () => (
  $.ajax({
    url: "/api/notes"
  })
);

export const fetchNote = id => (
  $.ajax({
    method: "GET",
    url: `/api/notes/${id}`,
    data: id
  })
);

export const createNote = note => (
  $.ajax({
    method: "POST",
    url: "/api/notes",
    data: { note }
  })
);

export const updateNote = note => (
  $.ajax({
    method: "PATCH",
    url: `/api/notes/${note.id}`,
    data: { note }
  })
);

export const deleteNote = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/notes/${id}`
  })
);
