from tastypie.api import Api
from api.views import UserListResource, TechnologyResource

v1_api = Api(api_name='v1')
v1_api.register(UserListResource())
v1_api.register(TechnologyResource())
