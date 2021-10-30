# featuredproducts

In this section, we are using the featuredproducts' API. 

## Get all featuredproducts 

This api request will fetch all the featuredproducts.

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/category-details?category-slug=featured-products`

- Params

  | Name          | Info                                         | Type   |
  | ------------- | -------------------------------------------- | ------ |
  | limit         | Maximum number of records in each request    | Number |
  | page          | Records for specific page based on the limit | Number |
  | pagination    | will display all the records if set to `0`   | Number |

::: tip

  If you are using pagination and want to know more info about responses then check the [explanation](./explanation) portion.

:::

### Examples

#### 1. Get categories of the specific page

- Headers

  | Key           | Value            |
  | ------------- | ---------------- |
  | Accept        | application/json |

- Request

  `GET <host>/api/category-details?category-slug=featured-products`

  
::: details Response

  ~~~json
  {
    "data": [
        {
            "id": 1,
            "sku": "12",
            "type": "simple",
            "name": "test",
            "url_key": "test",
            "price": "100.0000",
            "formated_price": "₹100.00",
            "short_description": "<p>test</p>",
            "description": "<p>test</p>",
            "images": [],
            "videos": [],
            "base_image": {
                "small_image_url": "http://127.0.0.1:8000/vendor/webkul/ui/assets/images/product/small-product-placeholder.webp",
                "medium_image_url": "http://127.0.0.1:8000/vendor/webkul/ui/assets/images/product/meduim-product-placeholder.webp",
                "large_image_url": "http://127.0.0.1:8000/vendor/webkul/ui/assets/images/product/large-product-placeholder.webp",
                "original_image_url": "http://127.0.0.1:8000/vendor/webkul/ui/assets/images/product/large-product-placeholder.webp"
            },
            "created_at": "2021-09-04T15:02:35.000000Z",
            "updated_at": "2021-09-04T15:02:35.000000Z",
            "reviews": {
                "total": 0,
                "total_rating": 0,
                "average_rating": 0,
                "percentage": []
            },
            "in_stock": true,
            "is_saved": false,
            "is_wishlisted": false,
            "is_item_in_cart": false,
            "show_quantity_changer": true
        }
    ],
    "links": {
        "first": "http://127.0.0.1:8000/api/categorysearch?category=&term=test&page=1",
        "last": "http://127.0.0.1:8000/api/categorysearch?category=&term=test&page=1",
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
                "url": "http://127.0.0.1:8000/api/categorysearch?category=&term=test&page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http://127.0.0.1:8000/api/categorysearch",
        "per_page": 9,
        "to": 1,
        "total": 1
    }
}
  ~~~

