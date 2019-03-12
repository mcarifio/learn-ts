// import { hello } from './hello'; // node
// @ts-ignore
import { hello } from './hello.ts';

function main() {
    hello('mike is here');
}

// deno -D main.ts
if (import.meta.main) { main(); }
