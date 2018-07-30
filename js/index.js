const items = Array.prototype.slice.call(document.querySelectorAll('.yummy__item'));
items.forEach((item) => {
    const checkbox = item.querySelector('input[type=checkbox]');
    const buy = item.querySelector('.yummy__item-description');
    const card = item.querySelector('.yummy__label');
    
    const handlerSatusProduct = () => {
        if (!checkbox.hasAttribute('checked')) {
          checkbox.setAttribute('checked', true);
          item.classList.add('yummy_item--selected');
        } else {
          checkbox.removeAttribute('checked');
          item.classList.remove('yummy_item--selected');
        }
      };

      if (checkbox.hasAttribute('disabled')) {
        card.classList.add('yummy__label--disabled');
        item.classList.add('yummy_item--disabled');
        buy.innerHTML = item.dataset.disabled;
      }
    
    });