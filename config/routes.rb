Rails.application.routes.draw do
  resources :tools
  devise_for :users
  get '/*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get '/guest/*path', to: 'pages#unprotected', constraints: ->(request){ request.format.html? }
  root to: 'pages#unprotected'
end
