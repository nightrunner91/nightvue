export const codeExamples = {

colors: {
colorsMap: `
$colors: (
  'red':       #F44336,
  'pink':      #EC407A,
  'orange':    #FF9800,
  'yellow':    #FFEE58,
  'green':     #47b05b,
  'brown':     #795548,
  'teal':      #009688,
  'cyan':      #00BCD4,
  'blue':      #2196F3,
  'purple':    #682CAB
);
`,

graysMap: `
$grays: (
  'white':     #ffffff,
  'gray-1':    #eaeaea,
  'gray-2':    #d5d5d5,
  'gray-3':    #bfbfbf,
  'gray-4':    #aaaaaa,
  'gray-5':    #959595,
  'gray-6':    #cccccc,
  'gray-7':    #6a6a6a,
  'gray-8':    #555555,
  'gray-9':    #404040,
  'gray-10':   #2b2b2b,
  'black':     #000000
);
`,

colorLevels: `
$levels: (
  1: 10%,
  2: 15%,
  3: 20%,
  4: 25%,
  5: 30%,
);
`,

themeColorsMap: `
$theme-colors: (
  'primary':    map-get($colors, 'purple'),
  'secondary':  map-get($colors, 'blue'),
  'success':    map-get($colors, 'green'),
  'info':       map-get($colors, 'teal'),
  'warning':    map-get($colors, 'yellow'),
  'danger':     map-get($colors, 'red'),
  'light':      map-get($shades, 'gray-2'),
  'dark':       map-get($shades, 'gray-8'),
);
`,

defaultColorsMethods: `
<!-- Окрасит фон одного блока в красный цвет, другой — осветлённый на 2 уровня -->
<div class="bg-red"></div>
<div class="bg-red-light-3"></div>

<!-- Цвета темы также поддерживают этот синтаксис -->
<div class="bg-primary"></div>
<div class="bg-primary-dark-5"></div>

<!-- Применит различные цвета к тексту -->
<span class="clr-white">Я белый текст</span>
<span class="clr-danger">Я цвет 'danger' из $theme-colors</span>
<span class="clr-gray-5">Я серый текст #5</span>

<!-- Эта SVG иконка будет залита вторичным (secondary) цветом темы -->
<svg class="fill-secondary">
  <use xlink:href="#icon" />
</svg>

<!-- Эти блоки залиты различными оттенками серого -->
<div class="bg-gray-1"></div>
<div class="bg-gray-2"></div>
<div class="bg-gray-3"></div>
...
<div class="bg-gray-9"></div>
<div class="bg-gray-10"></div>
`,

classnamesVsSass: `
<!-- Лучше делать так ✔ -->
<div class="bg-success text-white">
  Здесь белый текст на зелёном фоне
</div>

<!-- Чем так ✖ -->
<div class="classname">
  Здесь белый текст на зелёном фоне
</div>

.classname {
  background-color: map-get($theme-colors, 'success');
  color: map-get($grays, 'white');
}
`,

colorFunction: `
// Функция вернёт основной (primary) цвет темы
.selector {
  box-shadow: 1px 1px 4px color('primary');
}

// Функция вернёт осветлённый на 4 уровня коричневый цвет
.selector {
  border-color: color('brown', light, 4);
}

// Функция вернёт серый цвет уровня #6 в ахроматическом ряду
.selector {
  text-decoration: underline;
  text-decoration-color: color('gray-6');
}

// Применит к классу вторичный (secondary) цвет темы, который при :hover станет светлее на 2 уровня
.selector {
  background-color: color('secondary');
  color: color('white');

  &:hover {
    background-color: color('secondary', light, 2);
  }
}
`,

sassMaps: `
// Применит к селектору оранжевый фон и вторичный 'secondary' цвет текста
.selector {
  background-color: map-get($colors, 'orange');
  color: map-get($theme-colors, 'secondary');
}

// Применит к селектору осветлённый на 2 уровня фон ошибки 'danger'
.selector {
  background-color: lighten(map-get($theme-colors, 'danger'), map-get($levels, 2));
}
`,
}

}
