const rawSections = [
  {
    id: 'layout',
    title: 'Layout',
    lead: 'Vue.js does not provide layout functionality by default. NightVue combines a dynamic component with route meta fields and Vue Router transitions to build a small, extensible layout system.',
    blurb: 'Dynamic router layouts with header, main, footer and page transitions.',
  },
  {
    id: 'grid',
    title: 'Grid',
    lead: 'A responsive flexbox grid built from containers, rows and columns. Use ready-made class names or construct the same layout with Sass mixins.',
    blurb: 'Twelve columns, five breakpoints, containers, offsets and ordering.',
  },
  {
    id: 'typography',
    title: 'Typography',
    lead: 'Displays, headings, body copy, small text and taglines all come from Sass maps. The same maps generate a full set of responsive text utilities.',
    blurb: 'Fonts, headings, displays, body styles and generated text utilities.',
  },
  {
    id: 'position',
    title: 'Position',
    lead: 'Utilities to change the position property and to place elements with top, right, bottom and left offsets.',
    blurb: 'Position values and absolute or fixed offsets, responsive per breakpoint.',
  },
  {
    id: 'display',
    title: 'Display',
    lead: 'Display and flexbox helpers for direction, justification, alignment, wrapping, expanding and centering. Every utility supports breakpoints.',
    blurb: 'Display values and a full suite of responsive flexbox utilities.',
  },
  {
    id: 'spacing',
    title: 'Spacing',
    lead: 'One spacing scale from 0 to 5rem, available as margin and padding classes, as absolute offsets and through the spacer() Sass function.',
    blurb: 'Margin and padding classes, absolute offsets and the spacer() function.',
  },
  {
    id: 'sizing',
    title: 'Sizing',
    lead: 'Width, max-width, min-width, height, max-height and min-height in percentages, viewport width and viewport height — including auto values.',
    blurb: 'Width and height utilities in %, vw and vh with responsive variants.',
  },
  {
    id: 'colors',
    title: 'Colors',
    lead: 'Base colors, a gray ramp and semantically named theme colors. NightVue generates background, text and fill classes, plus light, dark, saturated, desaturated and translucent variants.',
    blurb: 'Semantic palette, gray ramp, generated levels and rgba helpers.',
  },
  {
    id: 'gradients',
    title: 'Gradients',
    lead: 'Named linear gradients stored in a Sass map and generated as classes. The linear-gradient() mixin applies the same gradient inside SCSS files.',
    blurb: 'Named gradients as classes and through the linear-gradient() mixin.',
  },
  {
    id: 'opacity',
    title: 'Opacity',
    lead: 'Eleven opacity steps from 0 to 0.95, generated as utility classes with breakpoint variants and backed by the opacity() Sass function.',
    blurb: 'Eleven opacity steps, responsive classes and the opacity() function.',
  },
  {
    id: 'icons',
    title: 'Icons',
    lead: 'SVG icons are loaded with svg-sprite-loader and rendered through the SvgIcon component. Sizes come from the $icon-sizes map and can be overridden with any class.',
    blurb: 'SVG sprite icons, seven sizes and the icon-size() mixin.',
  },
  {
    id: 'radius',
    title: 'Radius',
    lead: 'Five border-radius values applied to all corners, a single corner or a pair of sides. Each direction also supports breakpoints.',
    blurb: 'Rounded corners for every side, corner and breakpoint.',
  },
  {
    id: 'shadows',
    title: 'Shadows',
    lead: 'Five Material-inspired elevations stored in the $shadows map, generated as classes and available through the shadow() function.',
    blurb: 'Five elevation levels as classes and via the shadow() function.',
  },
  {
    id: 'zindex',
    title: 'Z-index',
    lead: 'A universal z-index scale from -1 to 12 for positioning elements on the Z axis. Every level supports breakpoints.',
    blurb: 'A universal z-index scale from -1 to 12 with responsive variants.',
  },
  {
    id: 'transitions',
    title: 'Transitions',
    lead: 'Speed and easing tokens collected in two maps, generated as classes and assembled into transitions with transition() and complex-transition() functions.',
    blurb: 'Speed and easing tokens, utility classes and SCSS transition functions.',
  },
  {
    id: 'animations',
    title: 'Animations',
    lead: 'The animation() mixin turns a name, duration, easing and behaviour into a complete CSS animation shorthand. Two keyframes, fade-in and spin, are included.',
    blurb: 'An animation() mixin with speed, easing and playback controls.',
  },
  {
    id: 'rotations',
    title: 'Rotations',
    lead: 'Common rotation angles from -270° to 360°, generated as ready-made classes for transforms.',
    blurb: 'Ready-made rotate classes for the angles you need most.',
  },
  {
    id: 'utilities',
    title: 'Utilities',
    lead: 'The small helpers that do not fit anywhere else: cursors, selection, overflow, pointer events and visibility.',
    blurb: 'Cursors, selection, overflow, pointer events and visibility helpers.',
  },
]

const sections = rawSections.map((section, index) => ({
  ...section,
  index: String(index + 1).padStart(2, '0'),
}))

export const getSection = id => sections.find(section => section.id === id)

export default sections
