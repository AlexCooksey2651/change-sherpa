Rails.application.routes.draw do
  resources :progress_updates
  resources :dates_completeds
  resources :goals, exclude: [:update]
  resources :habits, exclude: [:update]
  resources :users, exclude: [:index, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  patch 'habits/:id', to 'habits#update'
  patch '/habits/:id/activate', to 'habits#reactivate'
  patch '/habits/:id/deactivate', to 'habits#deactivate'
  patch 'goals/:id', to 'goals#update'
  patch 'goals/:id/mark-complete', to 'goals#mark_complete'
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
