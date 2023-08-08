const unsecuredCopyToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
};

export const copyToClipboard = (content: string): void => {
  if (!navigator.clipboard) {
    // eslint-disable-next-line no-console
    console.warn('Clipboard API not available, falling back to insecure copy to clipboard');
    unsecuredCopyToClipboard(content);
    return;
  }

  navigator.clipboard.writeText(content).catch(() => {
    // eslint-disable-next-line no-console
    console.warn('Unable to copy to clipboard, falling back to insecure copy to clipboard');
    unsecuredCopyToClipboard(content);
  });
};
