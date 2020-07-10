<h1 align="center">
  <br>
  Flagging
  <br>
</h1>

<h4 align="center">A simple library to parse and process flags in JavaScript strings.</h4>

## Setup
Yarn: ``yarn add flagging``
NPM: ``npm i flagging``

## Example
```typescript
import * as flagging from "flagging";

let res = flagging.process("--verbose -scale 22 --method fast", {
    parseNumbers: true
})

// Returns:
{
    verbose: ["verbose"],
    scale: ["scale", 22],
    method: ["method", "fast"]
}
```

## Contributions
Contribute, steal, republish, I don't care! As long as my code gets some sort of use i'm happy.