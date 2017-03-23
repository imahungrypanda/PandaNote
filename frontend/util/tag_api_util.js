export const fetchTags = () => (
  $.ajax({
    url: "/api/tags"
  })
);

export const fetchNoteTags = id => (
  $.ajax({
    url: `/api/notes/${id}/tags`
  })
);

export const createTag = (tag, id) => (
  $.ajax({
    method: "POST",
    url: "/api/tags",
    data: {tag: { tag_name: tag, note_id: id }}
  })
);

export const deleteTags = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/tags/${id}`
  })
);

export const deleteTagging = (tag, noteId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/tagging/${tag.id}`,
    data: {tag: {id: `${tag.id}`, note_id: noteId}}
  })
);
