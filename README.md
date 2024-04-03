# Bird Sightings App

A simple React App to list bird sightings.

# Docker Container

To run the docker container, run following commands from the terminal in the root directory:

**docker build -t bird-sightings-app .**

**docker run -d -p 5000:5000 -p 3010:3010 bird-sightings-app**

The website is running at **localhost:5000**

The database is running at **localhost:3010**

# Usage

Add bird sightings from the home page.
In the form add:
- Species of the sighted bird
- Time when seen
- Author; who registered the observation to the database
- Coordinates where seen

You can see all the sightings listed in the Sightings-page.

You can categorize the sightings by species.

# GUI

![Bird_Sighting_App 1](https://github.com/joonaskiuru/Bird-Sightings-App/assets/75437078/3c65addb-18fc-46f6-ab4b-e6bc16b5d467)

![Bird_Sighting_App 2](https://github.com/joonaskiuru/Bird-Sightings-App/assets/75437078/b6b43ceb-6f54-40fc-a16c-d643920bd052)
