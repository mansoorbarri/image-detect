document.getElementById('browseFilesBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'No file chosen';
    document.getElementById('fileName').textContent = fileName;
});