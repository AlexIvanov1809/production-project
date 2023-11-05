type Modes = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Modes,
  additional: string[],
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(' ');
}
