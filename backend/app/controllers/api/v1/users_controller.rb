module Api::V1
  class UsersController < ApiController
    skip_before_action :authenticate_request, only: :create

    def show
      render json: @current_user if @current_user
    end

    def create
      @user = User.new(user_params)

      if @user.save
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    private
      # for some reasons I can't make a json post request while keeping
      # require(:user)
      # params.require(:user).permit(:name, :email, :password)

      def user_params
        params.permit(:name, :email, :password)
      end
  end
end
