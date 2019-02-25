Rails.application.routes.draw do
  resources :tools

  devise_for :users

  resources :conversations do
    resources :messages
  end

  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
