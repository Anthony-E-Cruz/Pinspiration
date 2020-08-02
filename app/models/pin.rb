class Pin < ApplicationRecord
  validates :title, presence: true

  # belongs_to :user,
  #   foreign_key: :user_id
end
