json.extract! tool, :id, :title, :description, :model, :price, :serialnumber, :photo, :brand, :deposit, :user_id, :created_at, :updated_at, :user_firstname, :user_lastname, :user_cross_street, :user_city, :user_state, :user_zip_code, :user_phone_number
json.url tool_url(tool, format: :json)
