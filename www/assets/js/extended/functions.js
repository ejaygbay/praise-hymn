const switchSection = (id) => {
    document.querySelectorAll('.show-ele').forEach(ele => ele.classList.replace('show-ele', 'hide-ele'));
    document.getElementById(id).classList.add('show-ele');
}