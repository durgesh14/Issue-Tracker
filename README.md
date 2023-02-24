# Issue Tracker App
This is a nodejs + ejs application to track issues/bugs for a project. It provides the following features:

- A neat UI to easily navigate and manage projects and issues
- Home Page: A list of projects, with a button to create a new project
- Create Project form: Create a new project by providing name, description, and author
- Project Detail Page: Shows bugs related to a project, with filters for multiple labels and author, and search by title and description. Also provides a button to create a new issue.
- Create Issue Pop up modal : Create a new issue for a project, providing title, description, and labels (multiple labels can be added to a project). Also accepts the author of the issue.

## Usage
To use this application, follow these steps:

- Clone the repository to your local machine
- Install the dependencies by running `npm install` in the root directory of the application
- Start the application by running `npm start` in the root directory of the application
- Open your web browser and navigate to http://localhost:3000 to view the home page

### Home Page
The home page shows a list of projects. Each project is displayed with its name, description, and author. Clicking on a project will redirect the user to the project detail page for that project.

At the top of the home page is a button to create a new project. Clicking this button will take the user to the create project page.

### Create Project Form
The create project page allows the user to create a new project by providing a name, description, and author. Upon submitting the form, the new project will be added to the list of projects on the home page.

### Project Detail Page
The project detail page shows a list of issues related to the selected project. Each issue is displayed with its title, description, author, and labels.

At the top of the project detail page are several filter and search options. The user can filter issues by multiple labels and by author, as well as search for issues by title and description.

At the bottom of the project detail page is a button to create a new issue for the project.

### Create Issue Pop Up Modal
The create issue page allows the user to create a new issue for the selected project by providing a title, description, and labels. The user can also select the author of the issue. As the user types a label, existing labels for the project will appear in a dropdown, allowing the user to easily select an existing label or create a new one.

Upon submitting the form, the new issue will be added to the list of issues on the project detail page.

### Screenshots:
![image](https://user-images.githubusercontent.com/34915741/221305618-9eb1d541-00c7-412a-aa59-4951f3a1c632.png)
![image](https://user-images.githubusercontent.com/34915741/221306436-eca62806-2bae-4ae5-88aa-12fd93075977.png)
![image](https://user-images.githubusercontent.com/34915741/221306502-9daa489c-a6ff-438c-9037-525fd8a90b06.png)


