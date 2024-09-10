const Grainy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <filter id="grainy" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" />
        <feColorMatrix type="saturate" values="0" />
        <feBlend in="SourceGraphic" in2="grainy" mode="multiply" />
      </filter>
    </defs>
  </svg>
);

export default Grainy;
