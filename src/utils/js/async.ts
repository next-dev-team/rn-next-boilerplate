export function delay(ms = 200): Promise<boolean> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}
