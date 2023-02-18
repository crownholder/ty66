
require('dotenv').config();


function getData(){
      fetch('https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v2/keyspaces/${ASTRA_DB_KEYSPACE}/rest_example_products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Cassandra-Token' : 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsYmJUcDRObzdfUHBJLUxOWFZJbUFmY1pWQWs3TFNwdnY5Z0RFVF80M2ZrIn0.eyJqdGkiOiJiYzUyOWFkNy00N2UwLTQwNDEtODRkYy0yN2U1M2RkNzFjNGIiLCJleHAiOjE2NzU3NTAzNzEsIm5iZiI6MCwiaWF0IjoxNjc1NzE0MzcyLCJpc3MiOiJodHRwczovL2F1dGguY2xvdWQuZGF0YXN0YXguY29tL2F1dGgvcmVhbG1zL0Nsb3VkVXNlcnMiLCJhdWQiOiJhdXRoLXByb3h5Iiwic3ViIjoiZGIzN2M1ZGUtNjMyMC00NWViLTkzZGUtYjkxM2MxNDk3ZTFlIiwidHlwIjoiSUQiLCJhenAiOiJhdXRoLXByb3h5IiwiYXV0aF90aW1lIjoxNjc1NzE0MzcxLCJzZXNzaW9uX3N0YXRlIjoiNDZiNzA5MjQtZmQ2MS00ZThiLTg0YjktNTIxMTc0NjcyZjQ4IiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwibmFtZSI6Ik1pY2hhZWwgS2VlcyIsInByZWZlcnJlZF91c2VybmFtZSI6ImtlZXNuZXRmbGl4LjFAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6Ik1pY2hhZWwiLCJmYW1pbHlfbmFtZSI6IktlZXMiLCJlbWFpbCI6ImtlZXNuZXRmbGl4LjFAZ21haWwuY29tIn0.OnZcUjAaF2G0-AsmM_aNfWJ7beHhw_MQfhqW5eX6TwIJumgn4vsWkf8aAIySo45wlw73Q10135VNtYon3_zelS7Kf1USP3S4Y_fmjMYd6mhwKP0CsnDSSnmn3qyDFI8GqlqTUScEL4C1DOgAC_tvxKNV_pp3dLDiG-m92M51lqEmjbmsmmaSo9C6u4Ccrs_Mn4PnwLFY6JrhnUinYu6jvNQ0-VKv7E_mFQ5FU9Y8sX-dtAJ1FuH49JW6xwoEYBAYfLTTXB3d0RlZnrqO3HLomZUtWoyGe2GAKqFYE2oWJOFxpUtskeeJG1dN6abGs7R5b2tRMPY2oI2UP6bezzs8FQ'
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

getData();