# Base Mainnet Contract

Smart contract deployment project for Base Sepolia testnet and Base Mainnet.

## 🚀 Deployed Contracts

### Base Sepolia (Testnet)
- **Contract Address:** `0x2B42a80A03d6b17C0d9dE0732bA4E30b68aeeF4E`
- **Explorer:** [View on BaseScan Sepolia](https://sepolia.basescan.org/address/0x2B42a80A03d6b17C0d9dE0732bA4E30b68aeeF4E)
- **Status:** ✅ Verified

### Base Mainnet (Production)
**Latest Batch Deployment (10x):**
1. `0x58f5bcc4023Ee0F3c6Bbf869FCc3Ff8E2EFAAC0e`
2. `0xbB4D648bc95743E2f9B6647303CFeBfBf41DBa9a`
3. `0x17CbF1Aa083486049c74E411db788C527e4Cdd59`
4. `0xF462737272B8024C3b5A5e35DfBfC4719Cb2F31A`
5. `0x2A3480D05753253DF781A47f11Ec3fB7E7A68cE2`
6. `0x55dac799f82aFA3826c4fBe53262619615Ca5D9e`
7. `0x7BD0dDa6580F31FBbBdCB46595C8219FAb16Fd56`
8. `0x859799383CfE9328eBd52dB6125ACc012e1E7011`
9. `0xDF02acB09F019a3671ff6B4E4d391790c57958b5`
10. `0x987D67a5fA34d696e2082811661F00ff82564bE5`

- **Explorer:** [View on BaseScan](https://basescan.org/address/0x58f5bcc4023Ee0F3c6Bbf869FCc3Ff8E2EFAAC0e)
- **Status:** ✅ Verified (Similar Match)

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
