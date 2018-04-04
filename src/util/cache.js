import store from 'store'
import cookie from 'js-cookie'

let __session__ = sessionStorage

const TYPES = ['session', 'store', 'cookie'];
const DEFAULT_CACHE = TYPES[0]

const cache = {
    set: (key, value, type = DEFAULT_CACHE) => {
        !(type in TYPES) && (type = DEFAULT_CACHE);
        cache[type].set(key, value);
        return cache[type];
    },
    get: (key, type = DEFAULT_CACHE) => {
        !(type in TYPES) && (type = DEFAULT_CACHE);
        return cache[type].get(key);
    },
    clear: (type = DEFAULT_CACHE) => {
        !(type in TYPES) && (type = DEFAULT_CACHE);
        cache[type].clear();
        return cache[type];
    },
    remove: (key, type = DEFAULT_CACHE) => {
        cache[type].remove(key);
        return cache;
    },
    session: {
        set: (key, value) => {
            __session__.setItem(key, JSON.stringify(value));
            return cache.session;
        },
        get: (key) => {
            let value = __session__.getItem(key);
            return key && JSON.parse(value);
        },
        remove: (key) => {
            __session__.removeItem(key);
            return cache.session;
        },
        clear: () => {
            __session__.clear();
            return cache.session;
        }
    },
    store: store.enabled ? store : cookie,
    cookie: {
        // expire Day
        set: (key, value, expires = 7, domain = '') => {
            cookie.set(key, value, { expires, domain });
            return cache.cookie;
        },
        get: (key) => {
            return cookie.get(key);
        },
        remove: (key) => {
            cookie.remove(key);
            return cache.cookie;
        },
        clear: () => {
            return cache.cookie;
        }
    }
}

if (!store.enabled) {
    alert('为了更好的使用体验，请关闭隐私模式')
    cache.store = cache.cookie
    cache.session = cache.memory
}

export default cache
