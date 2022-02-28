# Challenge-community

## Routes

### Community

| method | action   | router             | params                            |
| ------ | -------- | ------------------ | --------------------------------- |
| post   | create   | /api/community     |                                   |
| get    | list all | /api/community     | ?enthusiast=boolean?serie=boolean |
| get    | list one | /api/community/:id |                                   |
| put    | update   | /api/community/:id |                                   |
| delete | delete   | /api/community/:id |                                   |

[body community](./src/interfaces/community.ts)

### Category

| method | action   | router            |
| ------ | -------- | ----------------- |
| post   | create   | /api/category     |
| get    | list all | /api/category     |
| get    | list one | /api/category/:id |
| put    | update   | /api/category/:id |
| delete | delete   | /api/category/:id |

[body category](./src/interfaces/category.ts)

### Serie

| method | action   | router         |
| ------ | -------- | -------------- |
| post   | create   | /api/serie     |
| get    | list all | /api/serie     |
| get    | list one | /api/serie/:id |
| put    | update   | /api/serie/:id |
| delete | delete   | /api/serie/:id |

[body serie](./src/interfaces/serie.ts)

### Enthusiast

| method | action   | router              |
| ------ | -------- | ------------------- |
| post   | create   | /api/enthusiast     |
| get    | list all | /api/enthusiast     |
| get    | list one | /api/enthusiast/:id |
| put    | update   | /api/enthusiast/:id |
| delete | delete   | /api/enthusiast/:id |

[body enthusiast](./src/interfaces/enthusiast.ts)

### Login

| method | action  | router             |
| ------ | ------- | ------------------ |
| post   | login   | /api/login         |
| delete | logout  | /api/login/:token  |
| post   | refresh | /api/login/refresh |

[body login](./src/service/login/interfaces/ICreateLogin.ts)
