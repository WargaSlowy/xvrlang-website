module.exports = (Prism) => {
  Prism.languages.xvr = Prism.languages.extend("clike", {
    comment: /\/\/.*/,
    string: {
      pattern: /"(?:\\.|[^"\\\r\n])*"/,
      greedy: true,
    },
    keyword: /\b(?:var|proc|return|if|else|for|while|break|continue)\b/,
    boolean: /\b(?:true|false|null)\b/,
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /[*\/%!=]=?|\+[=+]?|-[=-]?|:=|\.|\.\.\./,
    builtin: /\bprint\b/,
    type: /\b(?:string|int|bool|void)\b/,
  });

  // proc dan parameter
  Prism.languages.insertBefore("xvr", "function", {
    "proc-name": {
      pattern: /(\bproc\s+)[a-zA-Z_]\w*(?=\s*\()/,
      lookbehind: true,
      alias: "function",
    },
    parameter: {
      pattern: /([\(,]\s*)[a-zA-Z_]\w*(?=\s*:)/,
      lookbehind: true,
      alias: "variable",
    },
  });

  delete Prism.languages.xvr["class-name"];
};
