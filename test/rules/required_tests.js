import test from 'ava'

import { required } from '../../src/rules'

test('rules.required should return "required" for null value', t => {
  t.is(required('field', null), 'required')
})

test('rules.required should return "required" for undefined value', t => {
  t.is(required('field', undefined), 'required')
})

test('rules.required should return "required" for empty string', t => {
  t.is(required('field', ''), 'required')
})

test('rules.required should return "required" for string with only spaces', t => {
  t.is(required('field', '   '), 'required')
})

test('rules.required should return null for null value when options is false', t => {
  t.is(required('field', null, false), null)
})

test('rules.required should return null for string', t => {
  t.is(required('field', 'value'), null)
})

test('rules.required should return null for number', t => {
  t.is(required('field', 42), null)
})
