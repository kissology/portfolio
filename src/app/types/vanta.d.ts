declare module 'vanta/dist/vanta.net.min' {
  const vantaEffect: (options: {
    el: HTMLElement | null;
    THREE: typeof import('three');
    [key: string]: unknown;
  }) => VantaEffect;

  export default vantaEffect;
}
