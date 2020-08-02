class Api::PinsController < ApplicationController

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      render "api/pins/show"
    else
      render json: ['please add a title'], status 401
    end 
  end 

  def index
    @pin 
  end 

  def show

  end 

  private

  def pin_params
    params.require(:pin).permit(:title, :description)
  end 

end
