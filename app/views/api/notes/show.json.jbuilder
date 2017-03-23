json.extract! @note, :id, :title, :body, :user_id, :notebook_id, :archived, :created_at
json.tags @note.tags.each do |tag|
  json.extract! tag, :id
  json.text tag.name
end
