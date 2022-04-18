export const codeExamples = {

  colors: {
    defaultColors:
`
$colors: (
  'black':     #000000,
  'white':     #FFFFFF,

  'red':       #F44336,
  'pink':      #EC407A,
  'orange':    #FF9800,
  'yellow':    #FFEE58,
  'green':     #00B154,
  'brown':     #795548,
  'teal':      #009688,
  'cyan':      #00BCD4,
  'blue':      #2196F3,
  'purple':    #682CAB,
);
`,

    colorLevels:
`
$levels: (
  1: 10%,
  2: 15%,
  3: 20%,
  4: 25%,
  5: 30%,
);
`,

    defaultColorsMethods: `
<!-- Окрасит фон блока в красный цвет -->
<div class="bg-red"></div>

<!-- Окрасит фон блока в основной (primary) цвет -->
<div class="bg-primary"></div>

<!-- Окрасит фон блока в жёлтый цвет, осветлённый на 3 уровня -->
<div class="bg-yellow-light-3"></div>

<!-- Цвета темы также поддерживают этот синтаксис -->
<div class="bg-primary-dark-5"></div>

<!-- Данный текст будет белого цвета -->
<span class="clr-white">Я белый текст</span>

<!-- Эта SVG иконка будет залита вторичным (secondary) цветом темы -->
<svg class="fill-secondary">
  <use xlink:href="#icon" />
</svg>
`,

    monochromeColorsMethods: `
<!-- Эти блоки залиты различными оттенками серого -->
<div class="bg-shade-1"></div>
<div class="bg-shade-2"></div>
<div class="bg-shade-3"></div>
...
<div class="bg-shade-21"></div>
<div class="bg-shade-22"></div>

<!-- Такая же логика применима к цвету текста... -->
<span class="clr-shade-15">Я серый текст #15</span>

<!-- ...и к цвету заливки SVG -->
<svg class="fill-shade-15">
  <use xlink:href="#icon" />
</svg>
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
  color: map-get($colors, 'white');
}
`,

    sassMixins: `
.selector {
  // Добавит селектору синий цвет фона и зелёный цвет текста
  @include background('blue');
  @include color('green');
}

.selector {
  // Добавит селектору осветленный на три уровня синий цвет фона
  // и затемнённый на 5 уровней зелёный цвет текста
  @include background('blue', light, 3);
  @include color('green', dark, 5);
}

.selector {
  // Добавит селектору основной цвет фона...
  @include background('primary');

  &:hover {
    // ...который при наведении станет темнее на два уровня
    @include background('primary', dark, 2);
  }
}

.svg-icon {
  // Иконка по умолчанию залита серым цветом 4 уровня...
  @include fill('shade', 4);

  &:hover {
    // ...которая при наведении становится залитой серым цветом 8 уровня...
    @include fill('shade', 8);
  }

  &--selected {
    // ...а с модификатором --selected окрашивается в цвет "success" темы
    @include fill('success');
  }
}
`,

  }

}
