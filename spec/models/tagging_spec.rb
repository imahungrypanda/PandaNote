require 'rails_helper'

RSpec.describe Tagging, type: :model do
  let!(:tagging) { create(:tagging) }

  describe 'validations' do
    it { should validate_presence_of(:note_id) }
    it { should validate_presence_of(:tag_id) }
  end

  describe 'associations' do
    it { should belong_to(:note) }
    it { should belong_to(:tag) }
  end
end
