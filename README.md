# Properties locator


![NoPlast mockup images](assets/readme/mockup-image.png)


The goal of this project is to offer a geolocation based real estate web application, consisting of a front application built in React and a backend built in Django and Python.

Visit the deployed website [here](https://properties-locator.herokuapp.com/).
Visit the deployed website backend [here](https://properties-locator-service.herokuapp.com/admin/).

username: admin
password: Test1234_


***


## User Experience (UX)


### Strategy


#### Project Goals

* Structure is easy to understand and navigates effortlessly.

* The website desing and colors are appealing to the customers.

* Customers are offered the opportunity to register an account and to login.


#### User Goals

**Epic 1 - overal Experience**

* As a shopper, I want to easily find the products and their details.

* As a shopper, I want to view products on a specific category.

* As a shopper, I want to be able to sort the products depending on their price, rating or category.

* As a shopper, I want to be able to search for products using specific keywords.

* As a shopper, I want to easily select the quantity of products to be purchased.

* As a shopper, I want to easily view the current purchase amount.

**Epic 2 - Listing and agencies exploration**

* As a shopper, I want to view all items currently on my shopping bag and be able to update them.

* As a shopper, I want to easily provide my shipping and payment information during the checkout.

* As a shopper, I want to feel my personal and payment data is being handled securely.

* As a shopper, I want to receive an order confirmation once I have finished my purchase.

* As a shopper, I want to receive an order confirmation email for my records.

**Epic 3 - User Accounts**

* As a frequent shopper, I want to be able to register an account using my email address to be able to keep my records and interact with the website.

* As a frequent shopper, I want to receive a confirmation once my account has been registered to make sure the information entered was correctly.

* As a registered shopper, I want to easily log in and out from my account.

* As a registered shopper, I want to be able to recover access to my account in case I forget my password.

* As a registered shopper, I want to have a personalized profile page where I can keep my contact information updated and see my past orders.


**Epic 4 - Application Admin**

* As a site admin, I want to be able to add and update products.

* As a site admin, I want to be able to remove product no longer available.


#### Strategy Table

Opportunity / Problem | Importance | Viability / Feasibility
--- | --- | ---
Create, edit and delete agencies | 5 | 5
Account registration | 5 | 5
User profile | 5 | 5
Properties linsting | 5 | 5
Agencies listing | 5 | 5
Property details view | 5 | 5
View points of interest nearby a property | 2 | 3
**Total** | **32** | **33**


### Scope

Little attention is spent on making the application response. The design also is left to a bare minimum. The design and making the application responsive can be done in a latter fase.


**First Phase**

* Create, edit and delete agencies

* Account registration

* User profile

* Properties linsting

* Agencies listing

* Property details view

* View points of interest nearby a property


**Second Phase**

* Making the application responsive

* Design, colors palet


#### User Stories

**Sprint 1**
- Home page hearo header image, text and button
- Header bar and non clickable navigation buttons
- Static Properties listing page
- Static Agencies page
- Properties creation form
- Login and user registration form
- Static user profile page

**Sprint 2**
- Backend application creation and initial setup
- Listings application creation and configuration
- Users application creation and configuaration

**Sprint 3**
- link the homepage button to the properties listing page
- connect the properties listing page with the backend and populate the content from the backend
- connect the login and user registration pages with the backend
- connect the user profile page with the backend
- Enable user profile update
- Enable property listing update and deletion
- Create the point of interest model and enable distance calculation


### Structure

The website has been organized in a Hierarchical Tree Structure to ensure the site user navigates through the site effortlessly and intuitively. Here you can you can find the website map design.

* Header and navigation bar are consistent through all pages.

* Links and forms provide clear feedback to the site user.

* A 404-error page is available.


### Skeleton


#### Wireframes

### Surface


#### Typography

The font used across the whole site is Roboto.


## Features


### General

* The website has been designed for desktop devices first.


#### Header

* The header contains the main text (Home) and navigation links.

* The main text works as a link to the home page.

* The navigation links allow the user access to all sections to facilitate navigation across the website. It also has a hover effect that changes color to provide feedback to the user for a better user experience.

* When the user is logged in, the username is displayed on the top navigation bar, reflecting the current status.


### Home Page
![NoPlast categories section image](assets/readme/noplast-categories.png)

*  Invites the user to click on a button to see a list of properties that are available on the website.


#### Listing page
![NoPlast about section image](assets/readme/noplast-about.png)

* Provide relevant information to the user looking for properties to buy or to rent.
* Provide an interactive map to help with locating the properties
* Provide icon on each propertie item. Once clicked, the map steps and shows the selected item
* The maps show a maker and a button. Clicked, the details page of the property is displayed


#### Agencies pages
![NoPlast guide section image](assets/readme/noplast-guide.png)

* Provides an overview of the agencies known on the website and the number of properties each of them holds
* provides a button, when clicked, the details page of the agency is displayed


### Add property Page
![NoPlast products page image](assets/readme/noplast-products.png)

* provides a form and map to geolocalise a property and add it to the application database.

* When a user is not logged in, the user gets a warning that sending items is only possible when you have an account and an agency



### Listing Details Page
![NoPlast product details page image](assets/readme/noplast-product-details.png)

* The products navigation bar is present in case the user wants to go back to the listings.

* Provide a larger image of the listing and display its detailed information.

* Allows the user to update the listing

* Allow the user to delete the listing

* Shows interesting items around the property


### Agency Details Page
![NoPlast checkout page image](assets/readme/noplast-checkout.png)

* Shows details information about the agency.

* Shows a list of properties that belong to the agency

* Provides a link on each property item to jump to its details page


### Profile Page
![NoPlast profile page image](assets/readme/noplast-profile.png)

* Provide a form for the registered user to update their default information.

* Shows the number of properties the user has


### Accounts Pages

Page | Purpose | Image |
--- | --- | --- |
Sign Up | Allow the user to sign up an account for the website. | ![NoPlast Sign Up Page](assets/readme/noplast-sign-up.png) |
Sign In | Allow the registered user to sign in with their account. | ![NoPlast Sign In Page](assets/readme/noplast-sign-in.png) |
Sign Out | Allow the registered user to sign out from their account. | ![NoPlast Sign Out Page](assets/readme/noplast-sign-out.png) |


### 404 Error Page
![NoPlast 404 error page image](assets/readme/noplast-404.png)

* Provided information to the user in case the address entered cannot be found.

* A link to come back to the products is present.


## Technologies Used


### Languages Used

* [HTML5](https://en.wikipedia.org/wiki/HTML)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
* [Python](https://en.wikipedia.org/wiki/Python_(programming_language))


### Libraries and Frameworks

* [Django](https://www.djangoproject.com/) was used as web framework.
   
* [Material UI](https://mui.com/) was used throughout the website to help with styling and responsiveness.

* [Google Fonts](https://fonts.google.com) was used to import the font into the html file, and were used on all parts of the site.

* [ReactJS](https://reactjs.org/) was used as a JavaScript library to help writing less JavaScript code. 


### Packages / Dependencies Installed

* [Django Djoser](https://djoser.readthedocs.io/en/latest/getting_started.html) was used for user authentication, registration, and account management.

* [GeoDjango](https://docs.djangoproject.com/en/4.1/ref/contrib/gis/) was used to enable storing location based information and calculating distances. 

* [React Leaflet](https://leafletjs.com/) was used to pan interactive map to the user, displaying the properties on the map.

* [Pillow](https://pypi.org/project/Pillow/) was used to add image processing capabilities.  
 
* [Gunicorn](https://gunicorn.org/) was used as Python WSGI HTTP Server for UNIX to support the deployment of Django application.  


### Database Management
* [PostGres](https://www.postgresql.org/) was used as a single-file database during development. an extension was installed (PostGis) to enable goebased data storage

* [Heroku Postgres](https://www.heroku.com/postgres) an extension was installed (PostGis) to enable goebased data storage 

### Tools and Programs

* [Git](https://git-scm.com)  
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

* [GitHub](https://github.com)  
   GitHub was used to store the projects code after being pushed from Git. 

* [Heroku](https://www.heroku.com)   
    * Heroku was used to deploy the website.

* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    * Chrome DevTools was used during development process for code review and to test responsiveness.

* [W3C Markup Validator](https://validator.w3.org/)
    * W3C Markup Validator was used to validate the HTML code.

* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    * W3C CSS Validator was used to validate the CSS code.


[Back to top ⇧](#noplast)

## Deployment
 
The project was developed usinga local Git repository. The code was commited to [Git](https://git-scm.com/) and pushed to [GitHub](https://github.com/") using the terminal. The web application is deployed on Heroku as Github Pages is not able to host a Python project. The repository is hosted on Github.


### How To Use This Project
To use and further develop this project you can either fork or clone the repository.  


#### Fork GitHub Repository
By forking the GitHub repository you can make a copy of the original repository on your GitHub account to view and/or make changes without affecting the original repository, by using the following steps:  

1. Log in to GitHub.  
2. Navigate to the main page of the GitHub Repository that you want to fork.  
3. At the top right of the Repository just below your profile picture, locate the "Fork" button.  
4. You should now have a copy of the original repository in your GitHub account.  
5. Changes made to the forked repository can be merged with the original repository via a pull request.  


#### Clone Github Repository
By cloning a GitHub repository you can create a local copy on your computer of the remote repository. The developer who clones a repository can synchronize their copy of the codebase with any updates made by fellow developers with push or pull request. Cloning is done by using the following steps:  

1. Log in to GitHub.  
2. Navigate to the main page of the GitHub Repository that you want to clone.  
3. Above the list of files, click the dropdown called "Code".  
4. To clone the repository using HTTPS, under "HTTPS", copy the link.  
5. Open Git Bash.  
6. Change the current working directory to the location where you want the cloned directory to be made.  
7. Type git clone, and then paste the URL you copied in Step 4.  
```$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY```
8. Press Enter. Your local clone will be created.   
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```  
Changes made on the local machine (cloned repository) can be pushed to the upstream repository directly if you have a write access for the repository. Otherwise, the changes made in the cloned repository are first pushed to the forked repository, and then a pull request is created.  
Click [Here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) to retrieve pictures for some of the buttons and more detailed explanations of the above process.  


#### Project Set Up After Forking or Cloning  
1. Install all dependencies by typing in the CLI ```pip3 install -r requirements.txt```  
2. Create a ```.gitignore``` file and ```env.py``` file in the project's root directory. Add the ```env.py``` file to ```.gitignore```. 
3. Inside the env.py file, enter the project's environment variables:   
   ```
   import os

   os.environ.setdefault("SECRET_KEY", <your_secret_key>)
   os.environ.setdefault("DEVELOPMENT", '1')
   os.environ.setdefault("STRIPE_PUBLIC_KEY", <your_key>)
   os.environ.setdefault("STRIPE_SECRET_KEY", <your_key>)
   os.environ.setdefault("STRIPE_WH_SECRET", <your_key>)
   ```   
   You can get the keys from:
   - "SECRET_KEY" can be generated using [Django Secret Key Generator](https://miniwebtool.com/django-secret-key-generator/)   
   - "STRIPE_PUBLIC_KEY" and "STRIPE_SECRET_KEY" can be generated by creating a stripe account. The keys are found in 'Developers' Section, under 'API Keys'.  
   - In the Developer Section, under 'Webhooks', add a new endpoint.  "STRIPE_WH_SECRET". On Endpoint URL, enter:  
   ``` https://<your_host_url>/checkout/wh/ ```   
   Select to listen to all events, and create endpoint, and you can view your "STRIPE_WH_SECRET".   

4. Make migrations to setup the inital database operations.  
   ``` 
   python3 manage.py makemigrations 
   python3 manage.py migrate 
   ```   
5. Load data for the database or create data manually. 
   ```
   python3 manage.py loaddata <app_name>
   ``` 
6. Create a super user.
   ```
   python3 manage.py create superuser
   ```  
The project should now complete to run and can now be used for development. To run the project, type in the CLI terminal: ```python3 manage.py runserver```     


### Deployment to Heroku 
This project is deployed on Heroku for production, with all static and media files stored on AWS S3. These are steps to deploy on Heroku:

1. Navigate to Heroku.com, create a new account or login if you already have an account. On the dashboard page, click "Create New App" button. Give the app a name, the name must be unique with hypens between words. Set the region closest to you, and click "Create App".   
2. On the resources tab, provision a new Heroku Postgres database.  

3. If you haven't install it, install dj_database_url and psycopg2.
   ```
   pip3 install dj_database_url
   pip3 install psycopg2-binary
   ```
   Note: you don't have to do this if you've installed all dependencies in the requirements.txt file.  
4. Set up a new database for the site by going to the project's settings.py and importing dj_database_url. Comment out the database's default configuration, and replace the default database with a call to dj_database_url.parse and pass it the database URL from Heroku (you can get it from your config variables in your app setting tab)
   ```
   DATABASES = {
     'default': dj_database_url.parse('YOUR_DATABASE_URL_FROM_HEROKU')
   }
   ```
5. Run migrations
   ```
   python3 manage.py migrate
   ```  
6. Import data to the database.
    - Make sure your manage.py file is connected to your sqlite3 database.
    - Use this command to backup your current database and load it into a db.json file:
    ```
    ./manage.py dumpdata --exclude auth.permission --exclude contenttypes > db.json
    ```
    - Connect your manage.py file to your postgres database
    - Then use this command to load your data from the db.json file into postgres:
    ``` 
    ./manage.py loaddata db.json
    ``` 
7. Set up a new superuser, fill out the username, email address, and password.
   ```
   python3 manage.py create superuser
   ```  
8. Remove the database config from Heroku and uncomment the original config. Add a conditional statement to define that when the app is running on Heroku. we connect to Postgres, and otherwise, we connect to Sqlite.   
   ```
   if 'DATABASE_URL' in os.environ:
      DATABASES = {
         'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
      }
   else:
      DATABASES = {
         'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
         }
      }
   ```  
9. Install gunicorn which will act as the webserver, and put it on the requirements.txt.   
   ``` 
   pip3 install gunicorn
   pip3 freeze > requirements.txt
   ```
   Note: you don't have to do this if you've installed all dependencies in the requirements.txt file.
10. Create a Procfile, to tell Heroku to create a web dyno, which will run unicorn and serve the Django app.   

   Inside the Procfile:
   ```
   web: gunicorn shoes_and_more.wsgi:application
   ```
11. Login to Heroku through CLI, using ```heroku login```. Once logged in, disable the collect static temporarily, so that Heroku won't try to collect static files when it deploys.
   ```
   heroku config:set DISABLE_COLLECTSTATIC=1 --app shoes-and-more
   ```
   And add the hostname of the Heroku app to allowed hosts in the project's settings.py, and also add localhost so that Gitpod will still work as well:  
   ```
   ALLOWED_HOSTS = ['shoes-and-more.herokuapp.com', 'localhost']
   ```   
12. Add, commit, and push to gitpod and then to Heroku. After pushing to gitpod as usual, initialize git remote first:
   ```
   heroku git:remote -a shoes-and-more
   ``` 
   Then push to Heroku:
   ```
   git push heroku main
   ```
13. Go to the app's dashboard on Heroku and go to Deploy. Connect the app to Github by clicking Github and search for the repository. Click connect. Also enable the automatic deploy by clicking Enable Automatic Deploys, so that everytime we push to github, the code will automatically be deployed to Heroku as well.  
14. Go back to settings.py and replace the secret key setting with the call to get it from the environment, and use empty string as a default. 
   ```
   SECRET_KEY = os.environ.get('SECRET_KEY', '')
   ```
   Set debug to be true only if there's a variable called development in the environment.
   ```
   DEBUG = 'DEVELOPMENT' in os.environ
   ```


## Known Bugs

There is no object store, so, the images are getting lost

[Back to top ⇧](#noplast)

## Acknowledgements

* My tutor, Marcel, for his invaluable support, feedback and guidance through the whole process.

* Code Institute and it's amazing Slack community for their support and providing me with the necessary knowledge to complete this project.

[Back to top ⇧](#noplast)