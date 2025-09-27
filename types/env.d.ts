type EnvBoolean = 'true' | 'false';

declare interface Env {
	readonly VITE_PORT: string;
	readonly VITE_API_URL: string;
}
