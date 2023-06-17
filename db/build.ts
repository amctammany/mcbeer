import { build } from "esbuild";
//import { pnpplugin } from "@yarnpkg/esbuild-plugin-pnp";
//import envfileplugin from "esbuild-envfile-plugin";
//import graphqlloaderplugin from "@luckycatfactory/esbuild-graphql-loader";

const extensions = [".ts", ".js", ".graphql"];
async function buildserver() {
  await build({
    //entrypoints: ["build/src/index.js"],
    entryPoints: ["./src/index.ts"],
    outfile: "dist/server.js",
    platform: "node",
    external: ["nock", "aws-sdk", "mock-aws-s3"],
    define: { "process.env.node_env": '"production"' },
    bundle: true,
    target: "node19",
    loader: {
      ".ts": "ts",
      ".graphql": "text",
    },
    //plugins: [envfileplugin, pnpplugin({ extensions }), graphqlloaderplugin()],
  });
}

buildserver();
