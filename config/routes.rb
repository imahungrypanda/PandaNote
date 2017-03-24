Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notes, only: [:create, :show, :index, :update, :destroy]
    resources :notebooks, only: [:create, :show, :index, :destroy]
    resources :tags, only: [:create, :index, :show, :destroy]
  end
end
