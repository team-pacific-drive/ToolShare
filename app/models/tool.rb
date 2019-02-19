class Tool < ApplicationRecord
  belongs_to :user
  delegate :firstname, :lastname, to: :user, prefix: true
end
