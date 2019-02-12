class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :title
      t.string :description
      t.string :model
      t.integer :price
      t.string :serialnumber
      t.string :photo
      t.integer :zipcode
      t.integer :user_id

      t.timestamps
    end
  end
end
