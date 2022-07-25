describe('Case Switcher', () => {

  jest.setTimeout(30 * 1000)

  beforeAll(async () => {
    await page.goto('http://localhost:3000/chat-room.html', { waitUnitl: 'domcontentloaded' })
  })

  test('should have a title of "Chat Room"', async () => {
    const title = await page.title()
    expect(title).toBe('Chat Room')
  })

  test('should have a button with id "send-btn"', async () => {
    const id = await page.$eval('#send-btn', el => el.id)
    expect(id).toBe('send-btn')
  })

  test('should have an input with name "message"', async () => {
    const name = await page.$eval('input[name="message"]', el => el.name)
    expect(name).toBe('message')
  })

  test('should append a message to the chat', async () => {
    const joke = 'You can never lose a homing pigeon... if it doesn\'t come back it was just a pigeon'
    await page.waitForTimeout(0.5 * 1000)
    await page.type('input[name="message"]', joke)
    await page.waitForTimeout(0.5 * 1000)
    await page.click('#send-btn')
    await page.waitForTimeout(0.5 * 1000)
    const txt = await page.$eval('#chat > p', el => el.innerText)
    expect(txt).toBe(joke)
  })

  test('should empty the input after sending', async () => {
    const txt = await page.$eval('input[name="message"]', el => el.value)
    expect(txt).toBeFalsy()
  })

})
