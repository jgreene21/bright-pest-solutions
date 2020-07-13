class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :destroy]
  def index
    render json: Review.all
  end

  def show
    render json: @review
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: review.errors, status: 422
    end
  end

  def destroy
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:stars, :title, :body, :author)
  end

  def set_review
    @review = review.find(params[:id])
  end
end

