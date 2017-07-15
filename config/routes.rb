Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create], constraints: lambda { |req| req.xhr? }
    resource :session, only: [:create, :destroy], constraints: lambda { |req| req.xhr? }

    resources :notes, only: [:create, :show, :index, :update, :destroy], constraints: lambda { |req| req.xhr? }
    resources :notebooks, only: [:create, :show, :index, :destroy], constraints: lambda { |req| req.xhr? }
    resources :tags, only: [:create, :index, :show, :destroy], constraints: lambda { |req| req.xhr? }
  end
end
