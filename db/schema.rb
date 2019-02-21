# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_20_194329) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tools", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "model"
    t.integer "price"
    t.string "serialnumber"
    t.string "photo"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "brand"
    t.integer "deposit"
    t.integer "total_estimated_price"
    t.integer "rental_length"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
<<<<<<< HEAD
    t.string "firstname"
    t.string "lastname"
    t.string "cross_street"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "phone_number"
=======
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "cross_street", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zip_code", null: false
    t.integer "phone_number", null: false

>>>>>>> 659d84b8fa82ea99293e74efa0e5d9c35d7c14fc
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
