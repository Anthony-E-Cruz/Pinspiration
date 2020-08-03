class Board < ApplicationRecord

  validates :title, presence: true 

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  # has_many :pins,
  #   foreign_key: :board_id,
  #   class_name: :Pin

end
