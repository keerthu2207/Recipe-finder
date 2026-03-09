import json
from recipes.models import Recipe

with open("data/recipes.json") as file:
    data = json.load(file)

for key in data:
    recipe = data[key]

    title = recipe.get("title")
    if not title:
        continue

    Recipe.objects.create(
        title=title,
        cuisine=recipe.get("cuisine"),
        rating=recipe.get("rating"),
        total_time=recipe.get("total_time"),
        prep_time=recipe.get("prep_time"),
        cook_time=recipe.get("cook_time"),
        description=recipe.get("description"),
        ingredients=recipe.get("ingredients"),
        instructions=recipe.get("instructions"),
        nutrients=recipe.get("nutrients"),
        serves=recipe.get("serves"),
        url=recipe.get("URL")
    )

print("Recipes imported successfully")