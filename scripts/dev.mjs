// Dev-server launcher that tolerates every common invocation style:
//   npm run dev -- --port 7100 --hostname 0.0.0.0   (args after "--")
//   npm run dev --port 7100                          (npm → npm_config_* env + bare positional)
//   npm run dev 7100                                 (bare positional port)
//   PORT=7100 npm run dev                            (environment)
import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const rawArgs = process.argv.slice(2);

const isPort = (v) => typeof v === "string" && /^\d+$/.test(v) && Number(v) > 0 && Number(v) < 65536;

let port;
let hostname;
const passthrough = [];

for (let i = 0; i < rawArgs.length; i++) {
  const a = rawArgs[i];
  if (a === "--port" || a === "-p") {
    const v = rawArgs[++i];
    if (isPort(v)) port = v;
  } else if (a.startsWith("--port=") || a.startsWith("-p=")) {
    const v = a.split("=")[1];
    if (isPort(v)) port = v;
  } else if (a === "--hostname" || a === "-H" || a === "--host") {
    const v = rawArgs[++i];
    if (v) hostname = v;
  } else if (a.startsWith("--hostname=") || a.startsWith("--host=")) {
    hostname = a.split("=")[1];
  } else if (isPort(a) && port === undefined) {
    port = a; // bare positional number → port
  } else {
    passthrough.push(a);
  }
}

if (!port && isPort(process.env.PORT)) port = process.env.PORT;
if (!port && isPort(process.env.npm_config_port)) port = process.env.npm_config_port;
if (!hostname && process.env.npm_config_hostname && process.env.npm_config_hostname !== "true") {
  hostname = process.env.npm_config_hostname;
}

const nextArgs = ["dev", ...passthrough];
if (port) nextArgs.push("--port", port);
if (hostname) nextArgs.push("--hostname", hostname);

const nextBin = join(root, "node_modules", ".bin", "next");
const child = spawn(nextBin, nextArgs, { cwd: root, stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 0));
process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
