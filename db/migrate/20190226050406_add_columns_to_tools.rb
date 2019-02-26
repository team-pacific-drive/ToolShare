class AddColumnsToTools < ActiveRecord::Migration[5.2]
  def change
    add_column :tools, :brand, :string
    add_column :tools, :deposit, :integer
  end
end
