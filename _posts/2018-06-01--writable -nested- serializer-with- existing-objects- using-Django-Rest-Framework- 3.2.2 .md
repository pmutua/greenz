---
layout: post
title: Writable nested serializer with existing objects using Django Rest Framework 3.2.2”
date:   2018-02-17
description: >
    django-rest-framework 3.0 create or update in nested serializer

keywords: "django,gh-pages,website,blog,easy"
categories: [Django,Blog,Python]
tags: [django,blog,tutorial,nested-serializers]
icon: icon-html
author: author1

---

Firstly, do you want to support creating new book instances, or only updating existing ones?

If you only ever wanted to create new book instances you could do something like this...

```python
class PageSerializer(serializers.Serializer):
    text = serializers.CharField(max_length=500)

class BookSerializer(serializers.Serializer):
    page = PageSerializer(many=True)
    title = serializers.CharField(max_length=50)

    def create(self, validated_data):
        # Create the book instance
        book = Book.objects.create(title=validated_data['title'])

        # Create or update each page instance
        for item in validated_data['pages']:
            page = Page(id=item['page_id'], text=item['text'], book=book)
            page.save()

        return book
```


Note that I haven't included the book_id here. When we're creating book instances we won't be including a book id. When we're updating book instances we'll typically include the book id as part of the URL, rather than in the request data.

If you want to support both create and update of book instances then you need to think about how you want to handle pages that are not included in the request, but are currently associated with the book instance.

You might choose to silently ignore those pages and leave them as they are, you might want to raise a validation error, or you might want to delete them.

Let's assume that you want to delete any pages not included in the request.


```python

def create(self, validated_data):
    # As before.
    ...

def update(self, instance, validated_data):
    # Update the book instance
    instance.title = validated_data['title']
    instance.save()

    # Delete any pages not included in the request
    page_ids = [item['page_id'] for item in validated_data['pages']]
    for page in instance.books:
        if page.id not in page_ids:
            page.delete()

    # Create or update page instances that are in the request
    for item in validated_data['pages']:
        page = Page(id=item['page_id'], text=item['text'], book=instance)
        page.save()

    return instance

```

It's also possible that you might want to only support book updates, and not support creation, in which case, only include the update() method.

There are also various ways you could reduce the number of queries eg. using bulk create/deletion, but the above would do the job in a fairly straightforward way.

As you can see there are subtleties in the types of behavior you might want when dealing with nested data, so think carefully about exactly what behavior you're expecting in various cases.

Also note that I've been using `Serializer` in the above example rather than `ModelSerializer`. In this case it's simpler just to include all the fields in the serializer class explicitly, rather than relying on the automatic set of fields that `ModelSerializer` generates by default.
