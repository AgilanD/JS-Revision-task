  const search = document.getElementById('searchBox');
  const Information = document.getElementById('content');
  const Text = content.innerHTML; 
  search.addEventListener('input', () => {
    const query = searchBox.value.trim();

    if (!query) {
      content.innerHTML = originalText;
      return;
    }

    const regvalue= query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  
    const reg = new RegExp(`(${query})`, 'gi');

    Information.innerHTML = Text.replace(reg, '<mark>$1</mark>');
  });