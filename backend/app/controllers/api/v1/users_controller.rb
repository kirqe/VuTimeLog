module Api::V1
  class UsersController < ApiController
    skip_before_action :authenticate_request, only: :create

    # POST /users
    def create
      @user = User.new(user_params)

      if @user.save
        render json: @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    private

      def user_params
        params.require(:user).permit(:name, :email)
      end
  end
end
