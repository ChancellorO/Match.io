from django.contrib import admin
from .models import users


class usersAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email')

# Register your models here.

admin.site.register(users, usersAdmin)
