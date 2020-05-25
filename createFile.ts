const encoder: TextEncoder = new TextEncoder();

const greetText = encoder.encode("Hello World\n my name is Sam");

await Deno.writeFile("greet.txt", greetText);

// must use --allow-write after deno run [permission] [file exec]
