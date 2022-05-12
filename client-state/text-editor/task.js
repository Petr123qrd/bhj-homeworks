const editor = document.getElementById('editor');

pasteText();

function onEditor() {
    localStorage.text = editor.value;
};

function onClear() {
    editor.value = '';
    localStorage.removeItem('text');
};

function pasteText() {
    if (localStorage.text) {
        editor.value = localStorage.getItem('text');
    };
};

editor.addEventListener('input', onEditor);