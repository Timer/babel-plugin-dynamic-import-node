import { transform } from '@babel/core'

export default function testPlugin(code, presets, plugins) {
  const result = transform(code, {
    presets: [].concat(presets || []),
    plugins: [].concat(plugins || [], './lib/index.js'),
  })

  return result.code
}
