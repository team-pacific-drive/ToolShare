Rails.application.routes.draw do
  resources :tools

  # resources :users, only: [:show]

  devise_for :users
  get '/*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get '/', to: 'pages#unprotected', constraints: ->(request){ request.format.html? }
  root to: 'pages#unprotected'
end
