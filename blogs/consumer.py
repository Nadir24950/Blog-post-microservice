from main import redis, Blog
import time

key = 'order_completed'
group = 'inventory-group'

try:
    redis.xgroup_create(key, group)

except:
    print('Group Already exist')

while True:
    try:
        results = redis.xreadgroup(group, key, {key: '>'}, None)
        if results != []:
            for result in results:
                obj = result[1][0][1]
                blog = Blog.get(obj['blog_id'])

                print(blog)    
                blog.save()
    except Exception as e:
        print(str(e))
    time.sleep(1)
    