const unsecuredCopyToClipboard = (text: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea)
};

export const copyToClipboard = (content: string): void => {
  if (!navigator.clipboard) {
    console.warn('Clipboard API not available, falling back to insecure copy to clipboard');
    unsecuredCopyToClipboard(content);
    return;
  }

  navigator
    .clipboard
    .writeText(content)
    .catch(() => {
      console.warn('Unable to copy to clipboard, falling back to insecure copy to clipboard');
      unsecuredCopyToClipboard(content);
    });
};
