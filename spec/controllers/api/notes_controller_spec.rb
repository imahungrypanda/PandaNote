require 'rails_helper'

RSpec.describe Api::NotesController, type: :controller do
  # enable view rendering because the routes all return JSON
  render_views

  let!(:user) { create(:user) }
  let!(:note_1) { create(:note) }
  let!(:note_2) { create(:note, title: 'note_2', user_id: 1, notebook_id: 2) }

  before(:each) do
    login(:guest)
    note_1.update!(user_id: current_user.id)
    note_2.update!(user_id: current_user.id)
  end

  describe 'GET #index' do
    before(:each) do
      get :index, { format: :json }
    end

    it { should respond_with(200) }
    it { should render_template(:index) }
    it 'renders all existing notes' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response.length).to eq(2)
    end
  end

  describe 'GET #show' do
    context 'with valid params' do
      before(:each) do
        get :show, { id: note_1.id, format: :json }
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
    context 'with valid params' do
      before(:each) do
        post :create, { note: { title: "create test", body: "body test", notebook_id: 1 }, format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end

    context 'with invalid params' do
      before(:each) do
        post :create, { note: { body: "body test", notebook_id: 1 }, format: :json }
      end

      it { should respond_with(424) }

      it "return an error message" do
        error = JSON.parse(response.body)[0]
        expect(error).to eq("Unable to create note")
      end
    end
  end

  describe 'PATCH #update' do
    context 'with valid params' do
      before(:each) do
        patch :update, id: note_1.id, note: { title: "update test", body: "body test" }, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
      it "should update a note" do
        note = Note.find(note_1.id)
        expect(note.title).to eq("update test")
      end
    end

    context 'with invalid params' do
      before(:each) do
        post :update, id: 0, note: {  body: "body test", notebook_id: 1 }, format: :json
      end

      it { should respond_with(503) }

      it "return an error message" do
        error = JSON.parse(response.body)[0]
        expect(error).to eq("Unable to update note")
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'with valid params' do
      before(:each) do
        delete :destroy, id: note_1.id, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:delete) }
      it "should update a note" do
        expect(Note.all.length).to eq(1)
      end
    end

    context 'with invalid params' do
      before(:each) do
        delete :destroy, id: 0, format: :json
      end

      it { should respond_with(404) }

      it "return an error message" do
        error = JSON.parse(response.body)["error"]
        expect(error.length).to_not eq(0)
      end
    end
  end
end
