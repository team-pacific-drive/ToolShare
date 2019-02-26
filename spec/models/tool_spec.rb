require 'rails_helper'

RSpec.describe Tool, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe do
    before do

      @tool = Tool.create(title: "Drill", model: "t300", description: "In good shape", price: "25")
    end
    it "can be created" do
      expect(@tool).to be_valid
    end
    it "cannot be created without firstname, lastname, cross_street, city, state, zip_code" do
      @tool.title = nil
      @tool.model = nil
      @tool.description = nil
      @tool.price = nil
      expect(@tool).to_not be_valid
    end
  end
end
