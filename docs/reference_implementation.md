---
sidebar_label: '🧱 Reference Implementation'
sidebar_position: 6
---

# Reference Implementation

The OCP reference implementation is released on GitHub under the MIT license and includes:

A **Python SDK** (ocp-protocol) that provides classes for agent identity, message building and validation, all three knowledge types, trust and bonding, the Privacy Validation Layer, transport (WebSocket and HTTPS), registry interaction, consensus, and key recovery.

A **Docker-based reference node** that runs a local OCP node and registry server, configurable for federated, DHT, or centralized deployment.

**JSON schemas** (JSON Schema Draft 2020-12) for all protocol data structures, including the universal message format, agent records, DID documents, bond records, knowledge payloads, task messages, and recovery shares.

A **compliance test suite** with approximately 50 test cases covering identity generation, message construction and signing, cryptographic operations, knowledge type validation, trust enforcement, privacy validation, transport authentication, and consensus resolution

---

## From Code to Context
The Reference Implementation provides the technical foundation for OCP. However, to fully appreciate the protocol's design choices, it is helpful to see how it sits within the broader ecosystem of AI and decentralized tech.

**Next:** [⚖️ Comparison with Related Technologies](./comparison.md)
