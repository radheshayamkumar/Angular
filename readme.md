# Angular Project

## Overview
This is an Angular project demonstrating the use of **structural directives** (`*ngIf` and `*ngFor`). The project contains a `Directive` folder, inside which the `StructuralDir` folder handles these functionalities.

## Folder Structure
```
/your-angular-project
│-- /src
│   │-- /app
│   │   │-- /Directive
│   │   │   │-- /StructuralDir
│   │   │   │   │-- structural-dir.component.ts
│   │   │   │   │-- structural-dir.component.html
│   │   │   │   │-- structural-dir.component.css
│   │   │-- app.module.ts
│   │-- index.html
│   │-- styles.css
│-- angular.json
│-- package.json
│-- README.md
```

## Features
- **`*ngIf` Directive:** Used to conditionally render elements based on Boolean conditions.
- **`*ngFor` Directive:** Used to iterate over a list and dynamically display elements.
- **Dynamically Displayed Data:** Includes a table listing student details and a city list.

## Components & Functionalities
### **`structural-dir.component.html`**
- Displays multiple cards dynamically based on `*ngIf` conditions.
- Uses `*ngFor` to iterate over a list of students.
- Includes buttons to toggle visibility of elements.
- Shows an interactive table with dynamically changing status.

### **Example Code Snippets**
#### **Using `*ngIf` to Show/Hide Elements**
```html
<div *ngIf="isDivVisible" class="card">
    <h3>Card</h3>
    <p>This is a dynamically shown card.</p>
</div>
<button (click)="toggleDiv()">Toggle Card</button>
```
#### **Using `*ngFor` to Loop Over Data**
```html
<ul>
    <li *ngFor="let city of cityArray">{{ city }}</li>
</ul>
```
#### **Displaying Data in a Table**
```html
<table class="table">
    <thead>
        <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>City</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let student of studentList; let srNo = index">
            <td>{{ srNo + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.city }}</td>
            <td [class.active]="student.isActive" [class.inactive]="!student.isActive">
                {{ student.isActive ? 'Active' : 'Inactive' }}
            </td>
        </tr>
    </tbody>
</table>
```

## Installation & Running the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git
   ```
2. Navigate to the project folder:
   ```sh
   cd your-angular-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   ng serve
   ```
5. Open your browser and go to:
   ```sh
   http://localhost:4200
   ```

## Technologies Used
- **Angular** - Frontend framework
- **TypeScript** - Programming language
- **Bootstrap** - Styling (Optional)

## Future Enhancements
- Add more custom directives for enhanced functionality.
- Implement services for better data handling.
- Improve UI with additional styling.

## License
This project is open-source and available under the MIT License.
