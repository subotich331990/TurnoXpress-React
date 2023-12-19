module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "SixUnits": "96px",
        "FourUnits": "64px",
        "Unit": "16px",
        "FiveUnits": "80px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius2": "8",
        "Radius8": "8px",
        "Radius4": "4px"
      },
      "scale": {
        "Large": "144px",
        "XXLarge": "288px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "Medium": "96px",
        "XSmall": "16px",
        "XLarge": "192px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}