class Tool < ApplicationRecord
  belongs_to :user
  delegate :firstname, :lastname, to: :user, prefix: true

  validates :title, :model, :description, :price, presence: true
<<<<<<< HEAD
  validates :description, length: { maximum: 144 }
=======

  validates :description, length: { maximum: 144 }

>>>>>>> master
end
