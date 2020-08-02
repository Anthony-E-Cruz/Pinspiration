class Changes < ActiveRecord::Migration[5.2]
  def change
    rename_column :boards, :user_id, :creator_id
    add_column :pins, :board_id, :integer
  end
end
