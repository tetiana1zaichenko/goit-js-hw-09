function loudFromLS(key) {
    const body = localStorage.getItem(key);
    try {
        const data = JSON.parse(body);
        return data;
    } catch (err) {
        console.log(err);
        return body;
}
}

const formData = {
    email: "",
    message: "",
}

const feedbackForm = document.querySelector(".feedback-form");
feedbackForm.addEventListener('input', evt => {
    formData.email = evt.currentTarget.elements.email.value.trim();
    formData.message = evt.currentTarget.elements.message.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})


function comebackPage() {
    const comebackformData = loudFromLS('feedback-form-state');
    feedbackForm.elements.email.value = comebackformData?.email || '';
    feedbackForm.elements.message.value = comebackformData?.message || '';
}
comebackPage()


feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (evt.currentTarget.elements.email.value !== "" && evt.currentTarget.elements.message.value !== "") {
        formData.email = evt.currentTarget.elements.email.value;
        formData.message = evt.currentTarget.elements.message.value;
        console.log(formData);
        evt.target.reset();
        localStorage.removeItem('feedback-form-state');
    } else {
        console.log("Fill please all fields")
    }

})
