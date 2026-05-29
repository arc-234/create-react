type TStorageType = typeof localStorage | typeof sessionStorage;

const PREFIX = "@app";

const getKey = (key: string) => `${PREFIX}:${key}`;

function createStorage(prefix: string, backend: TStorageType) {
	return {
		set<T>(key: string, value: T) {
			backend.setItem(getKey(key), JSON.stringify(value));
		},

		get<T>(key: string): T | null {
			const item = backend.getItem(getKey(key));
			if (!item) {
				return null;
			}

			try {
				return JSON.parse(item) as T;
			} catch {
				return null;
			}
		},

		remove(key: string) {
			backend.removeItem(getKey(key));
		},

		clearAll() {
			for (const k of Object.keys(backend)) {
				if (k.startsWith(prefix)) {
					backend.removeItem(k);
				}
			}
		},
	};
}

export const localStorageUtil = createStorage(PREFIX, localStorage);
export const sessionStorageUtil = createStorage(PREFIX, sessionStorage);
