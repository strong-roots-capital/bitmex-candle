import test from 'ava'

/**
 * Library under test
 */

import Candle from '../src/bitmex-candle'

test('candle is importable', t => {
    t.pass()
})

test('candle is of expected form', t => {
    function returnCandle(): Candle {
        return {
            timestamp: '2019-01-20T00:00:00.000Z',
            symbol: 'XBTUSD',
            open: 3606,
            high: 3784.5,
            low: 3605,
            close: 3681.5,
            trades: 259942,
            volume: 745711298,
            vwap: 3694.3993,
            lastSize: 1500,
            turnover: 20185572501781,
            homeNotional: 201855.72501780713,
            foreignNotional: 745711298
        }
    }
    const candle: Candle = returnCandle()
    t.pass()
})
