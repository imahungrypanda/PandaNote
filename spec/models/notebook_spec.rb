require 'rails_helper'

RSpec.describe Notebook, type: :model do
  let!(:notebook) { create(:notebook) }

  describe 'validations' do
    it { should validate_presence_of(:user_id) }
    it { should validate_presence_of(:title) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:notes) }
  end
end
