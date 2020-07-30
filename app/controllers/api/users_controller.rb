class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: ['Your password is too short! You need 6+ characters.'], status: 401
    end 
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
