# Places

## Project Description

An app for uploading and viewing images of places around the world. Users can add new places, view existing places, and like them.

## See It In Action

The frontend is optimized for viewing in the **mobile, tablet or desktop version** of your preferred browser at [places.ivanjsx.com](https://places.ivanjsx.com).

It's worth noting that I'm not responsible for the content of the images uploaded by users. Please be aware that some images may be inappropriate.

The backend is accessible at [api.places.ivanjsx.com](https://api.places.ivanjsx.com).

## My Role In It

I was responsible for **backend (API) development** and **deployment of both frontend and backend**.

The history of this repository focuses primarily on the deployment process, though it contains the full source code of the app.

The history of backend development can be found in a [separate repository](). You are welcome to check it out.

Frontend development was completed by another team member and provided to me in this exact repository and used as a submodule in this project.

## Technologies Used

- I used **Nginx** (as a reverse proxy server) to route requests to the correct service.
- I also set up **SSL certificates** using Let's Encrypt to secure the connection.
- Frontend and backend are hosted on **separate subdomains**.
- The backend is a **RESTful API** built with **Express.js**.
- The backend is connected to a **MongoDB** database.
