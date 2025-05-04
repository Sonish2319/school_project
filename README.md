# school_project


# School Project

## Project Setup and Rebase Process

This document explains how to set up the project locally and manage branch updates with rebase. Follow the steps below to contribute to the project smoothly.

---

### 1. **Clone the Repository**

To get started with the project, first clone the repository to your local machine:

```bash
git clone https://github.com/Sonish2319/school_project.git
cd school_project
```

---

### 2. **Setting Up the Development Environment**

#### 2.1 **Install Dependencies**
Depending on the stack, install the necessary dependencies for the **backend** (Node.js) and **frontend** (Next.js):

- **Backend (Node.js)**:

  Inside the `backend` folder:

  ```bash
  cd backend
  npm install
  ```

- **Frontend (Next.js)**:

  Inside the `frontend` folder:

  ```bash
  cd frontend
  npm install
  ```

---

### 3. **Branches and Workflow**

The project uses a branching strategy with `main`, `dev`, and feature branches.

- **`main` branch**: Contains the stable production-ready code.
- **`dev` branch**: Integration branch where new features are merged after they are developed.
- **Feature branches**: These are created from `dev` for specific tasks or features.

#### 3.1 **Creating and Working on a Feature Branch**

1. **Create a new branch from `dev`**:
   ```bash
   git checkout dev
   git pull origin dev    # Ensure you're up to date with dev
   git checkout -b feature-branch-name   # Replace with your feature name
   ```

2. **Develop your feature**, commit your changes:
   ```bash
   git add .
   git commit -m "Descriptive commit message"
   ```

3. **Push your feature branch** to GitHub:
   ```bash
   git push origin feature-branch-name
   ```

4. **Create a pull request (PR)** on GitHub to merge your changes into `dev`.

---

### 4. **Rebase Process**

Before merging your feature branch into `dev`, **rebase** your branch to ensure it's up-to-date with the latest changes from `dev`.

#### 4.1 **Rebasing Your Feature Branch with `dev`**

1. **Ensure you're on your feature branch**:
   ```bash
   git checkout feature-branch-name
   ```

2. **Fetch the latest changes from the remote**:
   ```bash
   git fetch origin
   ```

3. **Rebase your branch with `dev`**:
   ```bash
   git checkout dev
   git pull origin dev      # Ensure dev is up-to-date
   git checkout feature-branch-name
   git rebase dev           # Rebase your feature branch with dev
   ```

4. If there are any conflicts during the rebase, Git will stop and allow you to resolve them manually. After resolving the conflicts, run:
   ```bash
   git add .
   git rebase --continue
   ```

5. Once the rebase is complete and there are no more conflicts, **push your changes** (with `--force-with-lease` to overwrite the remote branch history safely):
   ```bash
   git push origin feature-branch-name --force-with-lease
   ```

---

### 5. **Merging Your Feature Branch into `dev`**

After a successful rebase, your feature branch is ready to be merged into `dev`.

1. **Push your rebased feature branch** to GitHub:
   ```bash
   git push origin feature-branch-name
   ```

2. **Create a pull request (PR)** on GitHub to merge your feature branch into `dev`.

---

### 6. **Merging `dev` into `main`**

Once the changes in `dev` are tested and stable, it's time to merge `dev` into `main`.

1. **Ensure you're on `main`**:
   ```bash
   git checkout main
   ```

2. **Pull the latest changes from `main`**:
   ```bash
   git pull origin main
   ```

3. **Merge `dev` into `main`**:
   ```bash
   git merge dev
   ```

4. **Push `main` to GitHub**:
   ```bash
   git push origin main
   ```

5. Optionally, create a **release tag** after merging to mark a new version:
   ```bash
   git tag -a v1.0 -m "Release version 1.0"
   git push origin v1.0
   ```

---

### 7. **Additional Tips**

- **Setting Up Tracking Branches**: If you're working with remote branches for the first time, you might need to set up tracking:
  
  ```bash
  git branch --set-upstream-to=origin/dev dev
  ```

- **Checking the Status**: Always keep track of your branch status:

  ```bash
  git status
  ```

- **Undoing Changes**: If needed, you can undo commits or changes using:
  
  ```bash
  git reset HEAD~1   # Undo last commit (soft reset)
  git checkout -- <file>   # Undo changes to a specific file
  ```

---

### Conclusion

This workflow ensures that your project is developed collaboratively while maintaining a stable `main` branch. By using feature branches, rebasing, and pull requests, you'll be able to handle new features, bug fixes, and integration efficiently. Happy coding!
