
var widget = document.getElementById('widget');
/*widget.addEventListener('click',on_click_widget ,false);*/
	

var child = document.createElement('div');

child.innerHTML = '<form><input type="text" /></form>';
child.style = 'display: none; '
widget.appendChild(child);


var MaxWidthWidget = widget.getAttribute('max_width');
var MinWidthWidget = widget.getAttribute('min_width');
style = 'align: center; overflow: hidden;';
styleChild = 'padding: 2%; width: 96%; height: 100%; '

try{if(widget.hasAttribute('fix')){style = style + 'position: fixed;'}}catch(e){consol.log(e);}
try{if(widget.hasAttribute('right')){style = style + 'right: 10px;'}}catch(e){consol.log(e);}
try{if(widget.hasAttribute('left')){ style = style + 'left: 10px;'}}catch(e){consol.log(e);}
try{if(widget.hasAttribute('top')){style = style + 'top: 10px;'}}catch(e){consol.log(e);}
try{if(widget.hasAttribute('bottom')){ style = style + 'bottom: 0px;'}}catch(e){consol.log(e);}

set_style(widget, MinWidthWidget, MinWidthWidget, MinWidthWidget/2, style+"margin-bottom: 10px");	

/*function main(){
	if(widget.textContent == 'H'){widget.textContent = "E";}
	else{widget.textContent = 'H';}
}

setInterval( main, 500);*/

var window_click = 0;
var widget_click = 0;
widget.onclick = function click_widet(evet){ widget_click = 1;}
window.onclick = function on_click(event){	
if((widget.getAttribute('event')=='none')&&(widget_click == 1)){
		widget.setAttribute('event', 'click');
		set_style(widget, MaxWidthWidget, MaxWidthWidget*1.5,0, style);
		child.style = styleChild  	+'display: block; '
		widget_click = 0;
	}else if((widget.getAttribute('event')=='click')&&(widget_click == 0)){
		set_style(widget, MinWidthWidget, MinWidthWidget, MinWidthWidget/2, style+"margin-bottom: 10px");
		widget.setAttribute('event', 'none');
		child.style = styleChild + 'display: none; '
	}
	widget_click = 0;
}
function set_style(element, width, height, radius, free=''){element.style=" width: "+width+"px; height: "+height+"px; background-color: #8d58b8; transition: .2s ease-in-out; border-radius: "+radius+"px;"+free;}


