class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def show
    notebook
    render :show
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id

    if @notebook.save
      render :show
    else
      render( json: ["Unable to save notebook"], status: 503)
    end
  end

  def destroy
    if notebook
      @notebook.destroy
      render :show
    else
      render( json: ["Nothing to delete"], status: 404)
    end
  end

  private

  def notebook
    @notebook ||= current_user.notebooks.find(params[:id])
  end

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
