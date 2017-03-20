class Notebook < ActiveRecord::Base
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :notes
end
