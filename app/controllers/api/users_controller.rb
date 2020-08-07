class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    def check_email(email)
      (email.dup.split("@").length == 2) && (email.split(".").length == 2)
    end 

    @user.username = @user.email.split("@")[0]

    if !check_email(@user.email)
      render json: ["Hmm...that doesn't look like an email address"], status: 401
    elsif @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: ['Your password is too short! You need 6+ characters.'], status: 401
    end 
  end

  def index 
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end 

  def update
    @user = User.find(params[:id])
    testing_user = @user.update!(user_params)
    render "api/users/show"
  end

  def user_params
    params.require(:user).permit(:email, :username, :password, :age, 
    :first_name, :last_name, :about_you, :location)
  end
end
