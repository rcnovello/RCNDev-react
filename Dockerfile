# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
# This means npm install will not run again if package.json hasn't changed
COPY package.json ./
COPY yarn.lock ./
# If you are using npm, use:
# COPY package-lock.json ./

RUN yarn install --frozen-lockfile
# If you are using npm, use:
# RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the React app
# Ensure your package.json has a "build" script, e.g., "react-scripts build"
RUN yarn build
# If you are using npm, use:
# RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
