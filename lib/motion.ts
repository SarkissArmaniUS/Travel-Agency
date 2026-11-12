export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});
