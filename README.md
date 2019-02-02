# Loterias caixa scraper

Um módulo nodejs que permite pegar dados dos resultados dos sorteios da Caixa
Econômica Federal Brasileira <br> [English] <br> A nodejs module that allows you
to pick up data from the lottery of the Brazilian Caixa Econômica Federal

## Supported lotteries

- Megasena
- Quina(coming soon)
- Lotomania(coming soon)

## Usage

```javascript
const lottery = require('./../index');
// or import
import { resultByNumber } from './../index';
```

### Get last result

```javascript
//get the last megasena result data
lottery
  .resultByNumber('megasena')
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

### Get an especific result by number

```javascript
// to get especific megasena result data by number
lottery
  .resultByNumber('megasena', 2117)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
```

## CLI

```console
loterias-caixa r [type]
loterias-caixa r [type] [number]
```

## Methods

### _resultByNumber(typeLottery, numberLottery)_

**typeLottery: String,<br> numberLottery: Number**<br> Return lottery data<br>
If number is undefined, this method will return the last lottery data

## Dev

#### To edit, lint and build

```
npm run clean: Clean builds
npm run lint: Check for errors
npm run build: Generate minified build with source-maps
npm run watch: Generate minified build with source-maps on save
npm run prepare: Clean and build
```

## PRs are appreciated!

## License

[MIT](https://github.com/luccasr73/loterias-caixa-scraper/blob/master/LICENCE)
