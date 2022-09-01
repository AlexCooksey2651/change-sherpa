class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Unauthorized User"}, status: :unauthorized
        end
    end

    def create
        new_user = User.create(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            user.destroy
            head :no_content
        else
            render json: { error: "User not found"}, status: :not_found
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update!(user_params)
            render json: user, status: :ok
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    private

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
