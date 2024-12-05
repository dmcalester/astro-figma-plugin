figma.showUI(__html__, { width: 400, height: 600 });

// Handle messages from the UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === "generate-errors") {
    const nodes: SceneNode[] = [];
    const text = figma.createText();
    text.characters = msg.errorList;

    // Set font
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    text.fontSize = 14;
    text.lineHeight = { value: 20, unit: "PIXELS" };

    nodes.push(text);
    figma.currentPage.appendChild(text);
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
};
