class Api::PinsController < ApplicationController

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = params[:user_id]

    if @pin.save
      render "api/pins/show"
    else
      render json: ['please add a title'], status 401
    end 
  end 

  def show
    @pin = Pin.find(pin_params[:id])
    render "api/pins/show"
  end 

  def index
    @pins = Pin.all
    render "api/pins/index"
  end 

  private

  def pin_params
    params.require(:pin).permit(:title, :description)
  end 

end
