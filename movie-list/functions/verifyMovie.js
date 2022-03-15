const {By} = require('selenium-webdriver')

const verifyMovies = async (driver) => {
  //This is the same as the add movie, except we define the movie, then add it
  const movie = 'Back to the Future'

  await driver.findElement(By.xpath('//input')).sendKeys(movie)

  await driver.findElement(By.xpath('//button')).click()

  
  const movieText = await driver.findElement(By.xpath('//li/span')).getText()

  expect(movieText).toEqual(movie)
}

module.exports = {
  verifyMovies
}