class HabitsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record    

    before_action :authorize

    def create
        user = User.find_by(id: session[:user_id])
        new_habit = user.habits.create!(habit_params)
        new_habit.is_active = true
        render json: new_habit, status: :created
    end

    def destroy
        habit = Habit.find_by(id: params[:id])
        if habit
            habit.destroy
            head :no_content
        else
            render json: {error: "Habit record not found"}, status: :not_found
        end
    end

    def update
        habit = Habit.find_by(id: params[:id])
        if habit
            habit.update!(habit_params)
            render json: habit, status: :ok
        else
            render json: {error: "Habit record not found"}, status: :not_found
        end
    end

    def reactivate
        habit = Habit.find_by(id: params[:id])
        if habit
            habit.update!(is_active: true)
            render json: habit, status: :ok
        else
            render json: {error: "Habit record not found"}, status: :not_found
        end
    end

    def deactivate
        habit = Habit.find_by(id: params[:id])
        if habit
            habit.update!(is_active: false)
            render json: habit, status: :ok
        else
            render json: {error: "Habit record not found"}, status: :not_found
        end
    end


    private 

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def habit_params
        params.permit(:user_id, :habit_description, :number_days, :habit_priority, :action_plan, :obstacles, :backup_plan, :preparation_steps)
    end

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end

