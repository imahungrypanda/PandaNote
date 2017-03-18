class RemoveNull < ActiveRecord::Migration
  def change
    change_column :notes, :body, :text, null: true
  end
end
