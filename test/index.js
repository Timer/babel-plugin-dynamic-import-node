import { readFileSync, readdirSync, statSync } from 'fs'
import { expect } from 'chai'
import { join } from 'path'
import templates from '@babel/plugin-transform-template-literals'

import testPlugin from './testPlugin'

const FIXTURE_PATH = join(__dirname, 'fixtures')

const testFolders = readdirSync(FIXTURE_PATH).filter(file =>
  statSync(join(FIXTURE_PATH, file)).isDirectory()
)

describe('babel-plugin-dynamic-import-node', () => {
  testFolders.forEach(folderName => {
    const actual = readFileSync(
      join(FIXTURE_PATH, folderName, 'actual.js'),
      'utf8'
    )
    const expected = readFileSync(
      join(FIXTURE_PATH, folderName, 'expected.js'),
      'utf8'
    )
    const expectedES2015 = readFileSync(
      join(FIXTURE_PATH, folderName, 'expected.es2015.js'),
      'utf8'
    )

    it(`works with ${folderName}`, () => {
      const result = testPlugin(actual)
      expect(result.trim()).to.equal(expected.trim())
    })

    it(`works with ${folderName} and the es2015 preset`, () => {
      const result = testPlugin(
        actual,
        ['@babel/preset-es2015'],
        [[templates, { spec: true }]]
      )
      expect(result.trim()).to.equal(expectedES2015.trim())
    })

    it(`works with ${folderName} and the env preset`, () => {
      const result = testPlugin(
        actual,
        ['@babel/preset-env'],
        [[templates, { spec: true }]]
      )
      expect(result.trim()).to.equal(expectedES2015.trim())
    })
  })
})
