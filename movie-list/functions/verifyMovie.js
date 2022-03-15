const {By} = require('selenium-webdriver')

const verifyMovies = async (driver) => {
  //This is the same as the add movie, except we define the movie, then add it
  const movie = 'Back to the Future'

  await driver.findElement(By.xpath('//input')).sendKeys(movie)

  await driver.findElement(By.xpath('//button')).click()

  //This, rather than just pulling to see if there was a list, will also make sure the text of the list matches the provided movie name!
  const movieText = await driver.findElement(By.xpath('//li/span')).getText()

  expect(movieText).toEqual(movie)
}

module.exports = {
  verifyMovies
}