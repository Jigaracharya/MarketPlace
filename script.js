const modal = document.getElementById('imageModal');
const modalImage = modal.querySelector('.image-modal-image');
const closeButton = modal.querySelector('.image-modal-close');

if (modal && modalImage && closeButton) {
  const openModal = (image) => {
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.main-image').forEach((image) => {
    image.addEventListener('click', () => openModal(image));
  });

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card) => {
  const mainImage = card.querySelector('.main-image');
  const thumbs = card.querySelectorAll('.thumb');

  if (!mainImage || thumbs.length === 0) {
    return;
  }

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const imageSrc = thumb.dataset.image;
      if (!imageSrc) return;

      mainImage.src = imageSrc;
      mainImage.alt = thumb.querySelector('img')?.alt || mainImage.alt;

      thumbs.forEach((item) => item.classList.toggle('active', item === thumb));
    });
  });
});
