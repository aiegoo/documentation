---
layout: post
title: "10 things you need to know for effective django rest framework"
name: "django-api"
tags: [django]
tagName: django
permalink: 2021-11-09-django-api.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "django restful api nested serializer parameter"
summary: "Tue, Nov 09, 21, RESTFul API in DjangoDRF version 3"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-11-09T15:52:45 +0900
updated: 2021-11-09 15:52
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Viewsets
Let’s start with a simple (thus one of my favorites) DRF functionality. Viewsets can be considered as extremely useful templates for your API views that provide typical interactions with your Django models. While regular views act as handlers for HTTP methods, viewsets give you actions, like create or list. The great thing about viewsets is how they make your code consistent and save you from repetition. Every time you write views that should do more than one thing, a viewset is the thing that you want to go for.

Let’s imagine there is a Tag model in your project and you need to prepare a functionality that will let your users: list all the tags, create a new tag and retrieve its details. Here’s how you can define a viewset for that:

```python
from rest_framework import mixins, permissions
from rest_framework.viewsets import GenericViewSet

class TagViewSet(mixins.ListModelMixin,
 mixins.CreateModelMixin,
 mixins.RetrieveModelMixin,
 GenericViewSet):
 """
 The following endpoints are fully provided by mixins:
 * List view
 * Create view
 """
 queryset = Tag.objects.all()
 serializer_class = TagSerializer
 permission_classes = (permissions.IsAuthenticated,)
 ```

 iewset mixins can be combined as needed. You can define your own mixins or use ModelViewSet, which provides the following actions: .list(), .retrieve(), .create(), .update(), .partial_update(), and .destroy() .

In addition, when using viewsets you typically want to use routers for url configuration. This enforces best practices in naming your ulrs, making your API urls easily predictable.

```python
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

api_router = DefaultRouter()
api_router.register(r'tag', TagViewSet, 'tag')

urlpatterns = [
 url(r'^v1/', include(api_router.urls, namespace='v1'))
]
```

Now your viewset is functional enough that you can:

list all your tags by sending GET request to v1/tag/, POST new tag to v1/tag/ or retrieve one of the tags by GET v1/tag/<tag_id>.
You can even add some custom action to your viewset using @action decorator.

Now that writing views is finished, you’ve saved enough time to have a cup of coffee.

## Differenty serializer
As a DRF user you don’t need to bother with views and url configurations, so you will probably pay most of your attention to serializers, which act as translators between Django model instances and their representations such as json. There is a handful of functionalities connected with serializers that you might want to know.

Every serializer can be used for both reading and writing operations. The way it is initialized determines the action that it will fulfill. In these terms we can distinguish 3 types of serializers: create, update and retrieve.

If in your view you want to serialize data that will be transmitted outside of your API, this is how you do it:

```python
def retrieve(self, request, *args, **kwargs):
 instance = self.get_object()
 serializer = ProfileSerializer(instance=instance)
 return Response(serializer.data)
```

And finally, when updating an instance, you need to provide instance as well as data:

```python
def update(self, request, *args, **kwargs):
 instance = self.get_object()
 serializer = ProfileSerializer(
 instance=instance,
 data=request.data
 )
 serializer.is_valid(raise_exception=True)
 serializer.save()
 return Response(serializer.data)
```
serializer.save() invokes an appropriate internal method based on arguments passed at initialization.

## Using seralizerMethodField
SerializerMethodField is a read only field that computes its value at request processing time, by calling a method on the serializer class it is attached to. Let’s say you have a model that stores datetime in a models.DateTimeField, but you want to use timestamp from epoch in your serialized representation:

```python
from rest_framework import serializers

class TagSerializer(serializers.ModelSerializer):
 created = serializers.SerializerMethodField()

 class Meta:
 model = Tag
 fields = ('label', 'created')

 def get_created(self, obj):
 return round(obj.created.timestamp())

```

SerializerMethodField accepts method_name, but it’s usually more convenient to use the default pattern for naming those methods, which is get_<field_name>. Just make sure you‘re not overburdening your method fields with any heavy-lifting operations.

## source parameter

Very often, your model field names will differ from the required representation. Using the serializer field source parameter will let you handle this easily. Take a look at this example:

```python
from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
 job_type = serializers.CharField(source='task_type')

 class Meta:
 model = Task
 fields = ('job_type',)

```
The field task_type is in the Task model, but it will be represented in your API as a job_type. This works for both read and write operations.

Moreover, you can use it to fetch data from related objects using dotted notation:

```python
owner_email = serializers.CharField(source='owner.email')

```
## serializer field validation

Aside from a validators argument that can be passed when initializing a serializer field and aserializer.validate() hook, there is also field-level validation, which allows you to write a unique validation method for each field separately. There are two reasons I find it useful: first, it decouples different checks that are related only to a particular field, and second, it generates well formatted error responses. Usage of this kind of validation is similar to using SerializerMethodField, but this time you have to follow a method naming convention: def validate_<field_name>. Here’s an example:

```python
from rest_framework import serializers

class TransactionSerializer(serializers.ModelSerializer):
 bid = serializers.IntegerField()

 def validate_bid(self, bid: int) -> int:
 if bid > self.context['request'].user.available_balance:
 raise serializers.ValidationError(
 _('Bid is greater than your balance')
 )
 return bid

```
If the bid exceeds the user’s balance, this is how the response should look:

```python

{
 "bid": ["Bid is greater than your balance"]
}
```

Validation methods must always return a value, which is later passed to a model instance. Keep in mind that field level validation is invoked by serializer.to_internal_value(), which takes place before calling serializer.validate().

## Passing a value directly to the save method
In some cases it is convenient to pass a value from outside of a serializer directly to its save() method. This method will take arguments that can be equated with serialized objects. Values passed this way won’t be validated. It may be used to force an override of the initial data. For example:

```python
serializer = EmailSerializer(data=request.data)
serializer.is_valid(raise_exception=True)
serializer.save(owner_id=request.user.id)

```

## Using CurrentUserDefault
When it comes to automatically setting a user as a resource owner, there is an even a better way than the one presented in the previous example. It’s by using the CurrentUserDefault class, which doesn’t require any override of views.

```python
from rest_framework import serializers

class EmailSerializer(serializers.ModelSerializer):
 owner = serializers.HiddenField(
 default=serializers.CurrentUserDefault()
 )

```
It does two things. First, the user authenticated in the request object will be set as default. Second, because of using HiddenField, any incoming data is not taken into account, so it’s impossible to set another user as an owner.


## Serializers initial data
Sometimes you may need to access a serializer’s raw input. It’s either because data has been already modified by running serializer.is_valid(), or it’s needed to compare the value of another field in a validation method when validated_data is not yet available. It can be achieved by accessing serializer.initial_data, which stores raw input as a Dict, as shown in this example:

```python
from rest_framework import serializers

class SignupSerializer(serializers.ModelSerializer):
 password1 = serializers.CharField()
 password2 = serializers.CharField()

 def validate_password1(self, password1):
 if password1 != self.initial_data['password2']:
 raise serializers.ValidationError(
 'Passwords do not match'
 )

```

## Handling multiple creates/updates/deletes in nested serializers
Most of the time serializers are completely straightforward and with some experience, there’s nothing that could go wrong. However, there are some limitations. Things can get a little tricky when you have to support multiple creates, updates and deletes in nested serializers within one high-level serializer. It comes with a trade-off: there is a smaller number of requests to process at the cost of a longer processing time. By default, DRF doesn’t support multiple updates at all. It’s hard to imagine how it could support all possible types of nested insertions and deletions. That’s why the creators of DRF chose flexibility over an out-of-the-box “do-everything” solution, and left that privilege for us.

There are two paths you can follow in this case:

use the quite popular, third party library DRF Writable Nested
do it on your own
I would recommend choosing the second option at least once, so you will know what’s going underneath.

After analyzing incoming data, in most scenarios, we are able to make the following assumptions:

all items that should be updated have id,
all items that should be created don’t have id,
all items that should be deleted are present in data storage (eg. database), but are missing in the incoming request.data
Based on this, we know what to do with particular items on the list. Below is a snippet that shows this process in detail:

```python
class CUDNestedMixin(object):
 @staticmethod
 def cud_nested(queryset: QuerySet,
 data: List[Dict],
 serializer: Type[Serializer],
 context: Dict):
 """
 Logic for handling multiple updates, creates and deletes
 on nested resources.
 :param queryset: queryset for objects existing in DB
 :param data: initial data to validate passed from higher
 level serializer to nested serializer
 :param serializer: nested serializer to use
 :param context: context passed from higher level
 serializer
 :return: N/A
 """
 updated_ids = list()
 for_create = list()
 for item in data:
 item_id = item.get('id')
 if item_id:
 instance = queryset.get(id=item_id)
 update_serializer = serializer(
 instance=instance,
 data=item,
 context=context
 )
 update_serializer.is_valid(raise_exception=True)
 update_serializer.save()
 updated_ids.append(instance.id)
 else:
 for_create.append(item)

 delete_queryset = queryset.exclude(id__in=updated_ids)
 delete_queryset.delete()

 create_serializer = serializer(
 data=for_create,
 many=True,
 context=context
 )
 create_serializer.is_valid(raise_exception=True)
 create_serializer.save()

```

And here is the simplified version of how a high-level serializer can make use of this mixin:

```python
from rest_framework import serializers

class AccountSerializer(serializers.ModelSerializer,
 CUDNestedMixin):
 phone_numbers = PhoneSerializer(
 many=True,
 source='phone_set',
 )

 class Meta:
 model = User
 fields = ('first_name', 'last_name', 'phone_numbers')

 def update(self, instance, validated_data):
 self.cud_nested(
 queryset=instance.phone_set.all(),
 data=self.initial_data['phone_numbers'],
 serializer=PhoneSerializer,
 context=self.context
 )
 ...
 return instance

```

Keep in mind that nested objects should consume initial_data instead of validated_data. That’s because running validation calls field.to_internal_value() on each of a serializer’s fields, which may modify data stored by a particular field (eg. by changing primary key to model instance).

## Override data to force ordering
By default, Django querysets are not ordered at all. Enforcing ordering on the list view can easily be accomplished by adding ordering to the view’s queryset, but in cases where nested resources should also be ordered, it’s not so simple. For read-only fields, it can be done within SerializerMethodField, but what to do in a situation where a field has to be writable? In such a case, a serializer’s data property can be overridden, as shown in this example:

```python
@property
def data(self):
 data = super().data
 data['phone_numbers'].sort(key=lambda p: p['id'])
 return data

```

## Conclusion
I hope that you’ve found some new interesting techniques in this article. There are plenty of other functionalities that I would like to cover in another article on this blog, so it’s worth coming back here.


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
