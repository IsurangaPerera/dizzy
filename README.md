# Dizzy

Dizzy: A search engine for the visible Dark Web.

## Starting

```zsh
# In developement
docker-compose -f docker-compose.dev.yml up --build --detach

# In production
docker-compose -f docker-compose.prod.yml up --build --detach
```

## Stopping

```zsh
# In developement
# Add --volumes to remove named vols
docker-compose -f docker-compose.dev.yml down

# In production
# Remove all images for a clean start
docker-compose -f docker-compose.prod.yml down --rmi all
```
