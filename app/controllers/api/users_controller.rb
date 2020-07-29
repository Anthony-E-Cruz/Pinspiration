class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    
    if @user.save
      sign_in(@user)
    else
      render json: @user.errors.full_messages, status: 401
    end 
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
