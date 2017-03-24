class Api::TagsController < ApplicationController
  def index
    @tags = []
    notes = current_user.notes.includes(:tags)

    notes.each do |note|
      @tags += note.tags
    end

    render json: @tags.uniq
  end

  def show
    @tag = Tag.find(params[:id])

    @tagged_notes = []
    notes = current_user.notes.includes(:taggings)
    if @tag
      notes.each do |note|
        @tagged_notes << note if note.taggings.any? { |tagging| tagging.tag_id == @tag.id }
      end
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def create
    @tag = Tag.find_or_create_by(name: tag_params[:tag_name])

    @tagging = Tagging.find_or_create_by(
      note_id: tag_params[:note_id],
      tag_id: @tag.id
    )

    render json: @tag
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tagging = @tag.taggings.select { |tagging| tagging.note_id == tag_params[:note_id].to_i }.first

    if @tag.taggings.length > 1
      @tagging.delete
      render json: [ "keep" ]
    elsif @tag
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
