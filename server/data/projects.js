const lodash = require('lodash')
const faker = require('faker')

const projects = lodash.times(100, n => {
  return {
    id: n + 1,
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
  }
})

module.exports = projects
