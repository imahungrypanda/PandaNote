export const fetchTags = () => (
  $.ajax({
    url: "/api/tags"
  })
);

export const createTag = tag => (
  $.ajax({
    method: "POST",
    url: "/api/tags",
    data: { tag }
  })
);

export const deleteTags = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/tags/${id}`
  })
);
