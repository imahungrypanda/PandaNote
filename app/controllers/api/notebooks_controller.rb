class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
  end

  def show

  end

  def create

  end

  def destroy

  end

  private

  def notebook_params
  end
end
