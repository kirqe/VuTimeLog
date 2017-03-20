Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :projects do
        member do
          get 'export', to: 'projects#export', as: :export
        end
      end
      resources :logs, only: [:create, :destroy]
      post 'auth', to: 'authentication#authenticate_user'
    end
  end
end
