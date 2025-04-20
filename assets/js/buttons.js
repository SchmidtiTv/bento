const generateButtons = (containerEl, buttons) => {
  if (!buttons?.length) return;
  const html = buttons
    .map(
      ({ link, id, icon }) => `
      <a
        href="${link}"
        ${CONFIG.openInNewTab ? 'target="_blank"' : ''}
        class="card button button__${id}"
      >
        <i class="buttonIcon" icon-name="${icon}"></i>
      </a>
    `
    )
    .join('');

  // One DOM insertion instead of N
  containerEl.insertAdjacentHTML('beforeend', html);
};

const generateAllButtons = () => {
  const { bentoLayout, firstButtonsContainer, secondButtonsContainer } = CONFIG;

  // If bento or buttons layout, build the first row
  if (['bento', 'buttons'].includes(bentoLayout)) {
    generateButtons(buttons_1, firstButtonsContainer);
  }

  // Only for full “buttons” layout, also build the second row
  if (bentoLayout === 'buttons') {
    generateButtons(buttons_2, secondButtonsContainer);
  }
};

generateAllButtons();
