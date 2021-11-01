reviews.map((reviews,index) => (
    <ReactCardCarousel autoplay={ true } autoplay_speed={ 5000 }>
        <div style={ Carousel.CARD_STYLE }>
            <p>{reviews.first_name} {reviews.last_initial}</p>
            <p>Date Visited: {reviews.date_visited}</p>
            <p>Food Rating: {reviews.food_rating}</p>
            <p>Service Rating: {reviews.service_rating}</p>
            <p>Review:{reviews.review_message}</p>
        </div>
        <div style={ Carousel.CARD_STYLE }>
            <p>{reviews.first_name} {reviews.last_initial}</p>
            <p>Date Visited: {reviews.date_visited}</p>
            <p>Food Rating: {reviews.food_rating}</p>
            <p>Service Rating: {reviews.service_rating}</p>
            <p>Review:{reviews.review_message}</p>
        </div>
        <div style={ Carousel.CARD_STYLE }>
            <p>{reviews.first_name} {reviews.last_initial}</p>
            <p>Date Visited: {reviews.date_visited}</p>
            <p>Food Rating: {reviews.food_rating}</p>
            <p>Service Rating: {reviews.service_rating}</p>
            <p>Review:{reviews.review_message}</p>
        </div>
        <div style={ Carousel.CARD_STYLE }>
            <p>{reviews.first_name} {reviews.last_initial}</p>
            <p>Date Visited: {reviews.date_visited}</p>
            <p>Food Rating: {reviews.food_rating}</p>
            <p>Service Rating: {reviews.service_rating}</p>
            <p>Review:{reviews.review_message}</p>
        </div>
        <div style={ Carousel.CARD_STYLE }>
            <p>{reviews.first_name} {reviews.last_initial}</p>
            <p>Date Visited: {reviews.date_visited}</p>
            <p>Food Rating: {reviews.food_rating}</p>
            <p>Service Rating: {reviews.service_rating}</p>
            <p>Review:{reviews.review_message}</p>
        </div>
    </ReactCardCarousel>

    reviews.map((reviews,index) => (
    <ReactCardCarousel autoplay={ true } autoplay_speed={ 5000 }>
        <div style={ Carousel.CARD_STYLE }>
            <p>{reviews.first_name} {reviews.last_initial}</p>
            <p>Date Visited: {reviews.date_visited}</p>
            <p>Food Rating: {reviews.food_rating}</p>
            <p>Service Rating: {reviews.service_rating}</p>
            <p>Review:{reviews.review_message}</p>
        </div>
    </ReactCardCarousel>





<ReviewFormInnerContainer>

</ReviewFormContainer>



<ReviewFormInnerContainer>
    <ReviewFormInnerWrapper>
        <ReviewForm>
            <ReviewFormFirstName>
                <Input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="firstName"
                    defaultValue={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </ReviewFormFirstName>
            <ReviewFormLastInitial>
                <Input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Initial"
                    name="lastInitial"
                    defaultValue={lastInitial}
                    onChange={(e) => setLastInitial(e.target.value)} />
            </ReviewFormLastInitial>
            <ReviewFormDate>
                <Input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Date Visited"
                    name="dateVisited"
                    defaultValue={dateVisited}
                    onChange={(e) => setDateVisited(e.target.value)} />
            </ReviewFormDate>
            <ReviewFormFoodRating>
                <label>Food Rating:</label>       
                    <Select
                        defaultValue={foodRating}
                        onChange={setFoodRating}
                        options={options}
                    />
            </ReviewFormFoodRating>
            <ReviewFormServiceRating>
                <label>Service Rating:</label>       
                    <Select
                        defaultValue={serviceRating}
                        onChange={setServiceRating}
                        options={options}
                    />
            </ReviewFormServiceRating>
            <ReviewFormMessage>
                <StyledTextArea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Give us a little more info regarding your contact..."
                        name="message"
                        defaultValue={message}
                        onChange={(e) => setMessage(e.target.value)} />
            </ReviewFormMessage>
            <Button onClick={addReviewForm}>Submit Review</Button>
        </ReviewForm>
    </ReviewFormInnerWrapper>
</ReviewFormInnerContainer>




{data.map((review, index) => {
    let position = index > 0 ? "nextCard" : index === 0 ?
        "activeCard" : "prevCard";
    return <Card {...review} cardStyle={position} />;
})}
