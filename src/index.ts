import debug from 'debug'

const logInfo = debug('create-lib-boilerplate:info')

export function foo(param1: any): any {
  logInfo('foo called')
  return param1
}
