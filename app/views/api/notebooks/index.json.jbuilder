@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :title, :user_id
  end
end
