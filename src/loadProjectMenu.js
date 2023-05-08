import loadProject from "./loadProject";

const loadProjectMenu = (projectList) => {
    const projectDropdown = document.getElementById('dropdown-project-list');
    projectDropdown.replaceChildren();
    projectList.forEach(project => {
        const item = document.createElement('a');
        item.href = "#";
        item.innerHTML = project.title;
        item.addEventListener('click', () => {
            // Load project
            loadProject(project);
        });
        projectDropdown.appendChild(item);
    });
}

export default loadProjectMenu;