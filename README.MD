# How to use it?
Clone or download this repository, then open the directory in your terminal.
install all the dependencies by run the npm install.

```bash
$ git clone https://github.com/pandusudo/software_seni.git
$ npm install
```

Set up your environment by renaming .env.example file to .env

fill the SERVER_PORT in .env file, example: SERVER_PORT=5000.
fill the REQUEST_LINK in .env file with this link https://api.nytimes.com/svc
fill the API_KEY in .env file with your api key.

To get the api key, please register first in https://developer.nytimes.com/ then you'll get your api key.

Main URL to request to this API : http://localhost:{port}/api

# Features
- Get articles
- Search articles
- Search books

# API List
### Article
- **/articles?q=example&sort=newest** with get method to search articles. q is for the keyword. replace spaces ' ' in query keyword with plus '+'. and sort is for sorting ('newest' and 'oldest')
- **/articles/{id}** with get method to search. replace {id} with article id to get the detail of an article.

### Book
- **/books?list=hardcover-fiction&q=example&date=YYYY-MM-DD** with get method to search books. q is for the keyword. replace spaces ' ' in query keyword with plus '+'. fill list with best seller list name (hardcover-fiction and e-book-fiction). fill date with date with YYYY-MM-DD format. example 2020-02-20.
