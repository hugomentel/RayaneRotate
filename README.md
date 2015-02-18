RayaneRotate
==========

Plugin to add rotate function using jquery

how to use:

//HTML

```html
<div id="myDiv"></div>
```


//JAVASCRIPT
```html
$("#myDiv").rayaneRotate();
```
//CSS
```html
.rayanerotate-api-rotate-symbol{
    background-image: url('http://www.draw4free.com/help/icons/rotate.png'); //you just need to put the rotate image
}
```

P.S: You also can use this with options. 
e.g:

```html
$("#myDiv").rayaneRotate({align:'left'}); //also can be right and center

$("myDiv").rayaneRotate({updatableposition:true}); //default false. This can be used when the object #myDiv also uses draggable jquery.
```

Sample Online:

http://jsfiddle.net/8FmRd/575/



