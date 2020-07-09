import _ from 'lodash'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'

// writing tests for vuex is new to me so I was only able to pretty much test the most simple one's like the getters
// I tried to mock the state to pass to the getters but have not gotten it to work so I've excluded it

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
  describe('Testing temperatureLevel getter', () => {
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

  describe('Testing alphabetical order getter', () => {
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

  describe('Testing most recent Server update', () => {
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
