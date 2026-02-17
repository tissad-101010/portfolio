# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: tissad <tissad@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2026/02/17 22:57:49 by tissad            #+#    #+#              #
#    Updated: 2026/02/17 23:35:15 by tissad           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

# this Makefile is designed to simplify the setup and development process 
# for a Next.js 16 project
# Install automatically nvm if not present, install the correct Node version,
# and provide easy commands for development, building, and linting.


.PHONY: all install nvm_check dev build start export lint

# Default target
all: dev

# Install Node.js and npm dependencies for the project
install: 
	@echo "🔧 Installing dependencies..."
	@npm install

# Start the development server
dev:
	@echo "🚀 Starting Next.js development server..."
	@npm run dev

# Build the project for production
build: 
	@echo "🔨 Building the project for production..."
	@npm run build

# Start the production server
start: build
	@echo "🚀 Starting Next.js production server..."
	@npm start

# Export the site as a static application
export: build
	@echo "📦 Exporting the site as a static application..."
	@npm run export

