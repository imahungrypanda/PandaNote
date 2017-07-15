class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes
    render :index
  end

  def show
    @note = current_user.notes.find(params[:id])
    render :show
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: e.to_s }, status: :not_found
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
    @note = current_user.notes.find(params[:id])

    if @note.update_attributes(note_params)
      render :show
    else
      render( json: ["Unable to update note"], status: 503)
    end

  rescue ActiveRecord::RecordNotFound => e
    render json: { error: e.to_s }, status: :not_found
  end

  def destroy
    @note = current_user.notes.find(params[:id])

    if @note
      @note.delete
      render :show
    else
      render( json: ["Nothing to delete"], status: 404)
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: e.to_s }, status: :not_found
  end

  private

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end

  def note_params
    params.require(:note).permit(:title, :body, :user_id, :notebook_id, :archived)
  end
end
