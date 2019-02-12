require "application_system_test_case"

class ToolsTest < ApplicationSystemTestCase
  setup do
    @tool = tools(:one)
  end

  test "visiting the index" do
    visit tools_url
    assert_selector "h1", text: "Tools"
  end

  test "creating a Tool" do
    visit tools_url
    click_on "New Tool"

    fill_in "Description", with: @tool.description
    fill_in "Model", with: @tool.model
    fill_in "Photo", with: @tool.photo
    fill_in "Price", with: @tool.price
    fill_in "Serialnumber", with: @tool.serialnumber
    fill_in "Title", with: @tool.title
    fill_in "User", with: @tool.user_id
    fill_in "Zipcode", with: @tool.zipcode
    click_on "Create Tool"

    assert_text "Tool was successfully created"
    click_on "Back"
  end

  test "updating a Tool" do
    visit tools_url
    click_on "Edit", match: :first

    fill_in "Description", with: @tool.description
    fill_in "Model", with: @tool.model
    fill_in "Photo", with: @tool.photo
    fill_in "Price", with: @tool.price
    fill_in "Serialnumber", with: @tool.serialnumber
    fill_in "Title", with: @tool.title
    fill_in "User", with: @tool.user_id
    fill_in "Zipcode", with: @tool.zipcode
    click_on "Update Tool"

    assert_text "Tool was successfully updated"
    click_on "Back"
  end

  test "destroying a Tool" do
    visit tools_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tool was successfully destroyed"
  end
end
