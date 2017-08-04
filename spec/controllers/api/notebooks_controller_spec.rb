require 'rails_helper'

RSpec.describe Api::NotebooksController, type: :controller do
  render_views

  let!(:user) { create(:user) }
  let!(:notebook_1) { create(:notebook) }
  let!(:notebook_2) { create(:notebook, title: 'notebook_2', user_id: 1) }

  before(:each) do
    login(:guest)
    notebook_1.update!(user_id: current_user.id)
    notebook_2.update!(user_id: current_user.id)
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
        get :show, { id: notebook_1.id, format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end

    context 'with invalid params' do
      before(:each) do
        get :show, { id: "", format: :json }
      end

      it { should respond_with(404) }
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      before(:each) do
        post :create, { notebook: { title: "create test", user_id: current_user.id }, format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
    end

    context 'with invalid params' do
      before(:each) do
        post :create, { notebook: { user_id: current_user.id }, format: :json }
      end

      it { should respond_with(503) }

      it "return an error message" do
        error = JSON.parse(response.body)[0]
        expect(error).to eq("Unable to save notebook")
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'with valid params' do
      before(:each) do
        delete :destroy, id: notebook_1.id, format: :json
      end

      it { should respond_with(200) }
      it { should render_template(:show) }
      it "should delete a notebook" do
        expect(Notebook.all.length).to eq(1)
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
