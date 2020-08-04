json.extract! board, :id, :title, :creator_id, :pins

json.set! board.id do 
  board.pins.each do |pin|
    json.set! pin.id do
      json.photoUrl url_for(pin.photo) 
    end 
    json.set! pin.id do 
      pin.title
    end
  end 
end