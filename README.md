<<<<<<< HEAD
# StoryFlicker

A fullStack blog application built with React, Redux Toolkit, and Appwrite. This app allows users to create, edit, and delete blog posts, manage authentication, and upload files.

## Features

- User Authentication (Sign Up, Login, Logout)
- Create, Edit, Delete Blog Posts
- File Uploads
- Context Menu for Post Management
- Responsive Design

## Tech Stack

- **Frontend:** React, Redux Toolkit
- **Backend:** Appwrite
- **Styling:** Tailwind CSS 
- **Deployment:**  Netlify 

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite instance

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mAchyut/StoryFlicker.git
   cd StoryFlicker
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Appwrite:

   - Create a new project in Appwrite.
   - Set up your database and storage.
   - Configure your environment variables in a `.env` file:

     ```env
     REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
     REACT_APP_APPWRITE_PROJECT_ID=your-project-id
     REACT_APP_APPWRITE_API_KEY=your-api-key
     ```

### Running the App

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

## Usage

- **Authentication:** Users can sign up, log in, and log out.
- **Blog Management:** Users can create, edit, and delete blog posts.
- **File Uploads:** Users can upload images and files to their posts.
- **Context Menu:** Right-click on a post to see options for editing or deleting.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please reach out to onestring22@gmail.com

---
