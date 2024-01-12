$(document).ready(function () {
    $('#addTaskForm').submit(function (event) {
        event.preventDefault();

        $.post('/add_task', $(this).serialize(), function () {
            location.reload();
        });
    });
});

