# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text             not null
#  user_id     :integer          not null
#  notebook_id :integer          not null
#  archived    :boolean          default("false")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base
  validates :title, :user_id, :notebook_id, presence: true

  belongs_to :user
  belongs_to :notebook
end
