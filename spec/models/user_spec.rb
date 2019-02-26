require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe 'creation' do
    before do
      @user = User.create(email: "marshawn@lynch.com", password: "password", password_confirmation: "password", firstname: "Marshawn", lastname: "Lynch", phone_number: "555-555-5555", cross_street: "Raider Way", city: "San Diego", state: "Ca", zip_code: "92116")
    end
    it "can be created" do
      expect(@user).to be_valid
    end
    it "cannot be created without firstname, lastname, cross_street, city, state, zip_code" do
      @user.firstname = nil
      @user.lastname = nil
      @user.cross_street = nil
      @user.city = nil
      @user.state = nil
      @user.zip_code = nil
      @user.phone_number = nil
      expect(@user).to_not be_valid
    end

  end



end
