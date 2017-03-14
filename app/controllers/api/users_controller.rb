class Api::UsersController < ApplicationController
  def create
  @user = User.new(login_params)

  if @user.save
    login(@user)
    render :show
  else
    render json: @user.errors.full_messages, status: 422
  end
end
end
