# Project Name

## Table of Contents
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Docker Deployment](#docker-deployment)
- [Environment Configuration](#environment-configuration)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## Prerequisites

### Technology Stack
- Node.js (v18+ recommended)
- TypeScript
- Express.js
- MongoDB

### Required Tools
- Node.js
- npm (Node Package Manager)
- Docker (optional)
- Git

## Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/samarsrivastav/url-shortner.git
cd url-shortner
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the project root with the following variables:

```env
# MongoDB Connection
DB_URL=your_mongodb_connection_string

```

### 4. MongoDB Setup

#### Option 1: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free cluster
3. Steps to get MongoDB URL:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Select "Node.js" driver
   - Copy the connection string
   - Replace `<password>` with your actual database user password
   - Example URL:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority
     ```

#### Option 2: Local MongoDB Installation
```bash
# Install MongoDB locally
brew install mongodb  # macOS
sudo apt-get install mongodb  # Ubuntu
```

### 5. Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Build
```bash
npm run build
npm start
```

## Docker Deployment

### Docker Commands
```bash
# Build the image
docker build -t your-app-name .

# Run the container
docker run -p 3000:3000 your-app-name

```

## API Endpoints

### Authentication Endpoints
- `GET /stats/:shortenId`
    
  - Response:
    ```json
        {
        "_id": "ObjectId",
        "originalUrl": "https://example.com",
        "shortId": "abcd1234",
        "clicks": 42,
        "lastAccessed": "2024-11-26T12:34:56Z"
        }
    ```
- `GET /:shortenId`
    
  - Response:
    - redirecting to the original url

- `POST /shorten`
  - Request Body:
    ```json
    {
      "originalUrl": "https://example.com",
    }
    ```
  - Response: Shortened url

## Deployment

### Vercel Deployment
1. Install Vercel CLI
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel
   ```bash
   vercel login
   ```

3. Deploy
   ```bash
   vercel
   ```

### Environment Variables on Vercel
- Go to Vercel Project Settings
- Navigate to "Environment Variables"
- Add all variables from `.env` file





