class AddUserAddressInfoToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cross_street, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zip_code, :integer
    add_column :users, :phone_number, :integer
  end
end
