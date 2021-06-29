import { Equal, Expect, NotAny } from '@type-challenges/utils'
// my code
type HelloWorld = string

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
