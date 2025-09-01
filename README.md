# Agent_Sales_Coach

## 📌 Contexte
Un grand nombre de leads arrivent dans **Odoo CRM**, mais :
- Beaucoup de leads ne sont pas contactés à temps.
- Plusieurs leads sont perdus faute de relances efficaces.

## ❗ Problème
L’absence de suivi systématique entraîne :
- Des pertes d’opportunités commerciales.
- Une diminution du taux de conversion.
- Une surcharge pour les équipes commerciales.

## 🎯 Mission
Construire un **agent intelligent** capable de :
1. Analyser les leads en temps réel.
2. Proposer la **Next Best Action (NBA)**.
3. Automatiser l’envoi d’**emails de relance / prise de contact**.

---


### 1️⃣ Workflow manuel
**Pipeline :**
`Webhook → Scoring/Règles → Email ou Création d’activité`

Création d’un lead → Action automatique de l’agent :
- Si **Dernier contact > 7j** → proposer *Email de relance*.
- Si **Probability > 70%** ET **Interactions positives > 2** → proposer *Offre finale*.
- Si **Nouveau Lead (Stage_id = New)** → Email interne avec :
  - Lead Score (sur 100).
  - Données société (Nom, Activité, Taille).
  - Résumé du besoin.

**📧 Templates d’emails (2–3) :**
- Premier contact.  
- Relance.  
- Offre finale.  

---

### 2️⃣ Workflow automatisé
**Pipeline :**
`Webhook → Scoring/Règles → Email ou Création d’activité`

**Mini démo :**  
Création d’un lead → Action automatique de l’agent :
- Si **Lead nouveau** ET **sentiment négatif dans description** → *Email de support personnalisé*.
- Si **Lead existant** ET **stagnant (>14 jours)** → *Email de relance*.
- Si **Lead existant** ET **nouvelle interaction avec sentiment négatif** → *Email de support personnalisé*.

**📧 Templates d’emails (2–3) :**
- Relance.  
- Support personnalisé.  

---

## ✅ Résultats attendus
- Amélioration du **taux de conversion** grâce à des relances automatiques.  
- Réduction de la **perte de leads** non suivis.  
- Gain de temps pour les équipes commerciales.  

---

## 🛠️ Stack technique (suggestion)
- **Google Sheet**  
- **Agent IA** (scoring, analyse de sentiment, règles métiers)  
- **Service d’emailing** (SMTP / Gmail)  
- **Workflow orchestration** avec n8n  

---
