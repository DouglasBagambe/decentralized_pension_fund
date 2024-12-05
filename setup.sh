#!/bin/bash

# Create root-level folders
mkdir -p contracts client scripts docs

# Set up Rust contracts folder
mkdir -p contracts/{programs,tests,migrations,target}
touch contracts/Anchor.toml
echo "# Anchor configuration file for Solana contracts" > contracts/Anchor.toml

# Set up React frontend folder
mkdir -p client/{src/{components,pages,styles,contexts,utils},public}
touch client/package.json
echo "{
  \"name\": \"frontend\",
  \"version\": \"0.1.0\",
  \"private\": true,
  \"dependencies\": {}
}" > client/package.json

# Placeholder files for contracts
echo "// Rust program source code goes here" > contracts/programs/lib.rs
echo "// Integration tests for Solana smart contracts" > contracts/tests/integration.rs
echo "// Migration or deployment scripts go here" > contracts/migrations/deploy.rs

# Placeholder files for React frontend
echo "// React entry point" > client/src/index.js
echo "// Context providers for global state" > client/src/contexts/GlobalContext.js
echo "// Page components go here" > client/src/pages/Home.js
echo "// Reusable UI components" > client/src/components/Navbar.js
echo "// Helper utilities" > client/src/utils/helpers.js

# Documentation folder
echo "# Project documentation" > docs/README.md

# Root-level README
echo "# Decentralized Pension Fund
This project uses a React-based frontend and Rust smart contracts (via Anchor) to implement a decentralized pension fund.

## Project Structure
- **contracts/**: Contains Rust programs for Solana.
- **client/**: React frontend.
- **scripts/**: Utility scripts for deployment and management.
- **docs/**: Documentation.

## Setup
1. Install dependencies.
2. Build the contracts.
3. Run the React frontend." > README.md

# Create .gitignore
echo "node_modules/
target/
.env
.DS_Store" > .gitignore

echo "Project structure created successfully!"
