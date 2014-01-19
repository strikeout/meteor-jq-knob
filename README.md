jQuery-Knob repackaged for Meteor
-------

[jQuery-Knob](https://github.com/aterrien/jQuery-Knob) is a nice, downward-compatible,
touchable, jQuery dial control. Demo at <http://anthonyterrien.com/knob/>.

Just use it as you normally would, but inside your `Template.rendered()` Meteor method:


```html
<template name="my_cool_dashboard">
    <input type="text" class="dial" data-min="-50" data-max="50">
</template>
```


```js
Template.my_cool_dashboard.rendered = function() {
   // init. 
   $(".dial").knob({
     'stepsize': 0.1
   });
}
```



Options
-------

Options are provided as attributes 'data-option':

    <input type="text" class="dial" data-min="-50" data-max="50">

... or in the "knob()" call :

    $(".dial").knob({
                    'min':-50
                    ,'max':50
                    });

The following options are supported:

Behaviors:
* min : min value | default=0.
* max : max value | default=100.
* step : step size | default=1.
* angleOffset : starting angle in degrees | default=0.
* angleArc : arc size in degrees | default=360.
* stopper : stop at min & max on keydown/mousewheel | default=true.
* readOnly : disable input and events | default=false.

UI:
* cursor : display mode "cursor", cursor size could be changed passing a numeric value to the option, default width is used when passing boolean value "true" | default=gauge.
* thickness : gauge thickness.
* lineCap : gauge stroke endings. | default=butt, round=rounded line endings
* width : dial width.
* displayInput : default=true | false=hide input.
* displayPrevious : default=false | true=displays the previous value with transparency.
* fgColor : foreground color.
* inputColor : input value (number) color.
* font : font family.
* fontWeight : font weight.
* bgColor : background color.
