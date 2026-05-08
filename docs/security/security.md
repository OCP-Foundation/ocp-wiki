---
sidebar_label: '🧯  Threat & Recovery'
sidebar_position: 1
---

# Security

## Cryptographic Primitives
| Function | Algorithm | Standard |
| :--- | :--- | :--- |
| 🖋️ **Message Signing** | `Ed25519` | [RFC 8032](https://datatracker.ietf.org/doc/html/rfc8032) |
| 🔑 **Key Exchange** | `X25519` (ECDH) | [RFC 7748](https://datatracker.ietf.org/doc/html/rfc7748) |
| 🔒 **Symmetric Encryption** | `AES-256-GCM` | [NIST SP 800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) |
| 🏷️ **Hashing** | `SHA-3-256` | [FIPS 202](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf) |
| 🖇️ **Key Derivation** | `HKDF-SHA-256` | [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) |

## Threat Mitigations
OCP is designed to resist several categories of attack. Sybil attacks (flooding the network with fake agents) are mitigated through DID verification and the vouching system. Man-in-the-middle attacks are prevented by end-to-end encryption via ECDH key exchange. Data poisoning is addressed through knowledge provenance tracking and confidence scoring. Replay attacks are mitigated by message time-to-live values and nonce validation. Privacy leakage is prevented by the Privacy Validation Layer, which prohibits raw data in knowledge payloads.

## Key Recovery
OCP provides a key recovery mechanism based on Shamir's Secret Sharing. An agent's Ed25519 private key is split into n shares using a (t, n) threshold scheme over GF(2^8), where any t shares are sufficient to reconstruct the key but t−1 shares reveal no information about it. The default configuration is 3-of-5. Shares are encrypted to individual custodians (bonded peers, organizational vaults, cold storage, or dedicated recovery services) and are never transmitted in plaintext.

The recovery mechanism is designed with no master key and no backdoor. No single entity, including the OCP Foundation, can reconstruct any agent's private key. Recovery requires the cooperation of at least t independent custodians and verification through a pre-registered secondary recovery key or out-of-band identity proof.

## Post-Quantum Readiness
The specification reserves algorithm identifiers for post-quantum cryptographic primitives: ML-KEM (FIPS 203) for key encapsulation, ML-DSA (FIPS 204) for digital signatures, and SLH-DSA (FIPS 205) for stateless hash-based signatures. Implementations are encouraged to prepare for a hybrid key exchange that combines X25519 with ML-KEM.

---
**Next:** [🏛️Governance & Decision Making](../governance.md)
