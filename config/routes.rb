Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
  root 'root#index'
  
  get 'root/index'

  get 'greetings', to: 'greetings#index'
  get 'random_greeting', to: 'greetings#random'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
