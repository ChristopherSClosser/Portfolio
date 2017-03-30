

<script src="script/routes.js">

</script>








$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}
IIFE parens on the outside
use let more than var in this case var is necesary
(function goober(module) {
 var steven = {};
 var judy = [];
 var tracey = [];
 var david ={};
 module.david = david;
}(window));
function showDivs(n) {
  // $('#slides > img:gt(0)').hide();
  // setInterval(function() {
  //   $('#slides > img:first')
  //   .fadeOut(500)
  //   .next()
  //   .fadeIn(500)
  //   .end()
  //   .appendTo('#slides');
  // },3000);
  var i;
  var $x = $('.mySlides');
  var $dots = $('.demo');
  if (n > $x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = $x.length;
  }
  // $('.left').on('click', function(){
  //   plusDivs(-1);
  // });
  // $('.right').on('click', function(){
  //   plusDivs(1);
  // });
  // $('.left').on('click', function(){
  //   plusDivs(-1);
  // });
  // $('#badge1').on('click', function(){
  //   currentDiv(1);
  // });
  // $('#badge2').on('click', function(){
  //   currentDiv(2);
  // });
  // $('#badge3').on('click', function(){
  //   currentDiv(3);
  // });
  for (i = 0; i < $x.length; i++) {
    $x[i].style.display = 'none';
    console.log('-------------', slideIndex);
  }
  for (var x = 0; x < $dots.length; x++) {
    $dots[x].className = $dots[x].className.replace(' white', '');
  }
  $x[slideIndex - 1].style.display = 'block';
  $dots[slideIndex - 1].className += ' white';
}
function slideSwitch() {
  var $active = $('div#slideshow img.active');
  var $next = $active.next();

  $next.addClass('active');

  $active.removeClass('active');
}

$(function() {
  setInterval( 'slideSwitch()', 5000 );
});



*, *:before, *:after {
  box-sizing: inherit;
}
.container:after, .container:before, .panel:after, .panel:before, .row:after, .row:before, .row-padding:after, .row-padding:before, .cell-row:before, .cell-row:after, .clear:after, .clear:before, .bar:before, .bar:after {
  content: "";
  display: table;
  clear: both;
}
.display-bottommiddle {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,0%);
  -ms-transform: translate(-50%,0%);
}
.container {
  padding: 0.01em 16px;
}
.large {
  font-size: 18px!important;
}
.center {
  text-align: center!important;
  width: 91%;
}
.margin-top, .section, .code {
  margin-top: 16px!important;
}
.margin-bottom, .section, .code {
  margin-bottom: 16px!important;
}
.text-white, .hover-text-white:hover {
  color: #fff!important;
}
.tooltip, .display-container {
  position: relative;
}
.badge, .tag {
  background-color: #000;
  color: #fff;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
}
.transparent {
  background-color: transparent!important;
}
.white, .hover-white:hover {
  color: #000!important;
  background-color: #fff!important;
}
.left, .right, .badge{
  cursor: pointer;
}
.badge{
  height: 13px;
  width: 13px;
  padding:0;
  border: 1px solid white;
  border-radius: 50%;
}
.right {
  float: right!important;
}
.left {
  float: left!important;
}

Article.numWordsAll = () => {
    return Article.all.map(function(textbody){
      return textbody.body.split(' ').length;
    }).reduce(function(acc, val){
      return acc + val;
    })
  };
  (function(acc, val) {
    if (acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);


          <!-- <span class="center container section large text-white display-bottommiddle">
            <div class="left hover-text-khaki">&#10094;</div>
            <div class="right hover-text-khaki">&#10095;</div>
            <span id="badge1" class="badge demo border transparent hover-white"></span>
            <span id="badge2" class="badge demo border transparent hover-white"></span>
            <span id="badge3" class="badge demo border transparent hover-white"></span>
          </span>
       -->

       //github ajax request
       $.ajax({
       	url: 'https://api.github.com/user/repos',
       	method: 'GET',
       	headers: {
       		Authorization: 'token c9399297a86522d18293484ecff456a3168a564b'
       	}
       }).then(console.log)
