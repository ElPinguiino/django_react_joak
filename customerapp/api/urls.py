from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register('cateringform', CateringFormViewset)
router.register('contactform', ContactFormViewset)
router.register('reviewform', ReviewFormViewset)

urlpatterns = router.urls