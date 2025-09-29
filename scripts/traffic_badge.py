import json, sys, pathlib

def svg_badge(label, value, color="#4c1"):
    label_w = 70
    val_w = max(60, 8 * len(str(value)) + 16)
    total_w = label_w + val_w
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{total_w}" height="20" role="img" aria-label="{label}: {value}">
  <linearGradient id="g" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="m"><rect width="{total_w}" height="20" rx="3" fill="#fff"/></mask>
  <g mask="url(#m)">
    <rect width="{label_w}" height="20" fill="#555"/>
    <rect x="{label_w}" width="{val_w}" height="20" fill="{color}"/>
    <rect width="{total_w}" height="20" fill="url(#g)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11">
    <text x="{label_w/2}" y="15">{label}</text>
    <text x="{label_w + val_w/2}" y="15">{value}</text>
  </g>
</svg>'''

def main(in_json, out_svg):
    data = json.loads(pathlib.Path(in_json).read_text(encoding="utf-8"))
    # GitHub traffic/views payload has "count", "uniques" (last 14 days)
    uniques = data.get("uniques", 0)
    svg = svg_badge("14d views", uniques, "#2ea44f")
    out = pathlib.Path(out_svg)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(svg, encoding="utf-8")
    print(f"Wrote {out} (uniques={uniques})")

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])