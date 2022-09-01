class DatesCompletedsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def create
        habit = Habit.find_by(id: params[:habit_id])
        if habit
            new_completed_date = habits.dates_completeds.create!(completed_date_params)
            render json: new_completed_date, status: :created
        else
            render json: {error: "Habit record not found"}, status: :not_found
        end
    end

    def destroy
        completed_date = DatesCompleted.find_by(id: params[:id])
        if completed_date
            completed_date.destroy
            head :no_content
        else
            render json: {error: "Record not found"}, status: :not_found
        end
    end

    private

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def completed_date_params
        params.permit(:habit_id, :date, :weekday)
    end

    def invalid_record(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
