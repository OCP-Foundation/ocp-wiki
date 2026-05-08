---
sidebar_label: '🌐 Layer 1: Discovery'
---

# Layer 1: Network & Discovery

The base layer handles message delivery and agent discovery. OCP supports four transport mechanisms: WebSocket (recommended for real-time bidirectional communication), HTTPS (for request-response patterns), NATS (for high-throughput publish-subscribe), and gRPC (for low-latency remote procedure calls). All transports require TLS 1.3 or higher.

The layer also defines the **Agent Registry**, a distributed directory where agents publish their identities, capabilities, and endpoints. The registry supports three deployment modes: federated (organizations operate peering registry nodes, similar to email's SMTP architecture), distributed hash table (peer-to-peer, using a Kademlia-based DHT), and centralized (a single registry server, intended for development and testing).

**Next:** [🆔 Layer 2: Identity & Trust](./layer-2-identity.md)
