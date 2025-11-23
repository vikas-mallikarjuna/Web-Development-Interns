# Web-Development-Interns 

# **Responsive Landing Page – Task 1**

## **📌 Project Overview**

This project is a simple and responsive **Landing Page** created using only **one HTML file** (`index.html`) that includes both **HTML and CSS** in the same file using `<style>` tags.

The page is designed to be clean, modern, and responsive across all screen sizes.

## **🎯 Objective**

* Build a responsive landing page containing:
  * Header
  * Hero section
  * Footer
* Write both HTML and CSS inside a single file.

## **🛠 Tools Used**

* **VS Code** (free editor)
* **Chrome Browser**
* **Live Server** extension for preview

## **📂 Deliverable**

* `index.html` (contains both HTML + CSS)

## **📘 Features**

* Header with logo and navigation links
* Hero section with headline, description, and CTA button
* Responsive layout built with Flexbox / Grid
* CSS added inside `<style>` tag
* Mobile-friendly using media queries
* Footer with social links

## **🧩 How the Page Was Built (Mini Guide)**

### **1. Created One File**

* `index.html` containing:

  * HTML structure
  * Internal CSS styling inside `<style>`

### **2. Basic HTML5 Structure**

Included:

```html
<!DOCTYPE html>
<html>
<head> ... </head>
<body> ... </body>
</html>
```

### **3. Header Section**

* Logo text
* Navigation menu using `<nav>` and `<ul>`

### **4. Hero Section**

* Main heading
* Sub-text paragraph
* Call-to-action button

### **5. CSS Styling**

Inside `<style>`:

* Flexbox/Grid for layout
* Spacing, colors, fonts, button styles

### **6. Responsive Design**

Added media queries for:

* Mobile navigation
* Text size adjustments
* * Stacking layout on small screens

### **7. Footer Section**
* Social media links
* Simple centered layout

## **🚀 How to Run**
1. Open folder in **VS Code**
2. Right-click `index.html`
3. Select **“Open with Live Server”**
4. Resize the browser to test responsiveness
 
<----------------------------------------------------------------------------------------------------------------->

6. # To‑Do List Web App (Vanilla JavaScript)

This project is a simple, front‑end **To‑Do List Application** built using **HTML, CSS, and Vanilla JavaScript**. It demonstrates DOM manipulation, event handling, dynamic UI updates, and browser localStorage usage.

## 🚀 Features

* Add new tasks
* Mark tasks as **completed / not completed**
* Delete tasks
* Filter tasks: **All / Active / Completed**
* Auto-save tasks using **localStorage** (data remains even after refresh)
* Keyboard support (*Enter to add*, *Ctrl+K to delete completed tasks*)
* Responsive UI design

## 📂 Project Structure

```
index.html   → Contains HTML, CSS, and JavaScript
```

All code is inside a single HTML file for quick learning and easy execution.

## 💡 How It Works

### 1. **HTML Structure**

* Input box for adding tasks
* "Add" button
* Unordered list `<ul>` to display tasks
* Filters and task counter

### 2. **CSS Styling**

* Clean, modern UI
* Task items styled with hover effects
* Completed tasks show strike-through text

### 3. **JavaScript Functionality**

#### Main Functions:

* **addTask(text)** → Adds new task
* **toggleDone(id)** → Marks task complete / incomplete
* **removeTask(id)** → Deletes selected task
* **render()** → Updates the UI dynamically
* **save()** / **load()** → Handles localStorage

#### Event Listeners:

* Button click
* Enter key press
* Task checkbox click
* Delete button click
* Filter selection

## 🛠️ How to Use

1. Open the file `index.html` in any browser.
2. Type a task in the input box.
3. Click **Add** or press **Enter**.
4. Click on a task to mark it completed.
5. Click **Delete** to remove a task.
6. Use filters to view All/Active/Completed tasks.
7. Press **Ctrl + K** to remove all completed tasks quickly.

## 📦 Requirements

* A modern browser (Chrome, Edge, Firefox)
* (Optional) **VS Code** with **Live Server** extension for auto refresh

## 📝 Learning Outcomes

By building this project, you will learn:

* DOM Manipulation (create, append, remove elements)
* Event Handling (click, keydown)
* Working with Arrays & Objects in JS
* Working with Local Storage
* Basic UI/UX layout with CSS
* Writing clean and modular JavaScript

## 🔮 Future Enhancements (Optional)

* Edit task feature
* Drag-and-drop task ordering
* Dark/Light mode toggle
* Task categories

## 📜 License

This project is free to use for learning and personal development.

**Happy Coding! 🎉**
