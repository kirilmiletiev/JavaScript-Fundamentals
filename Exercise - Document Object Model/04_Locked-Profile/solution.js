function solve() {
    Array.from(document.querySelectorAll('.profile button')).forEach(x => {
        x.addEventListener('click', clickEvent);
    });

    function clickEvent(e) {
        let profile = e.target;
        let currentProfile = profile.parentNode;
        let element = currentProfile.getElementsByTagName('input')[0];

        if (!element.checked) {
            let hiddenElements = currentProfile.querySelector('[id$="HiddenFields"]');

            let buttonContent = currentProfile.getElementsByTagName('button')[0];
            if (buttonContent.textContent === 'Show more') {
                hiddenElements.style.display = 'block';
                buttonContent.textContent = 'Hide it';
            } else {
                hiddenElements.style.display = 'none';
                buttonContent.textContent = 'Show more';
            }
        }
    };
}