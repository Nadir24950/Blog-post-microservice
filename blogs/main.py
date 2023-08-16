from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis_om import get_redis_connection, HashModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_methods=['*'],
    allow_headers=['*']
)

redis = get_redis_connection(
    host="127.0.0.1",
    port=6379,
    decode_responses=True
)


class Blog(HashModel):
    title: str
    body: str
    #author: str

    class Meta:
        database = redis


@app.get('/blogs')
def all():
    return [format(pk) for pk in Blog.all_pks()]


def format(pk: str):
    blog = Blog.get(pk)

    return {
        'id': blog.pk,
        'title': blog.title,
        'body': blog.body
        #'author': blog.author
    }


@app.post('/blogs')
def create(blog: Blog):
    return blog.save()


@app.get('/blogs/{pk}')
def get(pk: str):
    return Blog.get(pk)


@app.delete('/blogs/{pk}')
def delete(pk: str):
    return Blog.delete(pk)