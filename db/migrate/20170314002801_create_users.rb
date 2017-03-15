class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username,        null: false
      t.string :email
      t.string :password_digest, null: false
      t.string :session_token,   null: false

      t.timestamps null: false
    end

    add_index :users, :username,           unique: true
    add_index :users, :email,              unique: true
    add_index :users, [:username, :email], unique: true
  end
end
