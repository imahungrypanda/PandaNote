require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  # create a user first in the DB
  let!(:user) { create(:user) }

  describe 'Post #create' do
    context 'with valid params' do
      before(:each) do
        post :create, user: {
          username: 'guest',
          password: 'password'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }
    end

    context 'without valid params' do
      before(:each) do
        post :create, user: {
          username: 'guest'
        },
        format: :json
      end

      it { should respond_with(401) }
    end
  end

  describe 'Delete #destroy' do
    context 'with valid params' do
      before(:each) do
        post :create, user: {
          username: 'guest',
          password: 'password'
        },
        format: :json

        delete :destroy, format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }
    end

    context 'without valid params' do
      before(:each) do
        post :create, user: {
          username: 'guest'
        },
        format: :json

        delete :destroy, format: :json
      end

      it { should respond_with(404) }
    end
  end
end
