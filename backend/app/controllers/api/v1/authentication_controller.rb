module Api::V1
  class AuthenticationController < ApiController
    skip_before_action :authenticate_request

    def authenticate_user
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        token = JsonWebToken.encode(user_id: user.id)
        render json: { access_token: token }
      else
        render json: { errors: 'invalid credentials' }
      end
    end
  end
end
