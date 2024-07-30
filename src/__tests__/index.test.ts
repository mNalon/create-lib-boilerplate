import { foo } from '../index'

describe('foo', () => {
  describe('when it is called with any param', () => {
    it('should return the param', () => {
      expect(foo(3)).toBe(3)
    })
  })
})
