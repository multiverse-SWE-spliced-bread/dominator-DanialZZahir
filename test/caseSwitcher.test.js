describe('Case Switcher', () => {

  jest.setTimeout(30 * 1000)

  beforeAll(async () => {
    await page.goto('http://localhost:3000/case-switcher.html', { waitUnitl: 'domcontentloaded' })
  })

  test('should have a title of "Case Switcher"', async () => {
    const title = await page.title()
    expect(title).toBe('Case Switcher')
  })

  test('should have a button with id "quiet-btn"', async () => {
    const id = await page.$eval('#quiet-btn', el => el.id)
    expect(id).toBe('quiet-btn')
  })

  test('should have a button with id "loud-btn"', async () => {
    const id = await page.$eval('#loud-btn', el => el.id)
    expect(id).toBe('loud-btn')
  })

  test('should have a button with id "sarc-btn"', async () => {
    const id = await page.$eval('#sarc-btn', el => el.id)
    expect(id).toBe('sarc-btn')
  })

  test('should make the text lowercase when quiet-btn is clicked', async () => {
    await page.click('#quiet-btn')
    await page.waitForTimeout(1 * 1000)
    const txt = await page.$eval('#patrick', el => el.innerText)
    expect(txt).toBe('i was trying to tell you that i was choking on snow, but the snow melted and turned into water, and i drank all the water! now i\'m better.')
  })

  test('should make the text uppercase when loud-btn is clicked', async () => {
    await page.click('#loud-btn')
    await page.waitForTimeout(1 * 1000)
    const txt = await page.$eval('#patrick', el => el.innerText)
    expect(txt).toBe('I WAS TRYING TO TELL YOU THAT I WAS CHOKING ON SNOW, BUT THE SNOW MELTED AND TURNED INTO WATER, AND I DRANK ALL THE WATER! NOW I\'M BETTER.')
  })

  test('should make the text uppercase when sarc-btn is clicked', async () => {
    await page.click('#sarc-btn')
    await page.waitForTimeout(1 * 1000)
    const txt = await page.$eval('#patrick', el => el.innerText)
    expect(txt).toBe('i WaS tRyInG tO tElL yOu ThAt I wAs ChOkInG oN sNoW, bUt ThE sNoW mElTeD aNd TuRnEd InTo WaTeR, aNd I dRaNk AlL tHe WaTeR! nOw I\'m BeTtEr.')
  })

})
