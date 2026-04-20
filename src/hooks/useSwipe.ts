// TODO: Implement swipe gesture detection hook
// See GitHub issue for full specification
export function useSwipe(_options?: { onSwipeLeft?: () => void; onSwipeRight?: () => void; onSwipeUp?: () => void; onSwipeDown?: () => void }) {
  return { isSwiping: false };
}
