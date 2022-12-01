export function url(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}/${path}`;
}
