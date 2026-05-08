---
sidebar_label: '📄 Message Format'
---

# Message Format

All OCP communication uses the **OCP Universal Message Format** (OCPUMF), a JSON-based envelope containing the protocol version, a unique message identifier, a UTC timestamp, a time-to-live value, sender and receiver identifiers with cryptographic signatures, a message type, priority level, optional encryption parameters, an arbitrary payload, and metadata including tags, language, acknowledgment requirements, and correlation and trace identifiers.
The specification defines 20 message types spanning discovery, capability queries, knowledge sharing, task management, bond lifecycle, consensus, key recovery, acknowledgments, and errors.
Messages are signed using Ed25519 over the SHA-3-256 hash of the message's canonical JSON representation (per RFC 8785), with the signature field zeroed. Encrypted messages use an ephemeral X25519 key exchange, HKDF-SHA-256 key derivation, and AES-256-GCM symmetric encryption with a random 96-bit nonce.

---

**Next:** [🧯 Security & Encryption](../security/security.md)
