
bitmex-candle [![Build status](https://travis-ci.org/strong-roots-capital/bitmex-candle.svg?branch=master)](https://travis-ci.org/strong-roots-capital/bitmex-candle) [![npm version](https://img.shields.io/npm/v/bitmex-candle.svg)](https://npmjs.org/package/bitmex-candle)
===============================================================================================================================================================================================================================================================================

> Interface for BitMEX candle

Install
-------

```shell
npm install bitmex-candle
```

Use
---

```typescript
import Candle from 'bitmex-candle'
```

The `Candle` interface is defined as

```typescript
/**
 * An atomic unit of time-series data as returned by the BitMEX
 * exchange API.
 */
interface Candle {
    /**
     * Time that the current Candle closed, in ISO 8601 format.
     */
    timestamp: string,
    /**
     * Opening value of current Candle.
     */
    open: number,
    /**
     * Highest value observed during current Candle.
     */
    high: number,
    /**
     * Lowest value observed during current Candle.
     */
    low: number,
    /**
     * Closing value of current Candle.
     */
    close: number
    /**
     * Volume observed during current Candle.
     */
    volume: number,

    /**
     * Instrument symbol.
     */
    symbol?: string,
    /**
     * Number of trades recorded during current Candle.
     */
    trades?: number,
    /**
     * Volume-weighted average price.
     */
    vwap?: number,
    /**
     *
     */
    lastSize?: number,
    /**
     * Number of contracts exchanged during current Candle.
     */
    turnover?: number,
    /**
     *
     */
    homeNotional?: number,
    /**
     *
     */
    foreignNotional?: number
}
```

## Index

---

