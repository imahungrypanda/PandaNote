class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :signed_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def sign_out
    @current_user.reset_token!
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def login_params
    params.require(:user).permit(:username, :password)
  end
end
