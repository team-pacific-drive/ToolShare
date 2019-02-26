class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  acts_as_messageable

  def name
    "#{id} name: #{firstname} #{lastname}"
  end

  def mailboxer_email(object)
    nil
  end

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :tools

<<<<<<< HEAD
  validates :firstname, :lastname, :cross_street, :city, :state, :zip_code, :phone_number, presence: true
=======
  validates_presence_of :firstname, :lastname, :cross_street, :city, :state
  validates_length_of :zip_code, minimum: 5, maximum: 5

  validates_format_of :phone_number, :with => /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                                     :message => 'must be in xxx-xxx-xxxx format.'
                                     # :length => { :minimum => 10 }
>>>>>>> 6a8188fd02640e3861378d9f8f5e99a125ef549a
end
