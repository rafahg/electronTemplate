const { contextBridge } = require("electron");

// This is used to expose things we need from node in renderer without opening the renderer to a
// node integration.
contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});
