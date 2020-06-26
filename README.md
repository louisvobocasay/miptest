# MIP Test

## How to start this project

I created a scripts for launching json-server and angular site in only one
To start, please run the command below:

Yarn:
```
yarn start
```

NPM:
```
npm run start
```
## Small explanation

I've removed all the ```*``` and ````~```` digits in package.json to ensure that when you install the dependencies in your side, it will be exact the packages that this project using. Just to prevent libs version problem 

# Requirement

### json-server

Create a `data.json` file :

```
$ cat data.json 
{
  "posts": [
    { "id": 1, "body": "foo" },
    { "id": 2, "body": "bar" }
  ],
  "comments": [
    { "id": 1, "body": "baz", "postId": 1 },
    { "id": 2, "body": "qux", "postId": 2 }
  ]
}
```

And start your rest api (using docker or npm, as you want).

```
$ docker run -it --rm -p 8090:80 -v $PWD/data.json:/data/db.json clue/json-server
```


### test

During this test, you will have to develop (**as a professional developer**) a simple CRUD.

Please develop an angular website to deal with blog posts :
  - list
  - create 
  - update

Also, a page allowing to share comments on a blog post.


We will be attentive to the **code quality** (clean code design patterns).

Please make this test in 1h or 1h30 and to send me back (by mail) the link of the github repository hosting your code.

Good luck. Robin.


