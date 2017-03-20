# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ActiveRecord::Base
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :notes
end
