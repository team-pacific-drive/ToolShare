class AddUserInfoToTools < ActiveRecord::Migration[5.2]
  def change
    add_column :tools, :user_firstname, :string
    add_column :tools, :user_lastname, :string
  end
end
