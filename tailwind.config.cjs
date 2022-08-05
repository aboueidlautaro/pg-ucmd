module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      colors: {
        "beige-claro": "#BCAFA6",
        "beige-oscuro": "#a69185",
        "gris-claro": "#dde1e0",
        marron: "#856757",
        piel: "#ebdacc",
        "rosa-pastel": "#c2a8a8",
        hueso: "#c2b19c",
        "blanco-perla": "#fff3f3",
        grafito: "#525252",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
