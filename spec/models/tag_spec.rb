require 'rails_helper'

RSpec.describe Tag, type: :model do
  let!(:tag) { create(:tag) }

  describe 'validations' do
    it { should validate_presence_of(:name) }
  end

  describe 'associations' do
    it { should have_many(:taggings) }
    it { should have_many(:taggings).dependent(:destroy) }
  end
end
