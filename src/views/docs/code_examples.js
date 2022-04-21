export const codeExamples = {

colors: {

defaultColors: `
$colors: (
  'black':     #000000,
  'white':     #FFFFFF,

  'red':       #F44336,
  'pink':      #EC407A,
  'orange':    #FF9800,
  'yellow':    #FFEE58,
  'green':     #47b05b,
  'brown':     #795548,
  'teal':      #009688,
  'cyan':      #00BCD4,
  'blue':      #2196F3,
  'purple':    #682CAB,
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
  @include fill('shade', $rate: 4);

  &:hover {
    // ...которая при наведении становится залитой серым цветом 8 уровня...
    @include fill('shade', $rate: 8);
  }

  &--selected {
    // ...а с модификатором --selected окрашивается в цвет "success" темы
    @include fill('success');
  }
}
`,

colorFunction: `
// Функция вернёт основной (primary) цвет темы
.selector {
  box-shadow: 1px 1px 4px color('primary'); // box-shadow: 1px 1px 4px #682CAB;
}

// Функция вернёт осветлённый на 4 уровня коричневый цвет
.selector {
  border-color: color('brown', light, 4); // border-color: #9b8076;
}

// Функция вернёт шестой цвет в ахроматическом ряду
.selector {
  text-decoration: underline;
  text-decoration-color: color('shade', $rate: 6); // text-decoration-color: #bfbfbf;
}
`,

sassMaps: `
.selector {
  // Применит к селектору оранжевый фон и вторичный 'secondary' цвет текста
  background-color: map-get($colors, 'orange');
  color: map-get($theme-colors, 'secondary');
}

.selector {
  // Применит к селектору осветлённый на 2 уровня фон ошибки 'danger'
  background-color: lighten(map-get($theme-colors, 'danger'), map-get($levels, 2));
}

.selector {
  // Применит 5 уровень серого цвета из ряда ахроматических цветов
  // В переменную $percent поместим высчитанный на основе переменной $shades уровень затемнения
  $percent: 100 / ($shades + 2) * 5 * 1%;

  // Затем применим модуль Sass darken() для затемнения белого цвета на указанный процент
  // Альтернативой darken() может служить mix(black, $color)
  background-color: darken(map-get($colors, 'white'), $percent)
}
`,

}
}
