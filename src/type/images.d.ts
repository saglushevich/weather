declare module "*.jpeg";
declare module "*.svg";
declare module "modsen-toasts-lib";

interface RefObject<T> {
  readonly current: T | null;
}
