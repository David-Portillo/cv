module.exports = {
  entryPoints: ["./src"],
  entryPointStrategy: "expand",
  tsconfig: "tsconfig.json",
  out: "./docs",
  exclude: [
    "**/*test.tsx",
    "**/*testData.tsx",
    "**/*fileMock.ts",
    "**/*App.tsx",
    "**/*Portal.tsx",
  ],
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  validation: {
    notExported: false,
    invalidLink: false,
    notDocumented: false,
  },
  readme: "README.md",
  name: "edocs-reboot",
  plugin: "none",
};
