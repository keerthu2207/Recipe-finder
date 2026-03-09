from django.db import models

class Recipe(models.Model):

    title = models.CharField(max_length=255)
    cuisine = models.CharField(max_length=100, null=True, blank=True)

    rating = models.FloatField(null=True, blank=True)

    total_time = models.IntegerField(null=True, blank=True)
    prep_time = models.IntegerField(null=True, blank=True)
    cook_time = models.IntegerField(null=True, blank=True)

    description = models.TextField(null=True, blank=True)

    ingredients = models.JSONField(null=True, blank=True)
    instructions = models.JSONField(null=True, blank=True)

    nutrients = models.JSONField(null=True, blank=True)

    serves = models.CharField(max_length=100, null=True, blank=True)

    url = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title