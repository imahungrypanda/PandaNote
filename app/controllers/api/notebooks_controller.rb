class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
    render :show
  end

  def create
    
  end

  def destroy

  end

  private

  def notebook_params
  end
end
