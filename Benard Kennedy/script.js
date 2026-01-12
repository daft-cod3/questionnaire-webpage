document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneModel = document.getElementById('phoneModel').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const features = document.querySelectorAll('input[name="features"]:checked');
    const reviewTitle = document.getElementById('reviewTitle').value;
    const review = document.getElementById('review').value;
    const recommend = document.querySelector('input[name="recommend"]:checked');

    // Process selected features
    const selectedFeatures = [];
    features.forEach(feature => selectedFeatures.push(feature.value));

    // Construct the review data object
    const reviewData = {
        name: name,
        email: email,
        phoneModel: phoneModel,
        purchaseDate: purchaseDate,
        rating: rating ? rating.value : 'Not rated',
        features: selectedFeatures,
        reviewTitle: reviewTitle,
        review: review,
        recommend: recommend ? recommend.value : 'No recommendation given'
    };

    // Display the submitted data
    console.log("--- Product Review Submission ---");
    console.log(reviewData);

    // Alert the user
    alert(`Thank you, ${name}! Your review for the ${phoneModel} has been submitted.\nCheck the console for the full details.`);
    
    // Optional: Reset the form
    document.getElementById('reviewForm').reset();
});