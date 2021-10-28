# Sliders

In this section, we will use all the sliders' API. 


## Get all Sliders

To get all the address of a customer, that customer must be logged in to the store. You can achieve this job by using `Sliders` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/sliders`

### Examples

Let's take an example,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/sliders`

::: details Response

  ~~~json
  {
     
    "data": [
        {
            "id": 4,
            "title": "Affordable",
            "image_url": "http://127.0.0.1:8000/storage/slider_images/Default/lTGnT4Gb5iTvdGQfg7zlvG2VRc3v190GQwi9PiKA.jpg",
            "content": "<p>\"Reasonably priced, In house tests cut third party costs\"</p>"
        },
        {
            "id": 3,
            "title": "Accelerated",
            "image_url": "http://127.0.0.1:8000/storage/slider_images/Default/H5kpbtf2dFNWhsgYGgKZOhcVFtTuRpY21HWfRvkN.jpg",
            "content": "<p>\"Get your test report in 3 hours\"</p>\r\n<p><em> \"Do we need to say more? Now Get Well Sooner...\"</em></p>"
        },
        {
            "id": 2,
            "title": "Accuracy",
            "image_url": "http://127.0.0.1:8000/storage/slider_images/Default/C08oOVfZzZ9K904tHQFgbUeP0X30zf7HLXjd2DL8.jpg",
            "content": "<p>\"NABL Accredited, Gold standard for laboratory testing\"</p>\r\n<p>\"Each report is verified by doctors\", \"Industry's best testing protocols &amp; international standards\"</p>\r\n<p>\"Tests are performed on high grade fully automated equipments\"</p>"
        },
        {
            "id": 1,
            "title": "Accessible",
            "image_url": "http://127.0.0.1:8000/storage/slider_images/Default/mQvQp1H81zuLsFpeWsFOyrtjqdfRY7qF4OWGZlIh.jpg",
            "content": "<p>\"Re.1 for Home Collection - no extra hidden costs\"</p>\r\n<p>\"Reports at markhealth.com, Android, IOS &amp; SMS\"</p>"
        }
    ],
    "links": {
        "first": "http://127.0.0.1:8000/api/sliders?page=1",
        "last": "http://127.0.0.1:8000/api/sliders?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/api/sliders?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http://127.0.0.1:8000/api/sliders",
        "per_page": 10,
        "to": 4,
        "total": 4
    }
}
  
  ~~~

:::
