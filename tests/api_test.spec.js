
import { test, expect } from '@playwright/test'
import { text } from 'stream/consumers'

test('Api GET test', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)
    const GetReponse = await response.text();
    expect(text).toContain()
    console.log(await response.json());

})

test('API Post test', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"     
        }
    })

    expect(response.status()).toBe(201)
    const GetReponse = await response.text();
    expect(text).toContain()
    console.log(await response.json());

})