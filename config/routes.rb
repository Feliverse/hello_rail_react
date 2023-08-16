Rails.application.routes.draw do
  root 'root#index'
  
  get 'root/index'

  get 'greetings', to: 'greetings#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
