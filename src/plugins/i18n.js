import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        checkout: 'check out the',
        plugins: 'Installed CLI Plugins',
        links: 'Essential Links',
        ecosystem: 'Ecosystem',
        kosten: 'Price',
        auto: 'no car | one car | {count} cars',
        besitzt: 'owns',
        datum: 'Release-Date'
    },
    'de': {
        welcomeMsg: 'Willkommen zu Ihreer Vue.js',
        guide: 'Für eine Übersicht,',
        checkout: 'drück drauf:',
        plugins: 'Installierte CLI Plugins',
        links: 'Wichtige Links',
        ecosystem: 'Ecosystem',
        kosten: 'Kaufpreis',
        auto: 'kein Auto | ein Auto | {count} Autos',
        besitzt: 'besitzt',
        datum: 'Release-Datum'
    }
};

const numberFormats = {
  'en': {
      currency: {
          style : 'currency',
          currency : 'USD'
      }
  },
    'de': {
        currency: {
            style : 'currency',
            currency : 'EUR'
        }
    }
};

const dateTimeFormats = {
    'en': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true
        }
    },
    'de': {
        short: {
            year: 'numeric', month: 'short', day: 'numeric'
        },
        long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
        }
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'de', // set fallback locale
    numberFormats, // set number formats
    dateTimeFormats,
    messages, // set locale messages
});

export default i18n;
