import { defineConfig } from "rollup";
import axios from "axios";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/SendOtp.ts",
  output: {
    dir: "dist",
    format: "es",
    
  },
  external:[axios],
  plugins: [typescript({
    tsconfig:"tsconfig.json"
  })],
  external: ['axios'] 
});