class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def show
    begin
      notebook
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: e.to_s }, status: :not_found
    else
      render :show
    end
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
    begin
      notebook.destroy
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: e.to_s }, status: :not_found
    else
      render :show
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
