#VARIABLES FOR CATERINGFORM_PACKAGE_CHOICES
LIEUTENANT = "The Lieutenant"
CAPTAIN = "The Captain"
SARGEANT = "The Sargeant"

CATERINGFORM_PACKAGE_CHOICES = (
    (LIEUTENANT, "The Lieutenant"),
    (CAPTAIN, "The Captain"),
    (SARGEANT, "The Sargeant"),
)

## VARIABLES FOR CATERINGFORM_HOURS_CHOICES
ONE_HOUR = "1"
TWO_HOURS = "2"
THREE_HOURS = "3"
FOUR_HOURS = "4"

CATERINGFORM_HOURS_CHOICES =(
    (ONE_HOUR, "1"),
    (TWO_HOURS, "2"),
    (THREE_HOURS, "3"),
    (FOUR_HOURS, "4"),
)

## VARIABLES FOR CATERINGFORM_PAYMENT_CHOICES
VENMO = "VENMO"
CASH = "CASH"
CARD = "CARD"

CATERINGFORM_PAYMENT_CHOICES = (
    (VENMO, 'Venmo'),
    (CASH, 'Cash'),
    (CARD, 'Card'),
)

QUESTION = "QUESTION"
FEEDBACK = "FEEDBACK"
CONCERN = "CONCERN"

CONTACTFORM_CHOICES = (
    (QUESTION, 'Question'),
    (FEEDBACK, 'Feedback'),
    (CONCERN, 'Concern'),
)

ONE_STAR = "Not very good"
TWO_STAR = "Not good"
THREE_STAR = "OK"
FOUR_STAR = "Good"
FIVE_STAR = "Very good"

REVIEWFORM_FOOD_CHOICES = (
    (ONE_STAR, "Not very good"),
    (TWO_STAR, "Not good"),
    (THREE_STAR, "OK"),
    (FOUR_STAR, "Good"),
    (FIVE_STAR, "Very good"),
)

ONE_STAR = "Not very good"
TWO_STAR = "Not good"
THREE_STAR = "OK"
FOUR_STAR = "Good"
FIVE_STAR = "Very good"

REVIEWFORM_SERVICE_CHOICES = (
    (ONE_STAR, "Not very good"),
    (TWO_STAR, "Not good"),
    (THREE_STAR, "OK"),
    (FOUR_STAR, "Good"),
    (FIVE_STAR, "Very good"),
)