describe('Block Buster', () => {

  jest.setTimeout(30 * 1000)

  beforeAll(async () => {
    await page.goto('http://localhost:3000/block-busters.html', { waitUnitl: 'domcontentloaded' })
  })

  test('should have a title of "Block Busters"', async () => {
    const title = await page.title()
    expect(title).toBe('Block Busters')
  })

  test('should have 100 divs with a class of "red-block"', async () => {
    await page.waitForTimeout(1 * 1000)
    const blocks = Array.from(await page.$$eval('.red-block', els => els))
    expect(blocks.length).toBe(100)
  })

  test('should have 100 divs with id of "block-i" for i^th div ', async () => {
    const blocks = Array.from(await page.$$eval('.red-block', els => els.map(el => el.id)))
    const passing = blocks.filter((id, i) => id === `block-${i + 1}`)
    expect(passing.length).toBe(100)
  })

  test('should delete blocks on mouseover', async () => {
    await page.click('#block-100')
    const blocks = Array.from(await page.$$eval('.red-block', els => els.map(el => el.id)))
    expect(blocks.length).toBeLessThan(100)
  })

})
