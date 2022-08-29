Rails.application.routes.draw do
  resources :progress_updates
  resources :dates_completeds
  resources :goals
  resources :habits
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
end
