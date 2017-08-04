require 'rails_helper'

RSpec.describe Note, type: :model do
  let! (:note) { create(:note) }

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:notebook_id) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:notebook) }
    it { should have_many(:taggings) }
    it { should have_many(:tags) }
  end
end
