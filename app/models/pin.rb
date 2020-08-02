class Pin < ApplicationRecord
  validates :title, presence: true 

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board

end
