declare module "*.svg";
declare module "*.webp";
declare module "modsen-toasts-lib";

interface RefObject<T> {
  readonly current: T | null;
}
