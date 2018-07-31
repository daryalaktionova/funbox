const items = Array.prototype.slice.call(document.querySelectorAll('.yummy__item'));
items.forEach((item) => {
    const checkbox = item.querySelector('input[type=checkbox]');
    const desc = item.querySelector('.yummy__item-description');
    const card = item.querySelector('.yummy__label');
    const caption = item.querySelector('.yummy__item-caption');

    const selectItems = () => {
        if ((!checkbox.hasAttribute('checked')) && (!checkbox.hasAttribute('disabled'))) {
          checkbox.setAttribute('checked', true);
          item.classList.add('yummy_item--selected');
          item.classList.add('selected');
          card.classList.add('yummy__label--selected');
          caption.removeAttribute('hidden');
          desc.setAttribute('hidden', true);
        } else {
          checkbox.removeAttribute('checked');
          item.classList.remove('yummy_item--selected');
          item.classList.remove('selected');
          item.classList.remove('selected-hover');
          card.classList.remove('yummy__label--selected');
          caption.setAttribute('hidden', true);
          desc.removeAttribute('hidden');
        }
      };

      if (checkbox.hasAttribute('disabled')) {
        card.classList.add('yummy__label--disabled');
        item.classList.add('yummy_item--disabled');
        desc.innerHTML = item.dataset.disabled;
      }
      checkbox.addEventListener('change', selectItems);
      card.addEventListener('click', selectItems);
      card.addEventListener('mouseleave', () => {
        if (checkbox.hasAttribute('checked')) {
          item.classList.add('selected-hover');
        } else {
          item.classList.remove('selected-hover');
        }
      });
    });