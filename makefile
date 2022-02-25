build:
	docker-compose up --build
up: 
	docker-compose up
down: 
	docker-compose down
restart:
	sudo rm -r ./postgres
	docker-compose up --force-recreate 
	