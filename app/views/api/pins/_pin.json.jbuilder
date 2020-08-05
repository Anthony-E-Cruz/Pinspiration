json.extract! pin, :id, :title, :description, :user_id, :board_id, :user, :board
json.photoUrl url_for(pin.photo)