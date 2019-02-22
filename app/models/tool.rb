class Tool < ApplicationRecord
  belongs_to :user
  delegate :firstname, :lastname, to: :user, prefix: true

  validates :title, :model, :description, :price, presence: true
<<<<<<< HEAD

=======
>>>>>>> 9a062f426d570ac699e6690bb99de6f105360cd3
  validates :description, length: { maximum: 144 }

end
