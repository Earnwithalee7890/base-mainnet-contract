# Base Mainnet Contract

Smart contract deployment project for Base Sepolia testnet and Base Mainnet.

## 🚀 Deployed Contracts

### Base Sepolia (Testnet)
- **Contract Address:** `0x2B42a80A03d6b17C0d9dE0732bA4E30b68aeeF4E`
- **Explorer:** [View on BaseScan Sepolia](https://sepolia.basescan.org/address/0x2B42a80A03d6b17C0d9dE0732bA4E30b68aeeF4E)

### Base Mainnet (Production)
- **Contract Address:** `0x4E464b7Ad147CF3317bAEa4B96faf25c91e0855b`
- **Explorer:** [View on BaseScan](https://basescan.org/address/0x4E464b7Ad147CF3317bAEa4B96faf25c91e0855b)

## 📋 Contract Details

- **Name:** SimpleCounter
- **Solidity Version:** 0.8.20
- **License:** MIT

### Functions
- `count()` - View current count
- `increment()` - Increment the counter

## 🛠️ Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
PRIVATE_KEY=0xYOUR_PRIVATE_KEY_HERE
```

## 📦 Deploy

### Deploy to Base Sepolia (Testnet)
```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

### Deploy to Base Mainnet
```bash
npx hardhat run scripts/deploy.js --network baseMainnet
```

## ✅ Verify Contracts

### Verify on Base Sepolia
```bash
npx hardhat verify --network baseSepolia <CONTRACT_ADDRESS>
```

### Verify on Base Mainnet
```bash
npx hardhat verify --network baseMainnet <CONTRACT_ADDRESS>
```

## 🔗 Resources

- [Base Documentation](https://docs.base.org)
- [Hardhat Documentation](https://hardhat.org/docs)
- [BaseScan](https://basescan.org)

## ⚠️ Security

**Never commit your `.env` file or share your private key!** The `.gitignore` file is configured to exclude sensitive files.

## 📄 License

MIT
