class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes
    render :index
  end

  def show
    note
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: e.to_s }, status: :not_found
  else
    render :show
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id

    if @note.save
      render :show
    else
      render( json: ["Unable to create note"], status: 424 )
    end
  end

  def update
    if note.update_attributes(note_params)
      render :show
    else
      render( json: ["Unable to update note"], status: 503)
    end
  end

  def destroy
    note.delete
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: e.to_s }, status: :not_found
  else

    render :delete
  end

  private
  def note
    @note ||= current_user.notes.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :body, :user_id, :notebook_id, :archived)
  end
end
