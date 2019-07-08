from django.contrib import admin

from .models import Stones
from .models import Game

admin.site.register(Game)
admin.site.register(Stones)
# Register your models here.
