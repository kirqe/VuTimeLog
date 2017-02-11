Rails.application.routes.draw do
  resources :projects do
    resources :logs#, only: [:create, :destroy]
  end
end
