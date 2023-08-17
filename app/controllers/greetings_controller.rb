class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
  end
  def random
    @random_greeting = Greeting.order('RANDOM()').first
    render json: @random_greeting
  end
end
