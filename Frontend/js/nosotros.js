
const members = document.querySelectorAll('.member');

members.forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.1)';
        member.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    });

    member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)';
        member.style.boxShadow = 'none';
    });
});