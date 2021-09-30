# Dizzy

Dizzy: A search engine for the visible Dark Web.

## Running

```zsh
# In developement
docker-compose up --build --detach

# In production
docker-compose -f docker-compose.yml up --build --detach
```

## Stopping

```zsh
# In developement
# Add --volumes to remove named vols
docker-compose down

# In production
# Remove all images for a clean start
docker-compose -f docker-compose.yml down --rmi all
```
