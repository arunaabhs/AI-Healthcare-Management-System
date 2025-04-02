const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy AI-based symptom checker logic
app.post('/api/symptom-checker', (req, res) => {
    const { symptom } = req.body;

    const lowerSymptom = symptom.toLowerCase();
    let result = '';

    if (lowerSymptom.includes("fever") || lowerSymptom.includes("temperature")) {
        result = "You may have a viral or bacterial infection. Consider seeing a doctor if it persists.";
    } else if (lowerSymptom.includes("cough") || lowerSymptom.includes("sore throat")) {
        result = "This might be a sign of a cold, flu, or throat infection.";
    } else if (lowerSymptom.includes("headache")) {
        result = "It could be due to stress, migraine, or lack of sleep.";
    } else if (lowerSymptom.includes("stomach pain") || lowerSymptom.includes("abdominal pain")) {
        result = "Possible causes include indigestion, gas, or food poisoning.";
    } else if (lowerSymptom.includes("fatigue") || lowerSymptom.includes("tiredness")) {
        result = "You might be overworked, dehydrated, or low on nutrients.";
    } else {
        result = "Please consult a doctor for a more accurate diagnosis.";
    }

    res.json({ response: result });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
