class Api::PinsController < ApplicationController

  def create
    @pin = Pin.new(pin_params)
    # @pin.user_id = params[:user_id]

    if @pin.save
      # render json: {message: "you did it!"}
      render "api/pins/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end 
  end 

  # def show
  #   @pin = Pin.find(pin_params[:id])
  #   render "api/pins/show"
  # end 

  def index
    @pins = Pin.all
    debugger
    render "api/pins/index"
  end 

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :photo, :user_id, :board_id)
  end 

end
