
$(function () {
    var editor = ace.edit('editor')
    editor.setTheme('ace/theme/monokai')
    editor.$blockScrolling = Infinity

    var setRawData = function () {
        $.get('/filecontent', function (res) {
            editor.setValue(res.content)
            editor.getSession().setMode('ace/mode/' + res.fileType)
        })
    }

    setRawData()

    $('#save').click(function () {
        var newContent = editor.getValue()
        $.ajax({
            type: "POST",
            url: '/save',
            data: {
                data: newContent
            },
            success: function () {
                alert('Save Success!')
            },
            dataType: 'text'
        });
    })

    $('#revert').click(function () {
        setRawData()
    })
})