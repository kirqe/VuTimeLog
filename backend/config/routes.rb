Rails.application.routes.draw do
  resources :logs, only: :destroy
  resources :projects do
    resources :logs, only: :create
  end
end
