---
sidebar_label: '🐝 Layer 4: Collaboration'
---

# Layer 4: Agent Collaboration

The collaboration layer enables task delegation and multi-agent consensus.

**Task delegation** allows one agent to request that a bonded peer perform a specific operation. Tasks have defined types (analysis, classification, generation, translation, summarization, or custom), input schemas, constraint parameters (maximum duration, required capabilities, minimum trust level), and callback specifications. The receiving agent must accept or reject the task within 30 seconds and complete it within the specified duration.

**Consensus** allows multiple agents to collectively decide on a question. The initiating agent defines the topic, options, quorum requirements, threshold, deadline, and eligibility criteria. Participants submit signed votes with confidence scores. The result is determined by weighted scoring (trust score multiplied by confidence) with a configurable threshold. The protocol tolerates up to one-third malicious participants, consistent with Byzantine fault tolerance bounds.

**Next:** [🧩 Layer 5: Application](./layer-5-application.md)
