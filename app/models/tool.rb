class Tool < ApplicationRecord
  belongs_to :user

  validates :title, presence: tru

end
