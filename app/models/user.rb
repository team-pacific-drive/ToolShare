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
end
