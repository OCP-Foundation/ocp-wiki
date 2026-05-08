---
sidebar_label: '🧠 Layer 3: Knowledge'
---

# Layer 3: Knowledge Exchange

The knowledge layer defines three types of shareable information:

**Semantic embeddings** are vector representations of concepts, shared for similarity search and retrieval augmentation. Vectors must be L2-normalized by default and are transmitted as base64url-encoded typed arrays with metadata including source domain and creation timestamp.

**Insight packages** are structured findings; patterns, anomalies, or conclusions an agent has reached, expressed in a standardized schema with confidence scores, evidence counts, feature descriptions, recommended actions, and full provenance information including the source agent, derivation methodology, and a reproducibility hash.

**Model deltas** are compressed, privacy-safe updates to model behavior compatible with federated learning approaches. All model deltas must include differential privacy parameters; the specification enforces a maximum epsilon value of 10.0 and requires a specified noise mechanism (Gaussian or Laplace).

All knowledge payloads must pass through the Privacy Validation Layer (PVL) before transmission. The PVL scans for personally identifiable information, verifies anonymization, checks differential privacy compliance for model deltas, validates provenance, and enforces payload size limits. Payloads that fail any check are rejected with a specific error code (PVL-001 through PVL-006).

**Next:** [🐝 Layer 4: Collaboration](./layer-4-collaboration.md)
