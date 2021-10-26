(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{521:function(t,a,s){"use strict";s.r(a);var e=s(28),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),s("p",[t._v("In this section, we will see all the APIs which are related to transactions. In Bagisto, we save all the transactions done by the customers using the Paypal Smart Button option.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("These are all transactions that are saved in the database after the payment done by the customers using the Paypal Smart Button option.")])]),t._v(" "),s("h2",{attrs:{id:"get-all-transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-all-transactions"}},[t._v("#")]),t._v(" Get all transactions")]),t._v(" "),s("p",[t._v("You can get all the transaction data from the Bagisto store. To get the data from the store, the customer must be authenticated. You can achieve this job by using the "),s("code",[t._v("transactions")]),t._v(" API call resource.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET <host>/api/transactions(?limit,page,pagination)")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Info")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("limit")]),t._v(" "),s("td",[t._v("Maximum number of records in each request")]),t._v(" "),s("td",[t._v("Number")])]),t._v(" "),s("tr",[s("td",[t._v("page")]),t._v(" "),s("td",[t._v("Records for specific page based on the limit")]),t._v(" "),s("td",[t._v("Number")])]),t._v(" "),s("tr",[s("td",[t._v("pagination")]),t._v(" "),s("td",[t._v("Will display all the records if set to "),s("code",[t._v("0")])]),t._v(" "),s("td",[t._v("Number")])])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you are using pagination and want to know more info about responses then check the "),s("a",{attrs:{href:"./explanation"}},[t._v("explanation")]),t._v(" portion.")])]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h4",{attrs:{id:"_1-records-for-specific-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-records-for-specific-page"}},[t._v("#")]),t._v(" 1. Records for specific page")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET http(s)://example.com/api/transactions?page=1")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.")]),t._v(" "),s("p",[s("code",[t._v("GET http(s)://example.com/api/transactions")])])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transaction_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47427618SF330010G"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COMPLETED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CAPTURE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payment_method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paypal_smart_button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"0\\": {\\"items\\": [{\\"sku\\": \\"12\\", \\"name\\": \\"Soft Toy\\", \\"category\\": \\"PHYSICAL_GOODS\\", \\"quantity\\": \\"1\\", \\"unit_amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}], \\"payee\\": {\\"merchant_id\\": \\"85PGX7H6T2ZLW\\", \\"email_address\\": \\"prachiwebkul-facilitator@gmail.com\\"}, \\"amount\\": {\\"value\\": \\"150.00\\", \\"breakdown\\": {\\"shipping\\": {\\"value\\": \\"0.00\\", \\"currency_code\\": \\"USD\\"}, \\"tax_total\\": {\\"value\\": \\"0.00\\", \\"currency_code\\": \\"USD\\"}, \\"item_total\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}, \\"currency_code\\": \\"USD\\"}, \\"payments\\": {\\"captures\\": [{\\"id\\": \\"2U5068420K488272L\\", \\"links\\": [{\\"rel\\": \\"self\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L\\", \\"method\\": \\"GET\\"}, {\\"rel\\": \\"refund\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L/refund\\", \\"method\\": \\"POST\\"}, {\\"rel\\": \\"up\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/checkout/orders/47427618SF330010G\\", \\"method\\": \\"GET\\"}], \\"amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}, \\"status\\": \\"COMPLETED\\", \\"create_time\\": \\"2021-04-09T09:28:03Z\\", \\"update_time\\": \\"2021-04-09T09:28:03Z\\", \\"final_capture\\": true, \\"seller_protection\\": {\\"status\\": \\"ELIGIBLE\\", \\"dispute_categories\\": [\\"ITEM_NOT_RECEIVED\\", \\"UNAUTHORIZED_TRANSACTION\\"]}, \\"seller_receivable_breakdown\\": {\\"net_amount\\": {\\"value\\": \\"143.85\\", \\"currency_code\\": \\"USD\\"}, \\"paypal_fee\\": {\\"value\\": \\"6.15\\", \\"currency_code\\": \\"USD\\"}, \\"gross_amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}}]}, \\"shipping\\": {\\"name\\": {\\"full_name\\": \\"John Doe\\"}, \\"address\\": {\\"postal_code\\": \\"110045\\", \\"admin_area_1\\": \\"DL\\", \\"admin_area_2\\": \\"New Delhi\\", \\"country_code\\": \\"IN\\", \\"address_line_1\\": \\"Dwarka\\"}}, \\"reference_id\\": \\"default\\", \\"soft_descriptor\\": \\"PAYPAL *TESTFACILIT\\"}, \\"name\\": {\\"surname\\": \\"Doe\\", \\"given_name\\": \\"John\\"}, \\"address\\": {\\"postal_code\\": \\"110045\\", \\"admin_area_1\\": \\"DL\\", \\"admin_area_2\\": \\"New Delhi\\", \\"country_code\\": \\"IN\\", \\"address_line_1\\": \\"Dwarka\\"}, \\"payer_id\\": \\"8KC42JLS656PQ\\", \\"email_address\\": \\"sb-eyqoq4881652@personal.example.com\\"}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09T09:28:08.000000Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09T09:28:08.000000Z"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"first"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/transactions?page=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/transactions?page=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current_page"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_page"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&laquo; Previous"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/transactions?page=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Next &raquo;"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/transactions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"per_page"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h4",{attrs:{id:"_2-get-all-transactions-without-pagination"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-all-transactions-without-pagination"}},[t._v("#")]),t._v(" 2. Get all transactions without pagination")]),t._v(" "),s("p",[t._v("You can also get all the transaction data at once from the Bagisto store without pagination. To get the data, the customer must be authenticated. For this, you have to pass "),s("code",[t._v("pagination=0")]),t._v(" in the query parameter with the "),s("code",[t._v("transactions")]),t._v(" resource in the API URL.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET http(s)://example.com/public/api/transactions?pagination=0")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transaction_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47427618SF330010G"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COMPLETED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CAPTURE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payment_method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paypal_smart_button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"0\\": {\\"items\\": [{\\"sku\\": \\"12\\", \\"name\\": \\"Soft Toy\\", \\"category\\": \\"PHYSICAL_GOODS\\", \\"quantity\\": \\"1\\", \\"unit_amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}], \\"payee\\": {\\"merchant_id\\": \\"85PGX7H6T2ZLW\\", \\"email_address\\": \\"prachiwebkul-facilitator@gmail.com\\"}, \\"amount\\": {\\"value\\": \\"150.00\\", \\"breakdown\\": {\\"shipping\\": {\\"value\\": \\"0.00\\", \\"currency_code\\": \\"USD\\"}, \\"tax_total\\": {\\"value\\": \\"0.00\\", \\"currency_code\\": \\"USD\\"}, \\"item_total\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}, \\"currency_code\\": \\"USD\\"}, \\"payments\\": {\\"captures\\": [{\\"id\\": \\"2U5068420K488272L\\", \\"links\\": [{\\"rel\\": \\"self\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L\\", \\"method\\": \\"GET\\"}, {\\"rel\\": \\"refund\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L/refund\\", \\"method\\": \\"POST\\"}, {\\"rel\\": \\"up\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/checkout/orders/47427618SF330010G\\", \\"method\\": \\"GET\\"}], \\"amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}, \\"status\\": \\"COMPLETED\\", \\"create_time\\": \\"2021-04-09T09:28:03Z\\", \\"update_time\\": \\"2021-04-09T09:28:03Z\\", \\"final_capture\\": true, \\"seller_protection\\": {\\"status\\": \\"ELIGIBLE\\", \\"dispute_categories\\": [\\"ITEM_NOT_RECEIVED\\", \\"UNAUTHORIZED_TRANSACTION\\"]}, \\"seller_receivable_breakdown\\": {\\"net_amount\\": {\\"value\\": \\"143.85\\", \\"currency_code\\": \\"USD\\"}, \\"paypal_fee\\": {\\"value\\": \\"6.15\\", \\"currency_code\\": \\"USD\\"}, \\"gross_amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}}]}, \\"shipping\\": {\\"name\\": {\\"full_name\\": \\"John Doe\\"}, \\"address\\": {\\"postal_code\\": \\"110045\\", \\"admin_area_1\\": \\"DL\\", \\"admin_area_2\\": \\"New Delhi\\", \\"country_code\\": \\"IN\\", \\"address_line_1\\": \\"Dwarka\\"}}, \\"reference_id\\": \\"default\\", \\"soft_descriptor\\": \\"PAYPAL *TESTFACILIT\\"}, \\"name\\": {\\"surname\\": \\"Doe\\", \\"given_name\\": \\"John\\"}, \\"address\\": {\\"postal_code\\": \\"110045\\", \\"admin_area_1\\": \\"DL\\", \\"admin_area_2\\": \\"New Delhi\\", \\"country_code\\": \\"IN\\", \\"address_line_1\\": \\"Dwarka\\"}, \\"payer_id\\": \\"8KC42JLS656PQ\\", \\"email_address\\": \\"sb-eyqoq4881652@personal.example.com\\"}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09T09:28:08.000000Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09T09:28:08.000000Z"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"get-transaction-by-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-transaction-by-id"}},[t._v("#")]),t._v(" Get transaction by id")]),t._v(" "),s("p",[t._v("To get the specific transaction details, you have to pass an "),s("code",[t._v("transaction_id")]),t._v(" as a request payload in the API URL.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET <host>/api/transactions/{transaction_id}")])])]),t._v(" "),s("li",[s("p",[t._v("Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Info")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("transaction_id")]),t._v(" "),s("td",[t._v("Transaction's ID")]),t._v(" "),s("td",[t._v("Number")])])])])])]),t._v(" "),s("h3",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Let's fetch specific transaction,")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")]),t._v(" "),s("th",[t._v("Info")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[t._v("application/json")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Authorization")]),t._v(" "),s("td",[t._v("Bearer "),s("code",[t._v("token-string")])]),t._v(" "),s("td",[t._v("Use only when you pass "),s("code",[t._v("?token=true")])])])])])]),t._v(" "),s("li",[s("p",[t._v("Request")]),t._v(" "),s("p",[s("code",[t._v("GET http(s)://example.com/api/transactions/1")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transaction_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47427618SF330010G"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COMPLETED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CAPTURE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payment_method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paypal_smart_button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"0\\": {\\"items\\": [{\\"sku\\": \\"12\\", \\"name\\": \\"Soft Toy\\", \\"category\\": \\"PHYSICAL_GOODS\\", \\"quantity\\": \\"1\\", \\"unit_amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}], \\"payee\\": {\\"merchant_id\\": \\"85PGX7H6T2ZLW\\", \\"email_address\\": \\"prachiwebkul-facilitator@gmail.com\\"}, \\"amount\\": {\\"value\\": \\"150.00\\", \\"breakdown\\": {\\"shipping\\": {\\"value\\": \\"0.00\\", \\"currency_code\\": \\"USD\\"}, \\"tax_total\\": {\\"value\\": \\"0.00\\", \\"currency_code\\": \\"USD\\"}, \\"item_total\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}, \\"currency_code\\": \\"USD\\"}, \\"payments\\": {\\"captures\\": [{\\"id\\": \\"2U5068420K488272L\\", \\"links\\": [{\\"rel\\": \\"self\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L\\", \\"method\\": \\"GET\\"}, {\\"rel\\": \\"refund\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/payments/captures/2U5068420K488272L/refund\\", \\"method\\": \\"POST\\"}, {\\"rel\\": \\"up\\", \\"href\\": \\"https://api.sandbox.paypal.com/v2/checkout/orders/47427618SF330010G\\", \\"method\\": \\"GET\\"}], \\"amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}, \\"status\\": \\"COMPLETED\\", \\"create_time\\": \\"2021-04-09T09:28:03Z\\", \\"update_time\\": \\"2021-04-09T09:28:03Z\\", \\"final_capture\\": true, \\"seller_protection\\": {\\"status\\": \\"ELIGIBLE\\", \\"dispute_categories\\": [\\"ITEM_NOT_RECEIVED\\", \\"UNAUTHORIZED_TRANSACTION\\"]}, \\"seller_receivable_breakdown\\": {\\"net_amount\\": {\\"value\\": \\"143.85\\", \\"currency_code\\": \\"USD\\"}, \\"paypal_fee\\": {\\"value\\": \\"6.15\\", \\"currency_code\\": \\"USD\\"}, \\"gross_amount\\": {\\"value\\": \\"150.00\\", \\"currency_code\\": \\"USD\\"}}}]}, \\"shipping\\": {\\"name\\": {\\"full_name\\": \\"John Doe\\"}, \\"address\\": {\\"postal_code\\": \\"110045\\", \\"admin_area_1\\": \\"DL\\", \\"admin_area_2\\": \\"New Delhi\\", \\"country_code\\": \\"IN\\", \\"address_line_1\\": \\"Dwarka\\"}}, \\"reference_id\\": \\"default\\", \\"soft_descriptor\\": \\"PAYPAL *TESTFACILIT\\"}, \\"name\\": {\\"surname\\": \\"Doe\\", \\"given_name\\": \\"John\\"}, \\"address\\": {\\"postal_code\\": \\"110045\\", \\"admin_area_1\\": \\"DL\\", \\"admin_area_2\\": \\"New Delhi\\", \\"country_code\\": \\"IN\\", \\"address_line_1\\": \\"Dwarka\\"}, \\"payer_id\\": \\"8KC42JLS656PQ\\", \\"email_address\\": \\"sb-eyqoq4881652@personal.example.com\\"}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09T09:28:08.000000Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-09T09:28:08.000000Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);