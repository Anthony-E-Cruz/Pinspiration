class Api::BoardsController < ApplicationController
  validates :title, presense: true

  require 'byebug'
  def create
    @board = Board.new(board_params)
    # debugger
    # @pin.user_id = params[:user_id]

    if @board.save
      # render json: {message: "you did it!"}
      render "api/boards/show"
    else
      # debugger
      render json: @board.errors.full_messages, status: 422
    end 
  end 

  # def show
  #   @pin = Pin.find(pin_params[:id])
  #   render "api/pins/show"
  # end 

  def index
    @board = Board.all
    render "api/boards/index"
  end 

  private

  def board_params
    params.require(:board).permit(:title, :creator_id)
  end 

end
