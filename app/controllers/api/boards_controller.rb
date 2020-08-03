class Api::BoardsController < ApplicationController

  def create
    @board = Board.new(board_params)
    # @pin.user_id = params[:user_id]
    if @board.save
      # render json: {message: "you did it!"}
      render "api/boards/show"
    else
      render json: @board.errors.full_messages, status: 422
    end 
  end 

  def show
    @board = Board.find(board_params[:id])
    render "api/boards/show"
  end 

  def index
    @boards = Board.all
    render "api/boards/index"
  end 

  private

  def board_params
    params.require(:board).permit(:title, :creator_id)
  end 

end
