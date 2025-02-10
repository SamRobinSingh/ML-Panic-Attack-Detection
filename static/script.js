document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let jsonData = {
        "Age": document.getElementById("age").value,
        "Panic_Attack_Frequency": document.getElementById("panic_attack_frequency").value,
        "Duration_Minutes": document.getElementById("duration_minutes").value,
        "Heart_Rate": document.getElementById("heart_rate").value,
        "Caffeine_Intake": document.getElementById("caffeine_intake").value,
        "Exercise_Frequency": document.getElementById("exercise_frequency").value,
        "Sleep_Hours": document.getElementById("sleep_hours").value,
        "Alcohol_Consumption": document.getElementById("alcohol_consumption").value,
        "Gender": document.getElementById("gender").value,
        "Trigger": document.getElementById("trigger").value,
        "Sweating": document.getElementById("sweating").value,
        "Shortness_of_Breath": document.getElementById("shortness_of_breath").value,
        "Dizziness": document.getElementById("dizziness").value,
        "Chest_Pain": document.getElementById("chest_pain").value,
        "Trembling": document.getElementById("trembling").value,
        "Medical_History": document.getElementById("medical_history").value,
        "Medication": document.getElementById("medication").value,
        "Smoking": document.getElementById("smoking").value,
        "Therapy": document.getElementById("therapy").value
    };

    fetch("/predict/", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = "🔮 Predicted Panic Score: " + data.prediction;
    })
    .catch(error => console.error("Error:", error));
});
