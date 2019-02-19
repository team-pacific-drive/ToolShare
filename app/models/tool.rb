class Tool < ApplicationRecord
  belongs_to :user

  delegate :firstname, :lastname, to: :user, prefix: true

  validates :title, :model, :description, :zipcode, :price, presence: true
  validates :description, length: { maximum: 144 }
  validates :zipcode, length: { minimum: 5 }
end
