class RemoveZipcodeFromTools < ActiveRecord::Migration[5.2]
  def change
    remove_column :tools, :zipcode, :integer
  end
end
