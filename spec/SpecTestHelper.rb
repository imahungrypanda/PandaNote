module SpecTestHelper
  def login(user)
    @user ||= User.where(:username => user.to_s).first if user.is_a?(Symbol)
    controller.session[:session_token] = @user.session_token
  end

  def current_user
    @user
  end
end
