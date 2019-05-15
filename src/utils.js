
window.openInNewWindow = (msg)=>{

	window.open(`${msg}`,msg,'width=720,height=380');
};

window.openInNewTab = function openInNewTab(url) {

  var win = window.open(url, '_blank');
  win.focus();
	return 'opening "'+url+'"';
};

window.getCaretPosition = function getCaretPosition(editableDiv) {
  var caretPos = 0,
    sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == editableDiv) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() == editableDiv) {
      var tempEl = document.createElement("span");
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      var tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
};

window.setEndOfContenteditable = function setEndOfContenteditable(contentEditableElement){
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    {
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
};




window.Terminal = {
	running:false,
	keyup:(evt)=>{


		let textarea= evt.target.children[0];
		//console.log(textarea.innerText.split('\n')[textarea.innerText.split('\n').length-1])
		//console.log(textarea.innerText.split('\n')[textarea.innerText.split('\n').length-1].length)


		if (evt.ctrlKey)
		if (evt.key=="a"){
			evt.preventDefault();
		}

			if (evt.key=="ArrowUp"){
				evt.preventDefault();
				if (lastIndex<0)
					lastIndex=0;

				textarea.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;${last[last.length-1-(lastIndex++)||0]||last[0]}</i></span>`;

			}
			if (evt.key=="ArrowDown"){
				evt.preventDefault();
				if (lastIndex>last.length-1)
				lastIndex=last.length-1;
				textarea.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;${last[last.length-(lastIndex--)||last.length-1]||last[last.length-1]}</i></span>`;

			}

		if (getCaretPosition(textarea)<1){
			if (evt.key=="ArrowLeft"){
				evt.preventDefault();
			}
			if (evt.key=="Backspace"){
			//	evt.preventDefault();
			}

		}

		if(textarea.innerText.split('\n')[textarea.innerText.split('\n').length-1].length<29){

			if (evt.key=="Backspace"){
				evt.preventDefault();
				//evt.target.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,0.25);" ><i style="color:rgba(255,255,255,0.5)" contenteditable="false">${directory}&nbsp;yarn start</i></span><span id="blinking-cursor" contenteditable="false">_</span>`;
		}
	}

		//if (Terminal.running)
		//							evt.preventDefault();

		if (evt.key=="Enter"){
			Terminal.running=true;
			evt.preventDefault();
			writeToConsole(evt);

		}

	}
};
