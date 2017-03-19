Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :projects
      resources :logs, only: [:create, :destroy]
      post 'auth', to: 'authentication#authenticate_user'
      get 'export/:id(.:format)', to: 'projects#export', as: :export
    end
  end
end
