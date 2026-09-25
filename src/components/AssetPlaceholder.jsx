// Renders a real <img> once a path is set in src/data/assets.js, otherwise
// falls back to the same dashed placeholder box used throughout the design.
export default function AssetPlaceholder({ src, alt, label, style }) {
  if (src) {
    return <img src={src} alt={alt || label || ''} style={style} />
  }
  return (
    <div className="asset" style={style}>
      {label}
    </div>
  )
}
