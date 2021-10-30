# Phlebotomists

In this section, we will use all APIs which relates to customer like registration, authentication, details and reset password.

Let's start with registration first,


## Authentication

To authenticate at the Bagisto store, the customer needs a valid email address and password.

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request
  
  Now here is your choice, whether you want to use **JWT API guard** or normal **phlebotomist guard**.

  ::: tip

    If you want to know more about the JWT Authentication, please check here [JWT Authentication](./getting-started-with-the-api#_1-jwt-authentication).

  :::

  For JWT API guard, you need to pass the token key in the query string.

  `POST <host>/api/phlebotomist/login?token=true`

  For normal phlebotomist guard,

  `POST <host>/api/phlebotomist/login`

- Params

  | Name          | Info                  | Type   |
  | ------------- | --------------------- | ------ |
  | email         | Email for phlebotomist    | String |
  | password      | Password for phlebotomist | String |

### Both Examples

#### 1. Let's try the phlebotomist authentication with JWT API guard

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `POST http(s)://example.com/api/phlebotomist/login?token=true`

- Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

::: details Response

  Once you send the request, you will get some random token string that will be used to access the API data.

  ~~~json
  {
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2RldmVsb3BtZW50XC9iYWdpc3RvLW1hc3RlclwvcHVibGljXC9hcGlcL2N1c3RvbWVyXC9sb2dpbiIsImlhdCI6MTYxMDY5Njk2MSwiZXhwIjoxNjEwNzAwNTYxLCJuYmYiOjE2MTA2OTY5NjEsImp0aSI6IkpuMU9aUWoxd1BVaXlLaHQiLCJzdWIiOjEsInBydiI6IjhmY2EwODhhYmFlMmY5YThmODRhNWYwYmY2YTY1MjQ0OTA1NWJlMDAifQ.6mKgyRgMHxi_W6gf2cgb7Rdcut73L1YEBauYZ8soKSU",
      "message": "Logged in successfully.",
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

#### 2. Let's try without token

By removing the token key from request will activate the **phlebotomist guard**.

- Headers

  | Key    | Value            |
  | ------ | ---------------- |
  | Accept | application/json |

- Request

  `POST http(s)://example.com/api/phlebotomist/login`

- Params

  | Key      | Value            |
  | -------- | ---------------- |
  | email    | john@example.com |
  | password | john123          |

::: details Response

  Once you send the request, then you will get data without token because now the **phlebotomist guard** is active.

  ~~~json
  {
      "token": true,
      "message": "Logged in successfully.",
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::




## Details

You can get the customer's details only for the logged-in customer. To retrieve the customer's information you can use the `customer/get` resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/phlebotomist/get`

### Examples

Let's fetch the phlebotomist data,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/phlebotomist/get`

::: details Response

  ~~~json
  {
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

## Details by id

You can also get the customer information by using `customer_id` as a request payload. To achieve this, you can use the `phlebotomist/{id}` API call resource.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/phlebotomist/{id}`

- Params

  | Name | Info        | Type   |
  | ---- | ----------- | ------ |
  | id   | Customer ID | Number |

::: warning

  This request will return the current logged in customer's details.

:::

### Examples

Let's fetch the customer data,

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET http(s)://example.com/api/phlebotomist/1`

::: details Response

  ~~~json
  {
      "data": {
          "id": 1,
          "email": "john@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "name": "John Doe",
          "gender": null,
          "date_of_birth": null,
          "phone": null,
          "status": 1,
          "group": {
              "id": 2,
              "name": "General",
              "created_at": null,
              "updated_at": null
          },
          "created_at": "2020-09-28T05:13:42.000000Z",
          "updated_at": "2020-09-28T05:13:42.000000Z"
      }
  }
  ~~~

:::

## Logout

You can logout the phlebotomist from the Bagisto store with the help of `phlebotomist/logout` resources. No need to provide any request payload in the API call.

- Headers

  | Key           | Value                 | Info                                 |
  | ------------- | --------------------- | ------------------------------------ |
  | Accept        | application/json      |                                      |
  | Authorization | Bearer `token-string` | Use only when you pass `?token=true` |

- Request

  `GET <host>/api/phlebotomist/logout`

### Examples

- Request

  `GET http(s)://example.com/api/phlebotomist/logout`

::: details Response

  ~~~json
  {
      "message": "Logged out successfully!"
  }
  ~~~

:::
