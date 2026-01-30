export const printElement = (elementId) => {
    const content = document.getElementById(elementId);
    if (!content) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    // Write content to the iframe
    const doc = iframe.contentWindow.document;

    // Collect all styles from the main page
    // We grab:
    // 1. Linked stylesheets (Tailwind in production)
    // 2. Style tags (Tailwind/Vite in dev)
    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map(node => node.outerHTML)
        .join('');

    doc.open();
    doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Portfolio Export</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${styles}
        <style>
            /* Force full width/height in the print frame */
            body { margin: 0; padding: 0; background: white; }
            #root { width: 100%; }
            /* Ensure background colors print */
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        </style>
      </head>
      <body>
        ${content.outerHTML}
        <script>
            // Wait for styles/images to load slightly before printing
            window.onload = () => {
                setTimeout(() => {
                    window.print();
                    // Optional: remove iframe after printing, usually handled by caller or left hidden
                }, 500);
            };
        </script>
      </body>
    </html>
  `);
    doc.close();

    // Cleanup after a delay (enough for the print dialog to open)
    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 2000); // 2 seconds should be enough to trigger the dialog
};
