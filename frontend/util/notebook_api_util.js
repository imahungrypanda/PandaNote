export const fetchNotebooks = () => (
  $.ajax({
    url: "/api/notebooks"
  })
);

export const fetchNotebook = id => (
  $.ajax({
    url: `/api/notebooks/${id}`
  })
);

export const createNotebook = notebook => (
  $.ajax({
    method: "POST",
    url: "/api/notebooks",
    data: { notebook }
  })
);

export const deleteNotebook = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/notebooks/${id}`
  })
);
