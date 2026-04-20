// TODO: Implement haptic feedback hook for mobile devices
// See GitHub issue for full specification
export function useHaptic() {
  return {
    trigger: (_type: 'light' | 'medium' | 'heavy' | 'success' | 'error') => {},
  };
}
