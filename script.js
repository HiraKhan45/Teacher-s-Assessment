document.getElementById("assessmentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(e.target);

    // Send data to Formspree
    try {
        const response = await fetch("https://formspree.io/f/xgvvdggy", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            e.target.reset();
        } else {
            alert("Failed to submit. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
        console.error(error);
    }
});
