import { sayHello } from './helpers'

describe('Helper', () => {
  describe('sayHello funtion', () => {
    it('should return string message with Hello prefix', () => {
      expect(sayHello('Ilfat Izzat Pratama')).toEqual('Hello Ilfat Izzat Pratama!')
    })
  })
})
