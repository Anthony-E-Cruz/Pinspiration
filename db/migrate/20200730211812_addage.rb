class Addage < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string
    add_column :users, :age, :integer, null: false
  end
end
