class Api::NotesController < ApplicationController
  def index
    @notes = Note.where("user_id = ?", current_user.id.to_s)
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render( json: ["Unable to create note"], status: 424 )
    end
  end

  def update
    @note = Note.find(params[:id])

    if @note.update_attributes(note_params)
      render :show
    else
      render( json: ["Unable to update note"], status: 503)
    end
  end

  def destroy
    @note = Note.find(params[:id])

    if @note
      @note.delete
      render :show
    else
      render( json: ["Nothing to delete"], status: 404)
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :user_id, :notebook_id, :archived)
  end
end
