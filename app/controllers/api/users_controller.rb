class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    def check_email(email)
      (email.dup.split("@").length == 2) && (email.split(".").length == 2)
    end 

    if @user.save
      sign_in(@user)
      render "api/users/show"
    elsif !check_email(@user.email)
      debugger
      render json: ["Hmm...that doesn't look like an email address"], status: 401
    else
      render json: ['Your password is too short! You need 6+ characters.'], status: 401
    end 
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
