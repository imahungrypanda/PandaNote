require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'Post #create' do
    context "with invalid params" do
      before(:each) do
        post :create, user: { username: "unknown" }, format: :json
      end

      it { should respond_with(422) }
    end

    context "with valid params" do
      before(:each) do
        post :create, user: {username: "guest", password: "password"}, format: :json
      end
      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the user' do
        expect(User.exists?).to be true
      end
    end
  end
end
