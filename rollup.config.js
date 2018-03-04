import resolve from "rollup-plugin-node-resolve";
import rollupTypescript from "rollup-plugin-typescript";

export default {
    input: "src/index.ts",
    output: {
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: true,
        name: "Bundle",
        globals: {}
    },
    plugins: [
        rollupTypescript({
            typescript: require("typescript")
        }),
        resolve()
    ]
};