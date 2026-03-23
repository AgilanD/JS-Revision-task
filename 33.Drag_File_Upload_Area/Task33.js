const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');
const placeholderIcon = 'file-placeholder.jpg';

dropArea.addEventListener('dragover', () => {
  dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('drag-over');
});


function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

dropArea.addEventListener('dragover', preventDefaults);
dropArea.addEventListener('dragenter', preventDefaults);
dropArea.addEventListener('dragleave', preventDefaults);

dropArea.addEventListener('drop', handleDrop);

function handleDrop(e) {
  e.preventDefault();

  const files = e.dataTransfer.files;

  if (files.length) {
    fileInput.files = files;

    handleFiles(files);
  }
}

function handleFiles(files) {
  for (const file of files) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      const preview = document.createElement('img');

      if (isValidFileType(file)) {
        preview.src = e.target.result;
      }

      preview.classList.add('preview-image');
      const previewContainer = document.getElementById('preview-container');
      previewContainer.appendChild(preview);
    };
  }
}

function isValidFileType(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  return allowedTypes.includes(file.type);
}