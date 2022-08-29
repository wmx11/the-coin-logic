## Custom Data Structure

### Custom Data Request

```json
[
  {
    "label": "Treasury",
    "description": "This is a treasury description",
    "ticker": "BNB",
    "address": "0x4e3cABD3AD77420FF9031d19899594041C420aeE",
    "network": "bsc",
    "method": "getBalance",
    "applyPairPrice": true,
    "arguments": {
      "getBalance": "0x6560eD767D6003D779F60BCCD2d7B168Cd4a1583",
      "getBalanceDecimals": 9
    }
  },
  {
    "label": "RFV",
    "description": "This is RFV Description",
    "ticker": "BNB",
    "address": "0x4e3cABD3AD77420FF9031d19899594041C420aeE",
    "network": "bsc",
    "method": "getBalance",
    "applyPairPrice": true,
    "arguments": {
      "getBalance": "0xaf47725c293452ade77770bfb6bd2680564da157",
      "getBalanceDecimals": 9
    }
  }
]
```

### Custom Data Response

```json
[
  {
    "label": "Treasury",
    "address": "0x4e3cABD3AD77420FF9031d19899594041C420aeE",
    "customDataAddress": "0x6560eD767D6003D779F60BCCD2d7B168Cd4a1583",
    "value": 26130.558325294,
    "description": "This is a treasury description",
    "ticker": "BNB",
    "withPairPrice": 7268517.221029066,
    "withPrice": 0
  },
  {
    "label": "RFV",
    "address": "0x4e3cABD3AD77420FF9031d19899594041C420aeE",
    "customDataAddress": "0xaf47725c293452ade77770bfb6bd2680564da157",
    "value": 3007.93693675,
    "description": "This is RFV Description",
    "ticker": "BNB",
    "withPairPrice": 836692.471411023,
    "withPrice": 0
  }
]
```