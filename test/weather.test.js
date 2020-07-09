import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

describe('store/weather', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store

  beforeAll(async () => {
    // note the store will mutate across tests
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })
  // trying to test all the getters
  describe('temperatureLevels', () => {
    let temperature

    beforeEach(() => {
      temperature = store.getters['weather/temperatureLevels']
    })

    test('getter is a function', () => {
      expect(_.isArray(temperature)).toBe(true)
    })

    test('should be 0 due to fetch not have had been able to run yet', () => {
      expect(temperature.length).toBe(0)
    })
  })
  describe('alphabeticalOrder', () => {
    let alphaOrder

    beforeEach(() => {
      alphaOrder = store.getters['weather/alphabeticalOrder']
    })

    test('getter is a function', () => {
      expect(_.isArray(alphaOrder)).toBe(true)
    })

    test('should be 0 due to fetch not have had been able to run yet', () => {
      expect(alphaOrder.length).toBe(0)
    })
  })

  describe('mostRecentServerUpdate', () => {
    let updates

    beforeEach(() => {
      updates = store.getters['weather/mostRecentServerUpdate']
    })

    test('getter is a function', () => {
      expect(_.isArray(updates)).toBe(true)
    })

    test('should be 0 due to fetch not have had been able to run yet', () => {
      expect(updates.length).toBe(0)
    })
  })
})
