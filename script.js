const leadSelect = document.getElementById("leadSelect");
const statusDiv = document.getElementById("workflowStatus");

// Charger la liste des leads depuis n8n
async function loadLeads() {
    try {
        const response = await fetch("http://localhost:5678/webhook-test/get-leads", {
            // headers: {
            //     "Authorization": "Bearer YOUR_N8N_API_KEY"
            // }
        });
        const leads = await response.json();

        // Vider le select
        leadSelect.innerHTML = "";

        leads.forEach(lead => {
            const option = document.createElement("option");
            option.value = lead.id;
            option.textContent = `${lead.name} (${lead.email})`;
            leadSelect.appendChild(option);
        });

        statusDiv.textContent = "Liste des leads chargée.";

    } catch (error) {
        console.error(error);
        statusDiv.textContent = "Erreur lors du chargement des leads.";
    }
}

// Déclenchement du workflow manuel
document.getElementById("triggerWorkflow").addEventListener("click", async () => {
    const leadId = leadSelect.value;
    if (!leadId) return alert("Sélectionnez un lead.");

    statusDiv.textContent = `Déclenchement du workflow pour le lead ${leadId}...`;

    try {
        const response = await fetch("https://YOUR_N8N_INSTANCE/webhook/manual-workflow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_N8N_API_KEY"
            },
            body: JSON.stringify({ leadId })
        });

        const data = await response.json();

        document.getElementById("emailTo").textContent = data.email.to;
        document.getElementById("emailSubject").textContent = data.email.subject;
        document.getElementById("emailBody").textContent = data.email.body;

        statusDiv.textContent = `Workflow terminé pour ${data.leadName}. Brouillon email prêt.`;

    } catch (error) {
        console.error(error);
        statusDiv.textContent = "Erreur lors du déclenchement du workflow.";
    }
});

// Charger les leads au démarrage
loadLeads();
