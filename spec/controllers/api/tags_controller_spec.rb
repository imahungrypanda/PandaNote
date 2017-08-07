require 'rails_helper'

RSpec.describe Api::TagsController, type: :controller do
  # enable response to have a body
  render_views

  let!(:user) { create(:user) }
  let!(:note) { create(:note) }
  let!(:tag_1) { create(:tag) }
  let!(:tag_2) { create(:tag, name: 'test tag 2') }
  let!(:tagging_1) { create(:tagging) }
  let!(:tagging_2) { create(:tagging, note_id: 2, tag_id: 2) }

  before(:each) do
    login(:guest)
    note.update!(user_id: current_user.id)
    tagging_1.update!(tag_id: tag_1.id, note_id: note.id)
    tagging_2.update!(tag_id: tag_2.id, note_id: note.id)
  end

  describe 'GET #index' do
    before(:each) do
      get :index, { format: :json }
    end

    it { should respond_with(200) }
    it 'renders all tags that belong to a user' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response.length).to eq(2)
    end
  end

  describe 'GET #show' do
    context 'with valid params' do
      before(:each) do
        get :show, { id: tag_1.id, format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end

    context 'with invalid params' do
      before(:each) do
        get :show, { id: "", format: :json}
      end

      it { should respond_with(404) }
    end
  end

  describe 'POST #create' do
    before(:each) do
      post :create, { tag: { tag_name: "test tag name" }, format: :json }
    end

    it { should respond_with(200) }
  end

  describe 'DELETE #destroy' do
    context 'with valid params' do
      before(:each) do
        delete :destroy, id: tag_1.id, format: :json
      end

      it { should respond_with(200) }
      it "should delete taggings" do
        expect(Tagging.all.length).to eq(1)
      end
    end
  end
end
