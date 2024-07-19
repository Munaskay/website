document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.number');
    const speed = 50; // Adjust the speed as needed

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const counter = entry.target;
            if (entry.isIntersecting) {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };

                counter.innerText = '0';
                updateCount();
            } else {
                counter.innerText = '0';
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});