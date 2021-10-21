Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get '/events', to: 'events#index'
  # get '/events/:id', to: 'events#show'
  # post '/events', to: 'events#create'
  # put '/events/:id', to: 'events#update'
  # delete '/events/:id', to: 'events#destroy'

  resources :event, only: [:index, :show, :create, :update, :destroy]
end
