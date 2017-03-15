Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:show, :create]
      resources :projects
      resources :logs, only: [:create, :destroy]
      post 'auth', to: 'authentication#authenticate_user'
    end
  end
end
