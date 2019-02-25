class Tool < ApplicationRecord
  belongs_to :user
  delegate :firstname, :lastname, :cross_street, :city, :state, :zip_code, :phone_number, to: :user, prefix: true

  validates :title, :model, :description, :price, presence: true
  validates :description, length: { maximum: 144 }

end
