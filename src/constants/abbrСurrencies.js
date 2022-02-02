import { US, EU, RU, PL, JP, GB } from 'country-flag-icons/react/3x2'

export const ABBR_CURRENCIES = ["UAH", "RUB", "EUR", "USD", "PLN", "JPY", "GBP"];

export const ABBR_CURRENCIES_LIST = ["USD", "EUR", "RUB", "PLN", "JPY", "GBP"];

export const NATIONAL_CURRENCIES = {
  UAH: "UAH",
  RUB: "RUB", 
  EUR: "EUR", 
  USD: "USD", 
  PLN: "PLN", 
  JPY: "JPY", 
  GBP: "GBP"
}

export const NATIONALITIES_HUMAN_NAME = {
  [NATIONAL_CURRENCIES.UAH]: "Ukraine", 
  [NATIONAL_CURRENCIES.RUB]: "Russia", 
  [NATIONAL_CURRENCIES.EUR]: "Europe", 
  [NATIONAL_CURRENCIES.USD]: "United States", 
  [NATIONAL_CURRENCIES.PLN]: "Poland", 
  [NATIONAL_CURRENCIES.JPY]: "Japan", 
  [NATIONAL_CURRENCIES.GBP]: "United Kingdom", 
}

export const CURRENCIES_LISTS = [
  {
    icon: <US />,
    code: "USD",
    name: "Доллар",
    codeName: "USD, Доллар",
    exRates: "28",
  },
  {
    icon: <EU />,
    code: "EUR",
    name: "Евро",
    codeName: "EUR, Евро",
    exRates: "31",
  },
  {
    icon: <RU />,
    code: "RUB",
    name: "Рубль",
    codeName: "RUB, Рубль",
    exRates: "31",
  },
  {
    icon: <PL />,
    code: "PLN",
    name: "злотый",
    codeName: "PLN, Злотый",
    exRates: "31",
  },
  {
    icon: <JP />,
    code: "JPY",
    name: "иена",
    codeName: "JPY, Иена",
    exRates: "31",
  },
  {
    icon: <GB />,
    code: "GBP",
    name: "фунт",
    codeName: "GBP, Фунт",
    exRates: "31",
  },
]