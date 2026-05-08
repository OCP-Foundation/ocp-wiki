---
sidebar_label: '🆔 Layer 2: Identity'
---

# Layer 2: Identity & Trust

Every OCP agent is identified by a **Decentralized Identifier** (DID) that conforms to the W3C DID Core specification and uses the ocp DID method. The agent identifier is derived from the SHA-3-256 hash of the agent's Ed25519 public key. Each agent publishes a DID Document containing its public key, service endpoint, capability declarations, and trust attestations.

The trust model defines five graduated levels:
| Level | Status | Description |
| :---: | :--- | :--- |
| **0** | 👤 **Anonymous** | Unverified; read-only broadcast access |
| **1** | 🆔 **Identified** | Verified DID with a reachable endpoint; can send/receive direct messages |
| **2** | 🤝 **Vouched** | Endorsed by three or more Level 2+ agents; can participate in knowledge exchange |
| **3** | 💎 **Bonded** | Has an active bilateral trust agreement; full collaboration access |
| **4** | 🏛️ **Certified** | Verified by the OCP Foundation; eligible for enterprise SLAs and governance voting |

Agents advance through trust levels via **vouching** (signed endorsements from peers) and **bonding** (bilateral agreements that specify scoped permissions, such as allowing insight sharing but not task delegation). Bonds are time-limited, revocable by either party, and recorded with cryptographic signatures from both agents.

**Next:** [🧠 Layer 3: Knowledge Exchange](./layer-3-knowledge.md)
