export function errorReporter(
  error: Error,
  key: string,
  config: Record<string, unknown>
): void {
  console.error("Error in SWR", key, config, error);
}
