#VARIABLES FOR PRODUCT MODEL CHOICES
FOOD = "Food"
BEVERAGES = "Beverages"
SIDES = "Sides"
DESSERT = "Desserts"
NONFOOD = "Non-Food"

PRODUCT_CHOICES = (
    (FOOD, "Food"),
    (BEVERAGES, "Beverages"),
    (SIDES, "Sides"),
    (DESSERT, "Desserts"),
    (NONFOOD, "Non-Food"),
)

GIFT_CARD = "Gift Card"
MERCHANDISE = "Merchandise"
SERVICES = "Services"

PROUDCT_TAGS = (
    (GIFT_CARD, "Gift Card"),
    (MERCHANDISE, "Merchandise"),
    (SERVICES, "Services"),
)

## VARIABLES FOR ORDER MODEL CHOICES
SUBMITTED = "Submitted"
IN_PROGRESS = "In Progress"
COMPLETED = "Completed"

ORDER_STATUS_CHOICES = (
    (SUBMITTED, "Submitted"),
    (IN_PROGRESS, "In Progress"),
    (COMPLETED, "Completed"),
)


## VARIABLES FOR EMPLOYEE MODEL CHOICES
OWNER = "Owner"
FOUNDER = "Founder"
EMPLOYEE = "Employee"

EMPLOYEE_CHOICES =(
    (OWNER, "Owner"),
    (FOUNDER, "Founder"),
    (EMPLOYEE, "Employee"),
)

## VARIABLES FOR INSPECTION MODEL CHOICES
EQUIPMENT_INSPECTION = "Equipment Inspection"
CLEANLINESS_INSPECTION = "Cleanliness Inspection"
FOOD_TEMP = "Food Temperature Inspection"
FOOD_PREP = "Food Preparation Inspection"
FOOD_STORAGE = "Food Storage Inspection"
FACILITY_SETUP = "Facility Setup Inspection"
PEST_CONTROL = "Pest Control Inspection"

INSPECTION_CHOICES = (
    (EQUIPMENT_INSPECTION, "Equipment Inspection"),
    (CLEANLINESS_INSPECTION, "Cleanliness Inspection"),
    (FOOD_TEMP, "Food Temperature Inspection"),
    (FOOD_PREP, "Food Preparation Inspection"),
    (FOOD_STORAGE, "Food Storage Inspection"),
    (FACILITY_SETUP, "Facility Setup Inspection"),
    (PEST_CONTROL, "Pest Control Inspection"),
)

## VARIABLES FOR EXPENSE MODEL CHOICES
EQUIPMENT = "Equipment"
SMALLWARE = "Smallware"
MARKETING = "Marketing"
PRODUCT = "Product"
LABOR ="Labor"
UTILITY = "Utility"
TRUCK = "Truck"
MISC = "Misc"

EXPENSE_CHOICES = (
    (EQUIPMENT, "Equipment"),
    (SMALLWARE, "Smallware"),
    (MARKETING, "Marketing"),
    (PRODUCT, "Product"),
    (LABOR, "Labor"),
    (UTILITY, "Utility"),
    (TRUCK, "Truck"),
    (MISC, "Misc"),
)
## VARIABLES FOR DOCUMENT MODEL CHOICES
TAX_DOCUMENT = "Tax Document"
LEGAL_DOCUMENT = "Legal Document"
STATE_DOCUMENT = "State Document"
FEDERAL_DOCUMENT = "Federal Document"
OTHER_DOCUMENT = "Other Document"

DOCUMENT_CHOICES = (
    (TAX_DOCUMENT, "Tax Document"),
    (LEGAL_DOCUMENT, "Legal Document"),
    (STATE_DOCUMENT, "State Document"),
    (FEDERAL_DOCUMENT, "Federal Document"),
    (OTHER_DOCUMENT, "Other Document"),
)

## VARIABLES FOR RECIPE MODEl CHOICES
FOOD_RECIPE = "Food Recipe"
DRINK_RECIPE = "Drink Recipe"
CONDIMENT_RECIPE = "Condiment Recipe"
OTHER_RECIPE = "Other Recipe"

RECIPE_CHOICES = (
    (FOOD_RECIPE, "Food Recipe"),
    (DRINK_RECIPE, "Drink Recipe"),
    (CONDIMENT_RECIPE, "Condiment Recipe"),
    (OTHER_RECIPE, "Other Recipe"),
)