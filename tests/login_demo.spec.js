import {test, expect} from "@playwright/test"

test('Demo login test', async({page}) =>
{
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('test');
    await page.pause()
  await page.getByPlaceholder('Enter your password').click();

    

}  

)