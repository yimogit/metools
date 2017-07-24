export default {
    'absolute-bottom': {
        inserted: function (el, binding) {
            el.style.position = 'fixed';
            el.style.bottom = binding.value;
        }
    },
    'keydown-tab':{
        inserted:function(el){
            var onkeydown = function(e){
                if(e.keyCode == 9){
                    e.preventDefault();
                    var start = this.selectionStart, end = this.selectionEnd;
                    var text = this.value;
                    var tab = '    ';
                    text = text.substr(0, start) + tab + text.substr(start);
                    this.value = text;
                    this.selectionStart = start + tab.length;
                    this.selectionEnd = end + tab.length;
                }
            }
            el.onkeydown = onkeydown;
        }
    }
}