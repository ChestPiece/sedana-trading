# Sedana Trading — style lock

**Direction:** Industrial Atlas  
**Mode:** light  
**Mood:** premium / technical industrial B2B

## Color contract

| Role | Hex | Notes |
|------|-----|-------|
| primary / navy | `#0B1F4D` | headings, primary CTAs, dark bands |
| navy-2 | `#13294F` | elevated navy surfaces |
| accent | `#C8102E` | active location / critical highlight only |
| surface | `#F2F3F5` | section bands |
| surface-2 | `#E9EBEF` | hairlines, rules |
| ink | `#1A1A1A` | body on white |
| ink-2 | `#22314F` | secondary body |
| muted | `#9AA0A8` | mono labels |
| white | `#FFFFFF` | canvas |

**Text-safe:** ink/ink-2 on white/surface; white on navy; accent on white for labels only.  
**Accent rule:** never as large fill backgrounds; pin active state + mono labels.

## Typography

- Display / UI: IBM Plex Sans (400–700)
- Meta / captions: IBM Plex Mono (400–500)
- No Inter / Geist / italic display

## Shape

- Radius: 2px frames, 4px controls
- Borders: full perimeter hairlines `navy/15`–`navy/20`
- No soft card shadows; elevation via border + surface shift

## Spacing

- Section connective: `py-20 md:py-24`
- Section pivotal: `py-24 md:py-32`
- Container: `container-site` max 1280px

## Motion

- Ease: `cubic-bezier(0.32, 0.72, 0, 1)`
- GSAP reveals + ScrollTrigger; honor `prefers-reduced-motion`
- Hero: full-bleed photo + navy wash; ken-burns scale + copy stagger on load
- Gallery: uniform 3-col cards (4:3) with always-on navy caption bar
- Nav: fixed, transparent over hero (`onDark`), solid white after scroll; section underline via IntersectionObserver

## Assets

- Logo: `/assets/logo/sedana-logo.png`
- Photography: `/assets/photos/*`
- Brand strip: `/assets/brands/*`
- Hero bg: `/assets/photos/hero-showroom.png`
