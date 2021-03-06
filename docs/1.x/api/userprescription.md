# Userprescription

In this section, we will use all the Userprescription' API. We will check the creation of Userprescription, fetching of Userprescription, and updation of Userprescription.

## Create a new Userprescription

To add an Userprescription, you have to use the `atients` endpoint url and have to pass the Userprescription fields in the request payload. This `Userprescription` API call resource will create a new Userprescription of the customer, only if that customer has logged in the store.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `POST <host>/api/userprescription?token=true`

- Params

  | Name         | Info         | Type   |
  | ------------ | ------------ | ------ | 
  | file         | File         | String |
  | name      	 | Name         | String |
  | mobile_number| Mobile Number| Number |
 

### Examples

Let's take an example of creating an patients,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `POST http(s)://example.com/api/userprescription?token=true`

- Params

  | Name         | Value           |
  | ------------ | --------------- |
  | file         | file.doc      		|
  | name     	 | Satiz           |
  | mobile_number | 9600604471     |
  
  ~~~json
 {
  
    "name": "Dhaksan",
    "age":4,
    "gender": "Male",
    "relation": "Son"
    
  
}
  ~~~

::: details Response

  ~~~json
 {
    "data": {
        "name": "Dhaksan",
        "age": 4,
        "gender": "Male",
        "relation": "Son",
        "user_id": 58,
        "updated_at": "2021-10-28T11:01:37.000000Z",
        "created_at": "2021-10-28T11:01:37.000000Z",
        "id": 120
    }
}
  ~~~

:::

## Get all Userprescription

To get all the address of a customer, that customer must be logged in to the store. You can achieve this job by using `Patients` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/userprescription?token=true`

### Examples

Let's take an example,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/userprescription?token=true`

::: details Response

  ~~~json
  {
    "data": [
        {
            "id": 120,
            "name": "Dhaksan",
            "user_id": 58,
            "cart_id": null,
            "order_id": null,
            "type": "customer",
            "relation": "Son",
            "gender": "Male",
            "created_at": "2021-10-28T11:01:37.000000Z",
            "updated_at": "2021-10-28T11:01:37.000000Z",
            "age": 4
        },
        {
            "id": 117,
            "name": "gggggggg",
            "user_id": 58,
            "cart_id": null,
            "order_id": null,
            "type": "customer",
            "relation": "Myself",
            "gender": "doe",
            "created_at": "2021-10-28T10:31:53.000000Z",
            "updated_at": "2021-10-28T10:31:53.000000Z",
            "age": 8
        },
        {
            "id": 119,
            "name": "gggggggg",
            "user_id": 58,
            "cart_id": null,
            "order_id": null,
            "type": "customer",
            "relation": "Myself",
            "gender": "doe",
            "created_at": "2021-10-28T10:57:41.000000Z",
            "updated_at": "2021-10-28T10:57:41.000000Z",
            "age": 8
        }
    ]
}
  ~~~

:::

