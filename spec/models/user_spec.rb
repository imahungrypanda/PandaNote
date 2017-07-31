require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_uniqueness_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:notes) }
    it { should have_many(:notebooks) }
  end

  describe 'model_methods' do
    describe '.find_by_credentials' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          found_user = User.find_by_credentials('guest', 'password')
          expect(found_user).to eq(user)
        end
      end

      context 'when given incorrect credentials' do
        it 'should return nil' do
          found_user = User.find_by_credentials('guest', 'wrong')
          expect(found_user).to eq(nil)
        end
      end
    end
  end

  describe 'instance_methods' do
    describe '#reset_session_token!' do
      it 'resets the session token' do
        current_token = user.session_token
        new_token = user.reset_token!
        expect(new_token).not_to eq(current_token)
      end
    end
  end
end
