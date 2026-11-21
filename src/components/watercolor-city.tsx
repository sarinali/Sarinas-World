import { useId } from "react";

export default function WatercolorCity({ src, label }: { src: string; label: string }) {
  const id = `city-wash-${useId().replace(/:/g, "")}`;
  return <svg viewBox="0 0 1200 400" role="img" aria-label={`Watercolor view of ${label}`} className="watercolor-city" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id={id} x="-5%" y="-10%" width="110%" height="120%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency=".012 .026" numOctaves="3" seed="8" result="flow" />
        <feDisplacementMap in="SourceGraphic" in2="flow" scale="9" xChannelSelector="R" yChannelSelector="G" result="bleed" />
        <feGaussianBlur in="bleed" stdDeviation=".7" result="soft" />
        <feColorMatrix in="soft" type="saturate" values=".65" />
        <feComponentTransfer result="wash"><feFuncR type="gamma" amplitude="1.04" exponent=".82" offset=".035"/><feFuncG type="gamma" amplitude="1.02" exponent=".84" offset=".035"/><feFuncB type="gamma" amplitude=".99" exponent=".88" offset=".025"/></feComponentTransfer>
        <feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="3" seed="4" result="paper" />
        <feColorMatrix in="paper" type="saturate" values="0" result="mono" />
        <feBlend in="wash" in2="mono" mode="soft-light" />
      </filter>
      <filter id={`${id}-edge`}><feTurbulence type="fractalNoise" baseFrequency=".015" numOctaves="3" seed="3"/><feDisplacementMap in="SourceGraphic" scale="15"/></filter>
      <radialGradient id={`${id}-paper`}><stop offset="62%" stopColor="#f8f5ec" stopOpacity="0"/><stop offset="100%" stopColor="#f8f5ec" stopOpacity=".6"/></radialGradient>
    </defs>
    <rect width="1200" height="400" fill="#f8f5ec"/>
    <image href={src} width="1200" height="400" preserveAspectRatio="xMidYMid slice" filter={`url(#${id})`} opacity=".9" />
    <rect width="1200" height="400" fill={`url(#${id}-paper)`}/>
  </svg>;
}
