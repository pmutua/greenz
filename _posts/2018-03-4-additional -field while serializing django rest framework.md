---
layout: post
title: Additional field while serializing django rest framework

description: >
  Unity, a flexible and powerful development platform for creating multiplatform 3D and 2D games as well as an interactive experiences on 	 Linux. With Unity, you can target more devices easily, and with a single click you can deploy your game to mobile, VR, desktop, Web, 		Console as well as TV platforms.

tags: [tutorial]
author: author1

---

How do I define this new field full_name in my serializers.py

This can be achieved by adding a calculated property to your model and add it to your serializer by using
(a readonly field with source=)[http://www.django-rest-framework.org/api-guide/fields#core-arguments]



# models.py
```python
class Employees(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    @property
    def full_name(self):
      return self.first_name + self.last_name
```
#serializes.py
```python
#serializes.py
class EmployeeSerializer(serializers.ModelSerializer):
    full_name = serializers.Field(source='full_name')

    class Meta:
        model = Employees
        fields = ('first_name','last_name', 'full_name')
```

# By using SerializerMethodField (your model unchanged)
```python
class EmployeeSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField('get_full_name')

    def get_full_name(self, obj):
        return obj.first_name + obj.last_name

    class Meta:
        model = Employees
        fields = ('first_name','last_name', 'full_name')
```
# Alternatively
Provided that the Employee is a login user, then most of us will use `django.auth.User`, I will share how `Employee` can be implemented as another `Profile` (extension of django User). Also with the addition of `full_name.read_only`, `first_name.write_only`, and `last_name.write_only`.

```python

# models.py
class Employee(models.Model):
    """User Profile Model"""
    user = models.OneToOneField('auth.User')

# serializers.py
class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')

    first_name = serializers.CharField(
            source='user.first_name', write_only=True)
    last_name = serializers.CharField(
            source='user.last_name', write_only=True)
    name = serializers.CharField(
            source='user.get_full_name', read_only=True)


    class Meta:
        model = Employee
        fields = (
            'url', 'username', 'email',
            'first_name', 'last_name', 'name')
        depth = 1

```
