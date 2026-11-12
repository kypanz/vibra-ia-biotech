import { Arrow } from './Arrow';

export function BrandShowcase() {
  return (
    <div className="brand-showcase">
      <span className="eyebrow">VIBRA IA BIOTECH</span>
      <img
        className="hero-brand-image"
        src="/assets/vibra-logo.jpg"
        width={1612}
        height={893}
        alt="VIBRA IA BIOTECH"
      />
      <div className="brand-showcase-bottom">
        <span>AI · SOFTWARE · DIGITAL BUSINESS</span>
        <Arrow />
      </div>
    </div>
  );
}
