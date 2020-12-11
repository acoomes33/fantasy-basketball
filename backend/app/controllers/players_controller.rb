class PlayersController < ApplicationController
    def index
        players = Player.all
        render json: players
    end
    
    def show
        player = Player.find(params[:id])
        render json: player
    end

    def create
        player = Player.new(player_params)

        if player.save
            render json: player
        end
    end

    private

        def player_params
            params.require(:player).permit(:name, :team, :number)
        end
end
