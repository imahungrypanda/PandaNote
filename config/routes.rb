Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notes, only: [:create, :show, :index, :update, :destroy]
    resources :notebooks, only: [:create, :show, :index, :destroy]
    resources :tags, only: [:create, :index, :destroy]
  end

  get 'api/notes/:id/tags', to: 'api/notes#tags'
  delete 'api/tagging/:id', to: 'api/tags#destroyTagging'
end
