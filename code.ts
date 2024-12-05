// code.ts
figma.showUI(__html__, { width: 300, height: 400 });

// Listen for messages from the UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < 3; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  // Uncomment this if you want to close the plugin when a message is received
  // figma.closePlugin();
};