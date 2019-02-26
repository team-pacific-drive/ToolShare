class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
<<<<<<< HEAD
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:firstname, :lastname, :email, :password, :phone_number, :cross_street, :city, :state, :zip_code)}
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:firstname, :lastname, :email, :password, :phone_number, :cross_street, :city, :state, :zip_code)}
=======
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:firstname, :lastname, :email, :password, :cross_street, :city, :state, :zip_code, :phone_number)}
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:firstname, :lastname, :email, :cross_street, :city, :state, :zip_code, :phone_number, :password, :current_password)}
>>>>>>> master
  end
end
