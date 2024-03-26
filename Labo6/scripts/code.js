const setup = () => {

// Function to create project links
    const createProjectLinks = (projects, parentElementId) => {
        const projectList = document.getElementById(parentElementId);

        // Iterate through project names and create links
        projects.forEach(project => {
            const listItem = document.createElement("li");
            const projectLink = document.createElement("a");
            projectLink.href = `../${project.directory}/index.html`;
            projectLink.textContent = `Opdracht ${project.name}`;
            listItem.appendChild(projectLink);
            projectList.appendChild(listItem);

            // Check if CSS file exists
            if (project.hasCSS) {
                const cssListItem = document.createElement("li");
                const cssLink = document.createElement("a");
                cssLink.href = `../${project.directory}/styles/style.css`;
                cssLink.textContent = `CSS ${project.name}`;
                cssListItem.appendChild(cssLink);
                projectList.appendChild(cssListItem);
            }

            const codeListItem = document.createElement("li");
            const codeLink = document.createElement("a");
            codeLink.href = `../${project.directory}/scripts/code.js`;
            codeLink.textContent = `Code ${project.name}`;
            codeListItem.appendChild(codeLink);
            projectList.appendChild(codeListItem);

            // Add separator
            const separator = document.createElement("li");
            separator.textContent = "-------------------";
            projectList.appendChild(separator);
        });
    };

// Define projects
    const demoProjects = [
        { name: "CreateNodes", directory: "Demo/CreateNodes", hasCSS: true },
        { name: "demo%20%events", directory: "Demo/demo%20%events", hasCSS: true },
        { name: "Nodes", directory: "Demo/Nodes", hasCSS: true },
        { name: "Selector", directory: "Demo/Selector", hasCSS: true },
        { name: "This-keyword", directory: "Demo/This-keyword", hasCSS: true },
        { name: "Opdracht_colorpicker_uitbereiding", directory: "Demo/Opdracht_colorpicker_uitbereiding", hasCSS: true },
        { name: "Opdracht_Event_Bubbling", directory: "Demo/Opdracht_Event_Bubbling", hasCSS: true }
    ];

    const opdrachtNodesProjects = [
        { name: "OP_1", directory: "Opdracht_oefeningen_nodes/OP_1" },
        { name: "OP_2", directory: "Opdracht_oefeningen_nodes/OP_2" },
        { name: "OP_3", directory: "Opdracht_oefeningen_nodes/OP_3" }
    ];

// Create project links
    createProjectLinks(demoProjects, "demoProjectList");
    createProjectLinks(opdrachtNodesProjects, "opdrachtNodesList");
}
window.addEventListener("load", setup);
