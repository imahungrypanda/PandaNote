class Api::TagsController < ApplicationController
  def index
    # TODO: move this conversion to a jbuilder view.
    @tags = []
    notes = current_user.notes.includes(:tags)

    notes.each do |note|
      @tags += note.tags
    end

    render json: @tags.uniq
  end

  def create
    debugger
    @tag = Tag.find_or_create_by(name: tag_params[:tag_name])

    @tagging = Tagging.find_or_create_by(
      note_id: tag_params[:note_id],
      tag_id: @tag.id
    )

    render json: @tag
  end

  def destroy
    @tag = Tag.find(params[:id])

    if @tag
      @tag.destroy
      @tag.taggings.destroy_all
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:tag_name, :note_id)
  end
end
