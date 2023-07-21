
//accordion javascript for list

const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach( item => {
    const input = item.querySelector('input[type="radio"]');
    const content = item.querySelector('.content');

    item.addEventListener('click', () => {
        const isActive = input.checked;
        input.checked = !isActive;

        if(isActive){
            content.style.maxHeight = '0';
        } else{
            content.style.maxHeight = `${content.scrollHeight}px`;
        }

    });
});