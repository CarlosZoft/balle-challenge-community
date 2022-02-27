build:
	sudo rm -rf ./postgres
	docker-compose up --build
up: 
	docker-compose up
down: 
	docker-compose down
restart:
	docker-compose up --force-recreate 
	